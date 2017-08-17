import {combineReducers} from "redux";
import BoardcastReducer from "./boardcast";
import IndexReudcer from "./index";

export default combineReducers({
  BoardcastReducer,
  IndexReudcer
});

