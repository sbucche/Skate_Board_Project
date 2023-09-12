
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import productReducer from "./ProductReducer/productReducer"
import authReducer from "./AuthReducer/authReducer"

let middleware= [thunk]

const rootReducer = combineReducers({productReducer,authReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))
