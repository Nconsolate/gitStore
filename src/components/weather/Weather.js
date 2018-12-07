import React,{Component}  from 'react'
import { AutoComplete,Button,notification,Tabs,Icon,Row, Col  } from 'antd';
import './weather.css'
import {asyncAction1} from '../../store/asyncActions'
import * as types from '../../store/types'
import {connect} from 'react-redux'
import { StickyContainer, Sticky } from 'react-sticky';
const TabPane = Tabs.TabPane;
const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

class Weather extends Component{
    constructor(props){
        super(props)
       !props.weather.city&&props.getWeatherData() 
      //  console.log(props.allCitys)
       !props.allCitys.length&&props.getAllCitys() 
         this.state = { setcity:'',dataSource: []};
         this.cityChange = this.cityChange.bind(this);
         this.citySearch = this.citySearch.bind(this);
          this.checkCity = this.checkCity.bind(this);
         this.onSelect = this.onSelect.bind(this);
        this.openNotification = () => {
              notification.open({
              message: 'error',
              description: '输入的城市有误，请重新输入',
              })}

    }

      checkCity(){
       let checkarr=this.state.setcity&&this.props.allCitys&&this.props.allCitys.filter(item => { 
       if (item['value']===this.state.setcity)  return item;
      
        })
         //console.log(checkarr)
          checkarr == 0?this.openNotification():this.props.getWeatherData(this.state.setcity);
          return 1;
                }
  
    onSelect(value) {
        this.props.getWeatherData(value);
                }
     cityChange(value){
      this.setState({setcity:value})
                }
     
      citySearch(value){
       // console.log(this.props.allCitys)
        let re = new RegExp(value);
        let newarr = [];
        value&&this.props.allCitys&&this.props.allCitys.map(item =>  
          {
            if(re.test(item['value'])) 
              newarr.push(item['value'])
           return 1;
            })
         newarr = Array.from(new Set(newarr));
          if (newarr.length>5) newarr.length = 5 ;
       this.setState({
                 dataSource: newarr,
                    });           
      }
      //  callback1=(key)=>{
      //   console.log(key);
      // }

   render(){
     let {city,ganmao,wendu,yesterday,forecast}=this.props.weather
      let{ dataSource } = this.state
   
return (
   <div className="t-c weather-box">  
      <Row   type="flex" justify="space-around" align='middle' >
        <Col  span={2} >
          <div className="t-c">
            <Icon   type="heart" className='icon-24' theme="twoTone" twoToneColor="#eb2f96" />
          </div>   
       </Col>
       <Col span={3}  >
      <div className='l-s30'>{city}</div>
          
       </Col>
      <Col span={10} >
      <AutoComplete 
     className='wh100'
      type="text" 
       dataSource={dataSource}
       onSearch={this.citySearch}
       onSelect={this.onSelect}
       onChange={this.cityChange}
       allowClear={true}
       placeholder='请输入城市'/>
       </Col>
       <Col span={4} >
     <Button 
     type='primary'
       onClick={this.checkCity}>更换</Button>
     </Col>
     </Row>
      {wendu&&ganmao&&<div>
        <p>温度:{wendu}&#8451;</p>
        <p>今日建议:{ganmao}</p>
      </div>}
    <StickyContainer>
    {city&&wendu&&yesterday&&forecast&&
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} type="card">
     <TabPane tab={yesterday.date} key='0'>
     <p>日期:{yesterday.date}</p>
      <p>风力:{yesterday.fl}</p>
      <p>风向:{yesterday.fx}</p>
      <p>最高:{yesterday.high}</p>
      <p>最低:{yesterday.low}</p>
      <p>天气:{yesterday['type']}</p>
     </TabPane>
     
      {forecast&&forecast.map((item,index)=>(     
     <TabPane tab={item.date} key={index+1}>
     <p>日期:{item.date}</p>
      <p>风力:{item.fengli}</p>
      <p>风向:{item.fengxiang}</p>
      <p>最高:{item.high}</p>
      <p>最低:{item.low}</p>
      <p>天气:{item['type']}</p>
     </TabPane>
       ))} 
    </Tabs> }
    </StickyContainer>
       </div>)
}
}

let initMapStateToProps = state =>({
   weather:state.weather,
   allCitys:state.allCitys
});

let initMapDispatchToProps = dispatch =>({
  getWeatherData:(citys)=>{
    citys=citys===undefined?'上海':citys;
    let url=`http://wthrcdn.etouch.cn/weather_mini?city=`+citys;
    asyncAction1(url,dispatch,types.DATA_WEATHER)
  },
  getAllCitys:()=>{
    let url='/data/allCitys.json';
     
    asyncAction1(url,dispatch,types.DATA_CITYS)
  }
});
export  default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Weather)

