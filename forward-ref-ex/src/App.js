import React, { useEffect, useRef } from "react";
import Input from "./components/Input";

function App(){
  const unameRef = useRef();
  const upwdRef = useRef();
  const emailRef = useRef();
  const submitRef = useRef();
  const resetRef = useRef();

  useEffect(()=>{
    unameRef.current.focus();
  },[])


  function unameFn(event){
      if(event.key == "Enter"){
        upwdRef.current.focus();
      }
  }

  function upwdFn(event){
      if(event.key == "Enter"){
        emailRef.current.focus(); 
      }
  }

  function emailFn(event){
      if(event.key=="Enter"){
        submitRef.current.focus();
      }
  }

  function submitFn(event){
      if(event.key == "Enter"){
          console.log( unameRef.current.value,
                       upwdRef.current.value,
                       emailRef.current.value );
      }
  }


  function resetFn(event){
    
  }

  return(
    <React.Fragment>
        <Input type="text"
               placeholder="User Name"
               ref={unameRef}
               onKeyDown={unameFn}></Input>
        <br></br><br></br>
        <Input type="password"
               placeholder="Password"
               ref={upwdRef}
               onKeyDown={upwdFn}></Input>
        <br></br><br></br>
        <Input type="email"
               placeholder="Enter Email"
               ref={emailRef}
               onKeyDown={emailFn}></Input>
        <br></br><br></br>
        <input type="submit"
               onKeyDown={submitFn}
               ref={submitRef}></input>
        <Input type="reset"
               onKeyDown={resetFn}
               ref={resetRef}></Input>
    </React.Fragment>
  )
};

export default App;