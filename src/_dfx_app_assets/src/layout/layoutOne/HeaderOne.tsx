import React, {FC} from 'react';

import { Row, Col, Space } from 'antd';

import { SearchComponent } from '../../components/ant';

import { 
  LinkedinOutlined, 
  HomeOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
  ProfileOutlined,
  ScheduleOutlined } from '@ant-design/icons';

import Web3 from '../../components/ui/Web3';


const Header: FC = () => {
  
    return (

      <Row className="mainHeaderRow" align={'middle'} justify={'space-evenly'} wrap={false}>
        
        <Col className="columnFlex"> 
            <LinkedinOutlined className="logoIcon" />
        </Col>

        <Col className="columnOne" flex="auto">
          <Row justify={'start'} wrap={false} >
            
            <Col className="columnFlex" span={8} >
              <SearchComponent />
            </Col>

            <Col span={16}>

              <Space size={4} direction={'horizontal'}>

              <Col className="mainHeaderIconContainer">
                  <span><HomeOutlined className="navIcon" /></span>
                  <span>Home</span>
              </Col>

              <Col className="mainHeaderIconContainer">
                  <span><UsergroupAddOutlined className="navIcon" /></span> 
                  <span>Network</span>
              </Col>

              <Col className="mainHeaderIconContainer">
                  <span><MessageOutlined  className="navIcon"/></span> 
                  <span>Messages</span>
              </Col>

              <Col className="mainHeaderIconContainer">
                  <span><ScheduleOutlined className="navIcon" /></span>
                  <span>Notifications</span>
              </Col>

              <Col className="mainHeaderIconContainer">
                  <span><ProfileOutlined className="navIcon"/></span> 
                  <span>Me</span>
              </Col>

              <Web3 />

              </Space>
            </Col>
          </Row>
        </Col>

      </Row>
      
    );
  };
  
  export default Header;