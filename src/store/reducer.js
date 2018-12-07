import * as types from './types';

const reducer = (state,action) => {
  let {type,payload}=action;
  switch (type) {
     case types.VIEW_NAV:
      return Object.assign({},state,{bNav:payload});
    case types.VIEW_FOOT:
      return Object.assign({},state,{bFoot:payload});
    case types.VIEW_LOADING:
      return Object.assign({},state,{bLoading:payload});
    case types.DATA_WEATHER:
      return Object.assign({},state,{weather:payload});
       case types.DATA_EXPRESS:
      return Object.assign({},state,{express:payload});
    case types.DATA_CITYS:
      return Object.assign({},state,{allCitys:payload});
    default:
      return state;
  }
};

export default reducer;