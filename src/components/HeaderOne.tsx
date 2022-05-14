import React, {FC} from 'react';

import { Row, Col, Divider } from 'antd';

const Header: FC = () => {

    return (
      <>
      <Row wrap={false}>
        <Col className="column Blue" flex="none">
          <div style={{ padding: '0 16px' }}>none</div>
        </Col>
        <Col className="column Red" flex="auto">auto with no-wrap</Col>
      </Row>
      </>
    );
  };
  
  export default Header;