import React, {FC} from 'react';

import { Card, Layout } from 'antd';

const ContentOne: FC = () => {

  const { Header, Footer, Sider, Content } = Layout;

    return (
      <Layout className="contentLayout" hasSider={false}>
        <div>ContentOne1</div>
      </Layout>
    );
  };
  
export default ContentOne;