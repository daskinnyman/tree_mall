import { orderReducer } from "./order";
import {
  combineReducers,
  createStore,
  applyMiddleware,
  Middleware,
} from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  order: orderReducer,
});

export type rootSate = ReturnType<typeof rootReducer>;

const middleware: Middleware[] = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middleware)
);
