import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../actions/AddProductActions";

function AddProduct(){

    const result = useSelector(state=>state);
    console.log(result.insert.result);
    const dispatch = useDispatch();


    const p_id = useRef();
    const p_name = useRef();
    const p_cost = useRef();

    const add = ()=>{
        dispatch(
            addProduct({"p_id":p_id.current.value,
                    "p_name":p_name.current.value,
                    "p_cost":p_cost.current.value})
        );        
    }



    return(
        <React.Fragment>
            <label>P_ID</label>
            <input type="number" ref={p_id}></input>

            <br></br><br></br>
            <label>p_NAME</label>
            <input type="text" ref={p_name}></input>

            <br></br><br></br>
            <label>p_COST</label>
            <input type="number" ref={p_cost}></input>

            <br></br><br></br>
            <button onClick={add}>Add Product</button>

           <h1 style={{color:"green"}}>{result.insert.result}</h1>
        </React.Fragment>
    )
}

export default AddProduct;