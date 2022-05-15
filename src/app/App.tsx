import React from 'react';

import { Layout } from 'antd';

import {
  HeaderOne, 
  FooterOne, 
  SideOne, 
  ContentOne
} from '../layout';

const App: React.FC = () => {
  
  const { Header, Footer, Sider, Content } = Layout;

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