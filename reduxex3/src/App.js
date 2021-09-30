import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component{
  constructor(props){
     super(props);
  }
  fun_one = ()=>{
     this.props.deposit();
  }
  fun_two = ()=>{
     this.props.withdraw();
  }
  render(){
     return(
        <React.Fragment>
            <h1>{this.props.bal}</h1>
            <button onClick={this.fun_one}>DEPOSIT</button>
            <button onClick={this.fun_two}>WITHDRAW</button>
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
      deposit : ()=>{ dispatch({type:"DEPOSIT",value:2000}) },
      withdraw : ()=>{ dispatch({type:"WITHDRAW",value:1000}) }
    }
};



export default connect(receive,send)(App)



