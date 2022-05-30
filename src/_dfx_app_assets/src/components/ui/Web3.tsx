
import React, { useEffect } from 'react';

import { WalletOutlined } from '@ant-design/icons';
import { Col } from 'antd';

import Web3ConnectionStatus from '../../lib/hooks/web3';

const Web3 = () => {

    const {
        openWalletFunc, 
        account } = Web3ConnectionStatus();

    const handleConnectWallet = () => {
        openWalletFunc();
    }

    useEffect(()=>{
        if(account?.address){
            console.log(account);
        }
    },[account]);

    const walletIcon = () => {
        return (
            <Col onClick={()=>handleConnectWallet()} className="mainHeaderIconContainer navPointer">
            <span><WalletOutlined className="navIcon"/></span>
            <span>Web3</span>
        </Col>
        )
    }

    return(
        
        <>
        {account && walletIcon()}
        </>
        

    )
}
export default Web3;