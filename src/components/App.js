import React, { Component } from 'react'
import { Route, Redirect,withRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Loading from "../common/loading/Loading"

import Home from "./home/Home"
import Weather from './weather/Weather'
import Express from './express/Express'
import Vmap from './map/Vmap'
 import './App.css'
import * as types from '../store/types'

class App extends Component {
  render() {
     let {bNav,bFoot,bLoading} = this.props
    return (
     
       <React.Fragment>
        { bLoading&&<Loading/> }
        { bNav&&<Header/> }
        <div  className='flex1'>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/weather" component={Weather}/>
          <Route path="/express" component={Express}/> 
          <Route path="/map" component={Vmap}/>
          <Redirect exact from="/" to="/home" />
          <Redirect exact from="/logout" to="/home" />
          <Route component={Error}/>
        </Switch>
        </div>
        {bFoot&&<Footer/>}
       </React.Fragment>
    )
  }


 componentWillReceiveProps(nextProps){
  // console.log('componentWillReceiveProps')
    let path = nextProps.location.pathname;
     if (/weather|express|home/.test(path)){
      this.props.viewNav(true);
      this.props.viewFoot(true);
    }
     if (/map/.test(path)){
      this.props.viewNav(false);
      this.props.viewFoot(true);
    }
  }
}


let initMapStateToProps = state =>({
 
  bLoading:state.bLoading,
  bNav:state.bNav,
  bFoot:state.bFoot

});

let initMapDispatchToProps = dispatch =>({
  viewNav:(nb)=>{
    dispatch({type:types.VIEW_NAV,payload:nb})
  },
  viewFoot:(fb)=>dispatch({type:types.VIEW_FOOT,payload:fb})
});

export  default withRouter(connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App))
