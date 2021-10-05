import axios from "axios";
import { PRODUCTS_LOADING,
         PRODUCTS_LOADING_SUCCESS,
         PRODUCTS_LOADING_FAIL } from "../types/ProductTypes";
export const getProducts = ()=>{
    return async (dispatch)=>{
        dispatch({type:PRODUCTS_LOADING,
                  error:"",
                  products:[],
                  loading:false});
        try{
            const {data} = await axios.get("http://localhost:8080/fetch");
            dispatch({
                type:PRODUCTS_LOADING_SUCCESS,
                error:"",
                loading:true,
                products:data

            })
        }catch(err){
            dispatch({
                type:PRODUCTS_LOADING_FAIL,
                error : err.message,
                products:[],
                loading:true
            })
        }
    }
};