import {createStore,applyMiddleware} from 'redux';//applyMiddleware == redux api
import reducer from './reducer';
import state from './state';
import thunk from 'redux-thunk'
let store = createStore(
  reducer,
  state,
  // applyMiddleware(第三方的中间价传入，为了改造dispatch接受函数)
  // applyMiddleware(中间件1,2,3,....)
  applyMiddleware(thunk)
);
export default store;