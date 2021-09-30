const initialState = {
    age : 20
}
const reducer = (state=initialState,action)=>{     //{type:"AGE_UP",value:1}    //dispatch
                                                   //{type:"AGE_DOWN",value:1}  //dispatch
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age : state.age+action.value
            }
        case "AGE_DOWN":
            return{
                ...state,
                age : state.age-action.value
            }

        default:
            return state;
    }
};
export default reducer;