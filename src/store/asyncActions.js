import * as types from './types';
export let asyncAction1 = (url, dispatch,type) => {
  
  dispatch({type: types.VIEW_LOADING, payload:true});

  fetch(
    url
  ).then(
    res => res.json()
  ).then(
    data => {
    
      setTimeout(()=>{
       dispatch({type:types.VIEW_LOADING,payload:false});
        dispatch({type:type,payload:data.data});//提交数据给reducer->state
      },1000)
    }
  );}

export let asyncAction2 = (url, dispatch,type) => {
  dispatch({type: types.VIEW_LOADING, payload:true});
  fetch(
    url[1]+url[0]
  ).then(
    res =>res.json()
  ).then(
    data1 => {
  if(data1.auto[0]!==''&&data1.auto[0].comCode)
  {
    fetch(
    url[2]+data1.auto[0].comCode+'&postid='+url[0]
  ).then(
    res =>res.json()
  ).then(
    data2 => {
      dispatch({type:types.VIEW_LOADING,payload:false});
     if(data2.message==='ok') setTimeout(()=>{
        dispatch({type:type,payload:data2})
      },1000)
      else
      setTimeout(()=>{
        dispatch({type:type,payload:{'message':0}})
      },1000)
    }
  ) }
  else{
    setTimeout(()=>{
        dispatch({type:types.VIEW_LOADING,payload:false});
        dispatch({type:type,payload:{'message':1,'com':data1.auto[0].comCode}})
      },1000)
  }
    }
  );
  };

//   //显示loading
//   return {type: types.VIEW_LOADING, payload:true}
// };

// /*
// export let asyncAction3 = (url, dispatch,type) => {
//   return ()=>{
//     //显示loading
//     dispatch({type: types.VIEW_LOADING, payload:true});
//     //读数据
//     fetch(
//       url
//     ).then(
//       res => res.json()
//     ).then(
//       data => {
//         //返回数据给reducer ,隐藏loading
//         setTimeout(()=>{
//           dispatch({type:types.VIEW_LOADING,payload:false});
//           dispatch({type:type,payload:data});//提交数据给reducer->state
//         },1000)
//       }
//     );
//   }
// };*/

// export let asyncAction3 = (url,type) => (dispatch,getState)=>{
//   //显示loading getState==redux 里面的api getState获取一次state
//   dispatch({type: types.VIEW_LOADING, payload:true});
//   //读数据
//   fetch(
//     url
//   ).then(
//     res => res.json()
//   ).then(
//     data => {
//       //返回数据给reducer ,隐藏loading
//       setTimeout(()=>{
//         dispatch({type:types.VIEW_LOADING,payload:false});
//         dispatch({type:type,payload:data});//提交数据给reducer->state
//       },1000)
//     }
//   );
// }