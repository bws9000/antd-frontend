import React from 'react';

import { Layout } from 'antd';

import HeaderOne from '../components/HeaderOne';
import ContentOne from '../components/ContentOne';
import SideOne from '../components/SideOne';
import FooterOne from '../components/FooterOne';


const appLayoutStyle = () => {
  return {
    minHeight: '100vh',
    paddingLeft: '4vw',
    paddingRight: '4vw'
  }
}

const App: React.FC = () => {
  
  const { Header, Footer, Sider, Content } = Layout;

  return(
      <>
        <Layout style={appLayoutStyle()}>
          <Header style={{padding:'0'}}>
            <HeaderOne />
          </Header>
          <Layout>
            <Content>
              <ContentOne />
            </Content>
            <Sider style={{backgroundColor:'#fff'}} >
              <SideOne />
            </Sider>
          </Layout>
          <Footer>
          <FooterOne />
          </Footer>
        </Layout>
      </>
    );
};
export default App;