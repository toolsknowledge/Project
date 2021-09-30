
/*
  //class level component
  import React, { Component } from "react";
  import { connect } from "react-redux";

  class App extends Component{
    constructor(props){
      super(props);
    }

    fun_one = ()=>{
      this.props.withdraw();
    };

    fun_two = ()=>{
      this.props.deposit();
    };

    render(){
        return(
          <React.Fragment>
            <h1>{this.props.bal}</h1>
            <br></br>
            <button onClick={this.fun_one}>Withdraw</button>
            <button onClick={this.fun_two}>Deposit</button>
          </React.Fragment>
        )
    }
  };

  const receive = (state)=>{
    return{
      bal : state.bal
    }
  };


  const send = (dispatch)=>{  
    return{
      withdraw : ()=> dispatch({type:"WITHDRAW",value:1000}),
      deposit : ()=>{ dispatch({type:"DEPOSIT",value:5000}) }
    }

  }

  export default connect(receive,send)(App);
*/



import React from "react";
import { useSelector,useDispatch } from "react-redux";

function App(){
  const result = useSelector(state=>state);
  const dispatch = useDispatch();

  const withdraw = ()=>{
    dispatch({type:"WITHDRAW",value:1000});
  };

  const deposit = ()=>{
    dispatch({type:"DEPOSIT",value:5000});
  };
  return(
    <React.Fragment>
        <h1>{result.bal}</h1>
        <br></br>
        <button onClick={withdraw}>Withdraw</button>
        <button onClick={deposit}>Deposit</button>
    </React.Fragment>
  )
};

export default App;




















