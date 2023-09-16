import { GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_ERROR } from "./actionType";
import axios from 'axios';

const cartUrl=`https://skateboardapi.onrender.com/cart`


export const getCartAction=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_DATA_LOADING})
        const res=await axios.get(cartUrl);
        dispatch({type:GET_DATA_SUCCESS,payload:res.data})
        // const data=res.data
        console.log("getCartAction",res);
    } catch (error) {
        dispatch({type:GET_DATA_ERROR})
        // console.log(error)
    }
}