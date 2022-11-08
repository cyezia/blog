// 存放 initialState 和 reducer 函数

import { type } from './actionCreators';

const initialState = {
  articleList: []
};

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case type.SWITCH_MENU:
      return {
        articleList: action.articleList
      };
      default:
        return state;
  }
}

export default articleReducer;