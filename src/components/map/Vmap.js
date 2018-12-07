import React, { Component } from 'react';
import {connect} from 'react-redux'
import './Vmap.css'
class Vmap extends Component {
   constructor(props){
        super(props)       
    }
    componentDidMount() {
                const { BMap, 
                BMAP_NORMAL_MAP,
                BMAP_ANCHOR_TOP_LEFT,
                BMAP_NAVIGATION_CONTROL_LARGE,
                BMAP_HYBRID_MAP} = window
            var map = new BMap.Map("allmap"); 
        // 创建Map实例
            let city = (!this.props.city)?'上海':this.props.city;
            map.centerAndZoom(city,11)
 var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
  });
  map.addControl(navigationControl);
  map.addControl(geolocationControl);
  map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));	  
            map.enableScrollWheelZoom(true);
  // 添加定位控件
  var geolocationControl = new BMap.GeolocationControl();
  geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  

          
          

    }
 
    render() {
        return (
            <div id="allmap"></div>
        );
    }
}


let initMapStateToProps = state =>({
  city:state.weather.city,
});

let initMapDispatchToProps = dispatch =>({
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Vmap)