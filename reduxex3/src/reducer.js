//reducer
//business logic called as reducer


//initial state
const initialState = {
    bal : 10000
}
                                                

//create the reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "DEPOSIT":
           return{
               ...state,
               bal : state.bal+action.value
           }

        case "WITHDRAW":
           return{
               ...state,
               bal : state.bal-action.value
           }
           
        default:
            return state;
    }
};

export default reducer;