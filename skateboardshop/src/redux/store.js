
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import productReducer from "./ProductReducer/productReducer"
import authReducer from "./AuthReducer/authReducer"
import {reducer} from "./CartReducer/reducer"

let middleware= [thunk]

// productReducer,authReducer,
const rootReducer = combineReducers({reducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))
