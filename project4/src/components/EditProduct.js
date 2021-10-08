import React,{useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateProduct } from "../actions/UpdateProductActions";

function EditProduct(){

    const result = useSelector(state=>state);
    console.log(result);
    const dispatch = useDispatch();



    const pid = useRef();
    const pcost = useRef();

    const update = ()=>{
        
        dispatch(UpdateProduct(pid.current.value,pcost.current.value))
    }


    return(
        <React.Fragment>
             <h1>Edit Form Soon....!</h1>
             <hr></hr>
             <label>P_ID</label>
             <input type="number" ref={pid}></input>

            <br></br><br></br>
             <label>P_COST</label>
             <input type="number" ref={pcost}></input>

            <br></br><br></br>
             <button onClick={update}>Update</button>
        </React.Fragment>
    )
}

export default EditProduct;