import React from 'react';
import './footer.css';
import {NavLink,withRouter} from 'react-router-dom'
import { Row, Col  } from 'antd';
const Footer = (props) => (
   <Row  type="flex" justify="space-around" align='middle' >
      <Col span={5} className='colstyle'><NavLink activeClassName='activeC' to="/home">去首页</NavLink></Col>
      <Col span={5} className='colstyle' ><NavLink activeClassName='activeC' to="/weather">查天气</NavLink></Col>
      <Col span={5} className='colstyle'><NavLink activeClassName='activeC' to="/map">查地图</NavLink></Col>
      <Col span={5} className='colstyle' ><NavLink activeClassName='activeC' to="/express">查快递</NavLink></Col>
    </Row>
);
export default withRouter(Footer);