// 存放 initialState 和 reducer 函数

import { type } from './actionCreators';

const initialState = {
  menuName: ['']
};

const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case type.SWITCH_MENU:
      return {
        menuName: action.menuName
      };
      default:
        return state;
  }
}

export default menuReducer;