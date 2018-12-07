import React, {Component} from 'react'
import './home.css';

import {Link} from 'react-router-dom'
import { Carousel } from 'antd';
// import * as types from "../../store/types";
 import { connect } from "react-redux";

// import {asyncAction1,asyncAction2,asyncAction3} from '../../store/asyncActions';

class Home extends Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div className='home-box'>
        <Carousel autoplay>
       <Link  to="/express"><img src='/img/express.jpg'/></Link>
        <Link to="/weather"><img src='/img/weather.jpg'/></Link>
         <Link  to="/map"><img src='/img/map.jpg'/></Link>   
  </Carousel>
  <br/>
     <Carousel autoplay>
       <Link  to="/express"><img src='/img/express.jpg'/></Link>
        <Link to="/weather"><img src='/img/weather.jpg'/></Link>
         <Link  to="/map"><img src='/img/map.jpg'/></Link>   
    </Carousel>
  </div>
    )
  }
}

let initMapStateToProps = state =>({
});

let initMapDispatchToProps = dispatch =>({
 
});

export  default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home)