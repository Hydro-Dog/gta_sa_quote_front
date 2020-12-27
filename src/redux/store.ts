import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

// createStore принимает в качетсве аргумента reduceEachTrailingCommentRange. reducer твечает за изменение state
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
