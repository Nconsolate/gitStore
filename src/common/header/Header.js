import React from 'react';
import './header.css'
let    pathnameChange=val=>{
           switch(val){
              case 'home':return '主页';
               case 'weather':return '查天气';
               case 'express':return '查快递';
               case 'map':return '查地图';
               default:return val;
           }
           }
const Header = (props) => (
   <div className="header-nav">{pathnameChange(window.location.pathname.substr(1))}</div>
);

export default Header;

