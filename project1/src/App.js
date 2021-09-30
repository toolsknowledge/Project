// //class
// import React, { Component } from "react";

// import { connect } from "react-redux";

// import * as actions from "./actions/actions";


// class App extends Component{
//   constructor(props){ 
//     super(props);
//   }

//   fun_one = ()=>{
//      this.props.onAgeUp();
//   }

//   fun_two = ()=>{
//     this.props.onAgeDown();
//   }


//   render(){
//     return(
//       <React.Fragment>
//           <h1>Age : {this.props.age}</h1>
//           <br></br><br></br>
//           <button onClick={this.fun_one}>AGE_UP</button>
//           <button onClick={this.fun_two}>AGE_DOWN</button>
//       </React.Fragment>
//     )
//   }
// }

// const receive = (state)=>{
//   return{
//      age : state.age
//   }
// };



// const send = (dispatch)=>{
//   return{
//     onAgeUp : ()=> dispatch(actions.ageUpSync()),
//     onAgeDown : ()=> dispatch(actions.ageDownSync())
//   }
// };

// export default connect(receive,send)(App);




//functional component
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";

function App(){
    const result = useSelector(state=>state);
    const { age } = result;
    const dispatch = useDispatch();

    const onAgeUp = ()=>{
      dispatch(actions.ageUpSync());
    }

    const onAgeDown = ()=>{
      dispatch(actions.ageDownSync());
    }


    return(
      <React.Fragment>
          <h1>{age}</h1>
          <button onClick={onAgeUp}>UP</button>
          <button onClick={onAgeDown}>DOWN</button>
      </React.Fragment>
    )
};
export default App;





















