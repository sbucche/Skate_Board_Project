import { GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_ERROR ,POST_DATA_LOADING,POST_DATA_SUCCESS,POST_DATA_ERROR,DELETE_DATA_LOADING,DELETE_DATA_SUCCESS,DELETE_DATA_ERROR} from "./actionType";
import axios from 'axios';

const cartUrl=`https://skateboardapi.onrender.com/products`


export const getCartAction=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_DATA_LOADING})
        const res=await axios.get(cartUrl);
        dispatch({type:GET_DATA_SUCCESS,payload:res.data})
        // const data=res.data
        // console.log("getCartAction",res);
    } catch (error) {
        dispatch({type:GET_DATA_ERROR})
        // console.log(error)
    }
}

export const postData=(payload)=>async(dispatch)=>{
    try {
        dispatch({type:POST_DATA_LOADING})
        await axios.post(cartUrl,payload)
        dispatch({type:POST_DATA_SUCCESS})
    } catch (error) {
        dispatch({type:POST_DATA_ERROR})
    }
}

export const updateData=(id,payload)=>async(dispatch)=>{
    try {
        // dispatch({type:GET_DATA_LOADING})
        await axios.put(`${cartUrl}/${id}`,payload)
        // dispatch({type:GET_DATA_SUCCESS,payload:res.data})
        console.log("up",id,payload)
    } catch (error) {
        // dispatch({type:GET_DATA_ERROR})
    }
}

export const toggleData=(id,status)=>async(dispatch)=>{
    try {
        // dispatch({type:POST_DATA_LOADING})
        await axios.patch(`${cartUrl}/${id}`,{status:!status})
        // dispatch({type:POST_DATA_SUCCESS})
    } catch (error) {
        // dispatch({type:POST_DATA_ERROR})
    }
}

export const deleteData=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_DATA_LOADING})
        await axios.delete(`${cartUrl}/${id}`)//changing database
        dispatch({type:DELETE_DATA_SUCCESS})
        console.log("dlt")        
    } catch (error) {
        dispatch({type:DELETE_DATA_ERROR})
        console.log("dltN")  
    }
}