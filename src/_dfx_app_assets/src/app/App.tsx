import React, { FC } from 'react';

import { 
  BrowserRouter as Router, 
  Routes, Route, Link } from 'react-router-dom';

import { Layout } from 'antd';

import {
  HeaderOne, 
  FooterOne, 
  SideOne, 
  ContentOne,
  ContentTwo
} from '../layout';

const App: FC = () => {
  
  const { Header, Footer, Sider, Content } = Layout;

  return(

      <Router>
        <Layout className="mainLayout" hasSider={false}>
          <Header className="mainHeader">
            <HeaderOne />
          </Header>
          <Layout hasSider={true}>
            <Content>

              <Routes>
                <Route path='/' element={<ContentOne />}/>
                <Route path='/test' element={<ContentTwo />} />
                <Route path='*' element={(<div> 404 - Page Not Found</div>)} />
              </Routes>

            </Content>

            <Sider>
              <SideOne />
            </Sider>
            
          </Layout>
          <Footer>
          <FooterOne />
          </Footer>
        </Layout>
      </Router>

    );
};
export default App;