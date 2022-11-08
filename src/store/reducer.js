// 引入combineReducers汇总多个reducer

import { combineReducers } from 'redux';
import { reducer as menuReducer } from '../pages/store/index';
import { reducer as articleReducer} from '../pages/administer/blogManagement/article/store/index';

export default combineReducers({
  menu: menuReducer,
  article: articleReducer,
})