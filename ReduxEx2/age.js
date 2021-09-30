//import createStore function
const { createStore } = require("redux");


//define the initialState
const initialState = {
    age : 20
}


//create the reducer
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "AGE_UP":
            return{
                age : state.age+action.value
            }
           
        case "AGE_DOWN":
            return{
                age : state.age-action.value
            }
        
        default:
            return state;
    }
};

//create the store
const store = createStore(reducer);


//subscription
store.subscribe(()=>{
    console.log( store.getState() );
});

//dispatch
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:1});
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:1});








