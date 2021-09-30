import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/ProductActions";
import Loading from "./Loading";
import MessageBox from "./MessageBox";
function App(){

  const res = useSelector(state=>state);
  const {loading,products,err } = res;

  //loading ---- false or true
  //false ---- products not loaded    (show spinner)
  //true  ---- products loaded        (dont show spinner)

  //err ---- ""   or "Network Error"
  // "" ----  dont show Alert
  // "Network Error" --- show the Alert
  


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actions.getProducts());
  },[]);

  return(
    <React.Fragment>
        {!loading ? (<Loading></Loading>) : err === "Network Error"? (<MessageBox></MessageBox>) : (
          <div className="my_class" >
              {products.map((product,index)=>(
                  <div className="card" style={{width:180,marginLeft:10}}>
                      <img className="card-img-top" src={product.image} style={{width:100,marginLeft:30}}></img>
                      <div class="card-body">
                          <p class="card-title">{product.name}</p>
                          <p class="card-text">Price: $ {product.cost}</p>
                          <a href="#" class="btn btn-primary">Add to Cart</a>
                      </div>
                  </div>
              ))}
          </div>
        )}
    </React.Fragment>
  )
}

export default App;


