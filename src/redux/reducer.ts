import { combineReducers } from "redux";
import quoteReducer from "./quotes/quote-reducer";

const rootReducer = combineReducers({
  quote: quoteReducer,
});

export default rootReducer;
