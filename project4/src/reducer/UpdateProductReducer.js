import { UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS } from "../types/UpdateProductTypes";

const initialState = {
    success:false
}

export const UpdateProductReducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                success:true
            }
        case UPDATE_PRODUCT_FAIL:
            return{
                ...state,
                success:false
            }
        
        default:
            return state;
    }
};