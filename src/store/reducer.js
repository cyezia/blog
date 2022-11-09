import { combineReducers } from "redux-immutable";
import { reducer as tables } from './tables/index';

const reducer = combineReducers({
  tables: tables
})

export default reducer;