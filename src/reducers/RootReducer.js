import { combineReducers } from "redux";
import newsReducer from "./NewsReducer";

const rootReducer = combineReducers({
  news: newsReducer
});

export default rootReducer;
