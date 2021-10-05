import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getProducts} from "../actions/ProductsActions";
function Products(){
    const result = useSelector(state=>state);
    const { loading,products,error } = result;
    console.log(loading,products,error );
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( getProducts() );
    },[]);

    return(
        <React.Fragment>

             <a className="btn btn-success btn-sm">Add Product</a>
             <article className="row">
                <article className="col-md-6">
                    <table className="table table-striped">
                        <tr>
                            <th>P_ID</th>
                            <th>P_NAME</th>
                            <th>P_COST</th>
                        </tr>
                        {products.map((product,index)=>(
                            <tr key={index}>
                                <td>{product.p_id}</td>
                                <td>{product.p_name}</td>
                                <td>{product.p_cost}</td>
                            </tr>
                        ))}
                    </table>
                </article>
                <article className="col-md-6">
                    Insert Form Soon...!                
                </article>
             </article>
        </React.Fragment>
    )
}

export default Products;
