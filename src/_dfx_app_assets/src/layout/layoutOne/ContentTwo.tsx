import React, {FC} from 'react';

import { Card, Layout } from 'antd';

const ContentTwo: FC = () => {

  const { Header, Footer, Sider, Content } = Layout;

    return (
      <Layout className="contentLayout" hasSider={false}>
        <div>ContentTwo</div>
      </Layout>
    );
  };
  
export default ContentTwo;