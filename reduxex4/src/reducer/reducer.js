const initialState = {
    age : 20
}

const reducer = (state=initialState,action)=>{
    //action is object
    //syntax : {type:"AGE_UP",value:1}  /  {type:"AGE_DOWN",value:1}
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age:state.age+action.value
            }
        case "AGE_DOWN":
            return{
                ...state,
                age:state.age-action.value
            }

        default:
            return state;
    }
};

export default reducer;