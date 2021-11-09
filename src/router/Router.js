import React from "react";
import { Switch, Route }from 'react-router-dom';
import ProductList from "../components/ProductList/ProductList";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";


const Router = () => {
    return (
        <div>
            <Navbar />
            <Switch >
                <Route exact path="/">
                    <ProductList />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}


export default Router