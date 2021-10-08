import axios from "axios";
import { UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAIL} from "../types/UpdateProductTypes";
export const UpdateProduct = (pid,pcost)=>{
    return async (dispatch)=>{
        try{
            const {data} = await axios.put("http://localhost:8080/update",{"p_id":pid,"p_cost":pcost});
            dispatch({
                type:UPDATE_PRODUCT_SUCCESS,
                result:data,
                error:""
            })
        }catch(err){
            dispatch({type:UPDATE_PRODUCT_FAIL,
                      result:"",
                      error:err.message});
        }
    };
};