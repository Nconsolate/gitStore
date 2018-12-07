import React from 'react';
import { Spin,Alert } from 'antd';
import './Loading.css';

const Loading = () => (
   <Spin  tip="Loading...">
    <Alert  className='bg-box'
    type='success'
    />
  </Spin>
);
export default Loading;