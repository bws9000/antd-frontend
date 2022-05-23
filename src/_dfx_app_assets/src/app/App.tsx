import React, { FC, useState} from 'react';

import { Layout } from 'antd';

import Web3 from '../lib/hooks/web3';

import {
  HeaderOne, 
  FooterOne, 
  SideOne, 
  ContentOne
} from '../layout';

const App: FC = () => {
  
  const { Header, Footer, Sider, Content } = Layout;

  const { openWallet, account } = Web3();
  
  openWallet();

  if(account){ console.log(account) }

  return(
      
        <Layout className="mainLayout" hasSider={false}>
          <Header className="mainHeader">
            <HeaderOne />
          </Header>
          <Layout hasSider={true}>
            <Content>
              <ContentOne />
            </Content>
            <Sider style={{opacity:'0.0'}} >
              <SideOne />
            </Sider>
          </Layout>
          <Footer>
          <FooterOne />
          </Footer>
        </Layout>
      
    );
};
export default App;