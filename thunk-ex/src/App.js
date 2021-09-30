import React, { Component } from "react";
import * as actions from "./actions/bank.actions";
import { connect } from "react-redux";

class App extends Component{
    constructor(props){
      super(props);
    }

    deposit = ()=>{
       this.props.fun_one(5000);
    };

    withdraw = ()=>{
        this.props.fun_two(1000);
    };

    render(){
      return(
         <React.Fragment>
             <h1>Bal : {this.props.bal}</h1>
             <br></br>
             <button onClick={this.deposit}>Deposit</button>
             <button onClick={this.withdraw}>Withdraw</button>
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
    fun_one : (value)=> dispatch(actions.depositSync(value)),
    fun_two : (value)=> dispatch(actions.withdrawSync(value))  
  }
};

export default connect(receive,send)(App);