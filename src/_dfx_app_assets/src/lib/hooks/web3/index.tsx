import { useRef, useState } from 'react';
import Web3 from 'web3';

const windowEthereum = () => {

  const [account, setAccount] = useState('');
  
  let wRef = useRef(new Web3(Web3.givenProvider)).current;
  
  const openOnPageLoad = async () => {
    
    try{
      setAccount(await wRef.eth.requestAccounts().then((acc)=>{
            return acc[0];
      }));
    } catch(e){
      console.log('* ' + e.message);
    }
    
  }

  return { openWallet: openOnPageLoad, account };
}

export default windowEthereum;