import React from 'react';

import { Layout } from 'antd';

import HeaderOne from '../components/HeaderOne';
import ContentOne from '../components/ContentOne';
import SideOne from '../components/SideOne';
import FooterOne from '../components/FooterOne';

const App: React.FC = () => {
  
  const { Header, Footer, Sider, Content } = Layout;

  return(
      <div className="main">
      <Layout>
          <Header>
            <HeaderOne />
          </Header>
          <Layout>
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
      </div>
    );
};
export default App;