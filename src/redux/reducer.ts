import { combineReducers } from "redux";
import { characterListReducer } from "./characters/characters.reducer";
import quoteReducer from "./quotes/quote-reducer";

const rootReducer = combineReducers({
  quote: quoteReducer,
  characterList: characterListReducer,
});

export default rootReducer;
