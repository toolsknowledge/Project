import axios from "axios";
import { ADD_PRODUCTS, ADD_PRODUCTS_FAIL, ADD_PRODUCTS_SUCCESS } from "../types/AddProductTypes";

export const addProduct = (record)=>{
    return async (dispatch)=>{
        dispatch({type:ADD_PRODUCTS,
                  loading:false,
                  result:"",
                  error:""});
        try{
            const {data} = await axios.post("http://localhost:8080/insert",record);
            dispatch({
                type:ADD_PRODUCTS_SUCCESS,
                loading:true,
                result:data.insert,
                error:""
            })
        }catch(err){
            dispatch({
                type:ADD_PRODUCTS_FAIL,
                loading:true,
                result:"",
                error:err.message
            })
        }
    }
};