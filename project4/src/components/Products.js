import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/ProductsActions";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AddProduct from "../components/AddProduct";

function Products(){
    const result = useSelector(state=>state);
    const { loading,products,error } = result.fetch;
    console.log(loading,products,error );
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( getProducts() );
    },[]);

    const editRecord = (id)=>{
        console.log(id);
    }

    const deleteRecord = (id)=>{
        console.log(id);
    }



    return(
        <React.Fragment>
             <Router>
                <NavLink to="/addProduct" 
                          activeStyle={{color:"red"}} 
                          exact={true} strict>AddProduct</NavLink>
                <article className="row">
                    <article className="col-md-6">
                        <table className="table table-striped">
                            <tr>
                                <th>P_ID</th>
                                <th>P_NAME</th>
                                <th>P_COST</th>
                                <th>ACTIONS</th>
                            </tr>
                            {products.map((product,index)=>(
                                <tr key={index}>
                                    <td>{product.p_id}</td>
                                    <td>{product.p_name}</td>
                                    <td>{product.p_cost}</td>
                                    <td><button className="btn btn-warning text-primary" onClick={()=>editRecord(product.p_id)}>EDIT</button></td>
                                    <td><button className="btn btn-danger text-danger" onClick={()=>deleteRecord(product.p_id)}>DELETE</button></td>
                                </tr>
                            ))}
                        </table>
                    </article>
                    <article className="col-md-6">
                        <Route path="/addProduct" component={AddProduct} exact={true} strict></Route>               
                    </article>
                </article>
            </Router>
        </React.Fragment>
    )
}

export default Products;
