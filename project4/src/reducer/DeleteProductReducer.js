import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS } from "../types/DeleteProductTypes";

const initialState = {
    error:"",
    result:""
}

export const deleteproductReducer = (state=initialState,action)=>{
    switch(action.type){
        case DELETE_PRODUCT_SUCCESS:
        case DELETE_PRODUCT_FAIL:
            return{
                ...state,
                error:action.error,
                result:action.result
            }
        default:
            return state;
    }
};