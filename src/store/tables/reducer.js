// 存放 initialState 和 reducer 函数

import { fromJS } from 'immutable';

const defaultState = fromJS({
  dataSource: [],
  editObj: {}
})

export default(state = defaultState, action) => {
  // debugger
  switch(action.type) {
    case 'ADD_ARTICLE':
      console.log('state :>> ', state.get('dataSource').toJS());
      return state.merge({
        'dataSource': state.get('dataSource').push(action.dataSource),
      })
    case 'EDIT_ITEM':
      return state.set('editObj', action.obj)
    case 'DELETE_ITEM':
      return state.set('dataSource', state.get('dataSource').splice(action.key,1))
    default:
      return state;
  }
}

