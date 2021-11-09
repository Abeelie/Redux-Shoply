import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import data from "../data.json";

const INITIAL_STATE = {products: data.products, cartItems: [], cartValue: 0.0}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        return {
          ...state, 
          cartItems: [...state.cartItems, {...action.data}], 
          cartValue: state.cartValue + action.price
        }
      }
      case REMOVE_FROM_CART: {
        return {
          ...state, 
          cartItems: state.cartItems.filter((item) => item.id !== action.id), 
          cartValue: state.cartValue - action.price 
        }
      }
      default:
        return state;
    }
}


export default rootReducer;