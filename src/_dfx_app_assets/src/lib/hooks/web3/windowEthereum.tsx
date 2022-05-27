import { useCallback, useEffect, useRef, useState } from 'react';

import Web3 from 'web3';
import IWallet from '../../../interface/web3/IWallet';

const windowEthereum = () => {

  const wRef = useRef(new Web3(Web3.givenProvider)).current;

  const [account, setAccount] = useState<IWallet>();
  const [web3Error, setWeb3Error] = useState('');

  const updateStatus = useCallback( async () => {
      const address = await getAddressZero();
      const balance = await getAddressBalance(address);
      setAccount({ address, balance});
  },[setAccount])
  
  const openWallet = async () => {  
    try{
      setAccount(await wRef.eth.requestAccounts().then((acc: any[])=>{
            return acc[0];
      }));
    } catch(e){
      setWeb3Error(e.message);
    }
  }

  const getAddressZero = async () => {
    const accounts = await wRef.eth.getAccounts();
    return accounts[0];
  };

  const getAddressBalance = async (address: string) => {
    return (address) ? await wRef.eth.getBalance(address) : undefined;
  };

  useEffect(() => {
    
    updateStatus();

    if(window.ethereum) {
      window.ethereum.on('accountsChanged', updateStatus);
      window.ethereum.on('chainChanged', updateStatus);
    }
    return () => {
      window.ethereum.removeListener('accountsChanged', updateStatus);
      window.ethereum.removeListener('chainChanged', updateStatus);
    };
  }, [updateStatus]);

  return { 
    openWalletFunc: openWallet,
    updateFunc: updateStatus,
    error: web3Error, 
    account };
}

export default windowEthereum;