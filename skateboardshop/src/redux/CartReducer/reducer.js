import { GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_ERROR } from "./actionType";

let intialState={
    isLoading:false,
    isError:false,
    cartData:[]
}

export const reducer=(state=intialState,{type,payload})=>{
    switch(type){
        case GET_DATA_LOADING:return{...state,isLoading:true,isError:false}
        case GET_DATA_SUCCESS:return{...state,isLoading:false,cartData:payload}
        case GET_DATA_ERROR:return{...state,isLoading:false,isError:true}
       
       
        default:return state;
    }
}