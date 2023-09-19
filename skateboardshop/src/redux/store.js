import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import {reducer} from "./CartReducer/reducer"

let middleware= [thunk]

// productReducer,authReducer,
const rootReducer = combineReducers({reducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))