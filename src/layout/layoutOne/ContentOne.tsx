import React, {FC} from 'react';

import { Card, Layout } from 'antd';

const ContentOne: FC = () => {

  const { Header, Footer, Sider, Content } = Layout;

    return (
      <Layout className="contentLayout" hasSider={false}>
        
      </Layout>
    );
  };
  
export default ContentOne;