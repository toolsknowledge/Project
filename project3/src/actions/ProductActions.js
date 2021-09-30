import Axios from "axios";
import { HIT_SERVER,
         CATCH_POSITIVE_RESPONSE,
         CATCH_ERROR_RESPONSE } from "../types/ProductTypes";
export const getProducts =  ()=>{
    return async (dispatch)=>{
        dispatch({type:HIT_SERVER, 
                loading:false, 
                err:"", 
                value:[] });
        try{
            const posRes = await Axios.get("http://localhost:8080/products");
            const { data } = posRes;
            dispatch({type:CATCH_POSITIVE_RESPONSE, loading:true, err:"",value: data})
        }catch(err){
            dispatch({type:CATCH_ERROR_RESPONSE, loading:true, err:err.message, value:[] })
        }
    }
};
