import React from "react";
import { Grid } from "@material-ui/core";
import { REMOVE_FROM_CART } from "../../reducers/actionTypes";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import swal from "sweetalert";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartItems);
    const cartTotal = useSelector((state) => state.cartValue);

    const deleteItem = (id, price) => {
        dispatch({ type: REMOVE_FROM_CART, id, price });
        swal({text: "Item deleted", icon: "success"});
    }

    const cartItems = cart.map(d => (
        <Grid xs={12} sm={6} md={4} item key={uuid()} >
            <Product 
                id={d.id}
                image={d.image_url} 
                name={d.name}
                price={d.price}
                description={d.description}
                deleteItem={deleteItem}
            />
        </Grid>
    ));


    return (
        <div align="center">
            <h1>Cart</h1>
            <h3>Cart Total: ${cartTotal}</h3>
            <Grid container spacing={1}>
                {cartItems}
            </Grid>
        </div>
    )
}

export default Cart