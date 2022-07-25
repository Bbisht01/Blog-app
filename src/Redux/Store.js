
import {createStore,applyMiddleware} from "redux"
import { reducer } from "./Reducer";
import logger from "redux-logger";
const thunk = require("redux-thunk").default;


export const store = createStore(reducer,applyMiddleware(thunk, logger))



