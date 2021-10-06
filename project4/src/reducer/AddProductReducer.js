import { ADD_PRODUCTS, ADD_PRODUCTS_FAIL, ADD_PRODUCTS_SUCCESS } from "../types/AddProductTypes";

const initialState = {
    result : ""
}

export const AddProductReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCTS:
        case ADD_PRODUCTS_SUCCESS:
        case ADD_PRODUCTS_FAIL:
            return{
                ...state,
                loading:action.loading,
                result:action.result,
                error:action.error
            }
        default:
            return state;
    }
};