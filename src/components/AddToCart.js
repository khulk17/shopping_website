import { useEffect, useState } from "react";
import "../App.css"
import { useCartContext } from "../context/cart";
import { addToCartRedux, removeFromCartRedux } from "../store/cart"
import { useDispatch, useSelector } from "react-redux";
const AddToCart=({product})=>{
    //const[cart,setCart]=useState(0);
    //const {cart,AddToCart,removeFromCart}=useCartContext();
    const cart=useSelector(state=>state.cart);
    const productInCart=cart[product.id]
    const dispatch = useDispatch()

    let cartCount=0;
    const handleRemoveFromCart=()=>{
        console.log("Handle Remove From Cart");
        dispatch(removeFromCartRedux(product))
        //removeFromCart(product);
    };
    const handleAddToCart=()=>{
        console.log("Handle Add to Cart");
        dispatch(addToCartRedux(product))
        //AddToCart(product);
    };
 
    if(!productInCart){
        return(
            <div className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart{" "}
                
            </div>
        )
    }else{
        return(
            <div className="add-to-cart-container" >
                <div className="add" onClick={handleRemoveFromCart} >
                    -
                </div>
                <div className="quantity">{cart[product.id].quantity}</div>
                <div className="add" onClick={handleAddToCart} >
                    +
                </div>
            </div>
        )
    }
}

export default AddToCart;