import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from "./reducers/searchReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  search: searchReducer,
});


//redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
