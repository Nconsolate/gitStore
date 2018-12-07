import {Component} from 'react'
import React from 'react'
import { Input,Timeline } from 'antd';
import './express.css'
import {asyncAction2} from '../../store/asyncActions'
import * as types from '../../store/types'
import {connect} from 'react-redux'
const Search = Input.Search;
class Express extends Component{
    constructor(props){
        super(props)
        // props.getChange()
           this.state = { expressValue:0};
          this.searchExp = this.searchExp.bind(this);
          
    }
  searchExp(value){
     this.setState({
                 expressValue: value,
                    });  
    if(value)
    this.props.getExpressData(value);
                }
 stateSwitch(value){
    switch(value){
      case '0':return '在途中';
      case '1':return '已揽收';
      case '2':return '疑难';
      case '3':return '已签收';
      case '4':return '退签';
      case '5':return '同城派送中';
      case '6':return '退回';
      case '7':return '转单';
      default: return value;
       }
   }
   ischeckSwitch(value){
    switch(value){
      case '0':return '未签收';
      case '1':return '已签收';
       default: return value;
      }
   }

render(){
   let {message,com,nu,ischeck,state,data}=this.props.expressMsg
 let   {expressValue}  =  this.state
  return(
   <div className='express-box'>
        <Search
      placeholder="请输入运单号"
      onSearch={value=>this.searchExp(value)}
      enterButton
    />
{expressValue===''&&<h3 className='red'>请输入正确的快递单号</h3>}
    <br /><br />
    
    {com&&nu&&state&&ischeck&&
    <div  className='pl-50'>
      <p>快递公司：{com}</p>
      <p>快递单号：{nu}</p>
      <p>快递状态：{this.stateSwitch(state)}</p>
      <p>签收状态：{this.ischeckSwitch(ischeck)}</p>
      </div>}
    {message===0?<h3 className='red'>该快递单号不存在或者还没有物流哦</h3>:
      message===1?<h3 className='red'>请输入正确的快递单号</h3>:
       message==='ok'?<h3>物流详情</h3>:<br></br>
      }
    <Timeline>
    {data&&data.map((item,index)=>( 
        <Timeline.Item  key={index}>
        <span>{item.ftime} : </span> 
        <p>{item.context}</p>
        </Timeline.Item>
        ))
    }
    </Timeline>

  </div>
  )
}
}  
let initMapStateToProps = state =>({
   expressMsg:state.express,
});

let initMapDispatchToProps = dispatch =>({
  getExpressData:(postid)=>{
    let url=[postid,`/autonumber/autoComNum?resultv2=1&text=`,
   '/query?type=' ]
    asyncAction2(url,dispatch,types.DATA_EXPRESS)
  }
});
export  default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Express)





