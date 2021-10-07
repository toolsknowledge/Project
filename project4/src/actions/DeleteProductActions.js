import axios from "axios";
import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS } from "../types/DeleteProductTypes";
export const deleteProduct = (id)=>{
    return async (dispatch)=>{
        try{
            const {data} = await axios.delete("http://localhost:8080/delete",{ data: { "p_id": id }} );
            dispatch({
                type:DELETE_PRODUCT_SUCCESS,
                error:"",
                result:"success"
            })
        }catch(err){
            dispatch({
                type:DELETE_PRODUCT_FAIL,
                error:"Network Error",
                result:"fail"
            })
        }
    }
}; 