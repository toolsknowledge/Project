//import createStore function from redux
const { createStore } = require("redux");
//createStore function used to create the store

//define initialState
const initialState = {
    bal : 10000   
}

//create the reducer
const reducer = (state=initialState,action)=>{
    if(action.type === "WITHDRAW"){
        return{
            bal : state.bal-action.amount
        }
    }else if(action.type === "DEPOSIT"){
        return{
            bal : state.bal+action.amount
        }
    }else{
        return state;
    }
};

//create the store
const store = createStore(reducer);

//subscribe the result
store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch
store.dispatch({type:"WITHDRAW",amount:2000});
store.dispatch({type:"DEPOSIT",amount:5000});
store.dispatch({type:"WITHDRAW",amount:1000});