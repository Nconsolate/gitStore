# <center>v-react-project</center>

### 项目简介
```  
基于react，ant-design实现的、部分查询功能的小项目。（残品  有时间在完善）

```  
<center> github地址:https://github.com/Nconsolate/gitStore </center>
<center> gitee地址:https://gitee.com/Nconsolate/giteeStore </center>


## 1，安装
 
 **git clone  git clone git@github.com:Nconsolate/gitStore.git**   或者
 
  **git clone  git clone git@gitee.com:Nconsolate/giteeStore.git**

## 2，使用

**使用yarn install 或者npm install 安装依赖**

**yarn start 运行**

**访问 http://localhost:3000**

默认端口为3000

## 技术

使用了create-react-app搭建了框架。  
使用ant-design UI框架。         
参考了大漠的vw移动端适配。参考了这篇react的vw适配。https://segmentfault.com/a/1190000016780204      
在那基础上增加了ant-design的按需加载功能。  
redux+redux-thunk+react-redux实现数据状态管理。 
react-router+react-router-dom实现了路由管理。   
使用fetch进行数据的请求。proxy代理跨域。

###### 数据
    
* weather         
开始准备使用和风天气api的，后来看了下免费接口还要申请，就去放弃了。找了中华万年历的接口
http://wthrcdn.etouch.cn/weather_mini?city=城市  fiddler测下。文档是参考和风天气的。     

* express     
fiddler抓取的快递100的自动识别查询。申请的话不如直接抓方便。    
这个返回快递公司拼音 http://www.kuaidi100.com/autonumber/autoComNum?resultv2=1&text=快递号      
这个返回物流详情  http://www.kuaidi100.com/query?type=快递公司拼音&postid=快递号
 
* map     
直接用的百度地图的api，功能强大，调用简单，申请方便，而且还免费。     

###### 功能实现

天气模块的模糊搜索功能是通过正则匹配查询的哈，拼音的没有制作，返回数组的排序也没有制作，默认按首字母排序的。

地图的中心城市设置偷了个懒，直接调了天气模块设置的城市，实现方式跟天气模块设置城市功能实现一样的。

快递地址的查询需要请求2个地址，将这2次请求封装到了异步action中了，用户只需输入快递单号，就能得到返回结果。 

快递api的调用涉及了跨域，原使用fetch-jsonp进行跨域的，返回格式不对，就使用proxy进行反向代理跨域。在packge.json
加proxy :'http://www.kuaidi100.com' 就可以省略其进行跨域了。如url可以写成'/autonumber/autoComNum?resultv2=1&text=快递号'


###### 界面实现  
呃呃呃    我的UI去哪了？？？？？？？        
用ant-design的凑合下吧。。。





## 目录
```
│  .gitignore
│  config-overrides.js                      用于配置ant-design的按需加载和vw适配方案
│  package.json
│  README.md                                说明
│  yarn.lock
│  
├─config                                    暴露的ejest 可以不用暴露 
│  │  env.js
│  │  paths.js
│  │  webpack.config.dev.js
│  │  webpack.config.prod.js
│  │  webpackDevServer.config.js
│  │  
│  └─jest
│          cssTransform.js
│          fileTransform.js
│          
├─public                                    静态资源目录
│  │  favicon.ico
│  │  index.html                            页面入口
│  │  manifest.json
│  │  
│  ├─data                                   本地数据
│  │      allCitys.json                     城市json数据
│  │      
│  └─img                                    静态图片
│          express.jpg                      
│          map.jpg                          
│          weather.jpg
│          
├─scripts
│      build.js
│      start.js
│      test.js
│      
└─src
    │  index.css                            入口css
    │  index.js                             入口js
    │  serviceWorker.js
    │  
    ├─common                                通用组件
    │  ├─footer                             footer组件
    │  │      footer.css                    
    │  │      Footer.js
    │  │      
    │  ├─header                             header组件
    │  │      header.css
    │  │      Header.js
    │  │      
    │  └─loading                            loading组件
    │          Loading.css
    │          Loading.js
    │          
    ├─components                            页面组件
    │  │  App.css
    │  │  App.js                            
    │  │  App.test.js
    │  │  
    │  ├─express                            查快递
    │  │      express.css
    │  │      Express.js
    │  │      
    │  ├─home                               主页
    │  │      home.css
    │  │      Home.js
    │  │      
    │  ├─map                                查地图
    │  │      Vmap.css
    │  │      Vmap.js
    │  │      
    │  └─weather                            查天气
    │          weather.css
    │          Weather.js
    │          
    └─store                                 状态管理
            asyncActions.js                 异步action
            reducer.js                      业务处理逻辑
            state.js                        仓库
            store.js                        中间件配置
            types.js                        类型定义
    ```

![Image text](https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2667614254,1653163809&fm=179&app=42&f=JPEG?w=121&h=121)  
![Image text](https://github.com/Nconsolate/Growth/blob/v-react-project/GIFweather.gif)  
![Image text](https://github.com/Nconsolate/Growth/blob/v-react-project/GIFweather2.gif)  
![Image text](https://github.com/Nconsolate/Growth/blob/v-react-project/GIFmap.gif)  
![Image text](https://raw.githubusercontent.com/Nconsolate/Growth/v-react-project/GIFhome.gif)  
![elpx](https://github.com/Nconsolate/Growth/blob/v-react-project/elpx.jpg)
