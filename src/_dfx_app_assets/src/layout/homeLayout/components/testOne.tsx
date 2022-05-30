import React, {FC} from 'react';

import { Card, Layout } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const testOne: FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

    return (
      <Layout className="contentLayout" hasSider={false}>
        
      <Card
        className="cardOne"
        title="Read/Write to Internet Computer"
        extra={<a href="#">More</a>}
      >

        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
              <Form.Item
                label="Test Value"
                name="testValue"
                rules={[
                  {
                    required: true,
                    message: 'Enter a value.',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{ offset: 4, span: 8,}}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>

        </Form>


    </Card>
      </Layout>
    );
  };
  
export default testOne;