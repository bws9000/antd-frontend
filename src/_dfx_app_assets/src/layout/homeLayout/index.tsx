import React, { FC } from 'react';

import { Layout } from 'antd';

import HeaderOne from './pages/HeaderOne';
import ContentOne from './components/testOne';
import SideOne from './pages/SideOne';
import FooterOne from './pages/FooterOne';

const HomeLayout: FC = () => {
  
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
            
            <Sider>
              <SideOne />
            </Sider>

          </Layout>
          
          <Footer>
            <FooterOne />
          </Footer>

        </Layout>

    );
};
export default HomeLayout;