import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import pairsReducer from "../store/reducers/coinPair";

const rootReducer = combineReducers({
  pairs: pairsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
