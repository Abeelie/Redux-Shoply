import React from "react";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { Grid } from "@material-ui/core";
import { ADD_TO_CART } from "../../reducers/actionTypes";
import swal from "sweetalert";
import "./productlist.css";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const addItem = (id, image_url, name, price, description) => {
        const data = {id, image_url, name, price, description}
        dispatch({ type: ADD_TO_CART, data, price });
        swal({text: "Item added", icon: "success"});
    }

    const productList = Object.entries(products).map(d => (
        <Grid xs={12} sm={6} md={4} item key={uuid()} >
            <Product 
                id={d[0]}
                image={d[1].image_url} 
                name={d[1].name}
                price={d[1].price}
                description={d[1].description}
                addItem={addItem}
            />
        </Grid>
    ));

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Products</h1>
            <Grid container spacing={1}>
                {productList}
            </Grid>
        </div>
    )
}

export default ProductList;