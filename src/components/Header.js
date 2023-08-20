// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart ,faAnchor }  from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/cart";
import { useSelector } from "react-redux";
const Header=({setSelectedCategory,selectedCategory,setShowCart,showCart})=>{
     
    const [data,setData]=useState([])
    //const {cart}=useCartContext();
    const cart =useSelector(state=>state.cart);
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setData(json))  

    },[]) 
    useEffect(()=>{
        if(data.length>0){
            setSelectedCategory(data[0]);
        }
    },[data,setSelectedCategory ]) ; 
    let isLoading=false;
    let loadError=null;


    if(isLoading){
        return <div>
            Data is Loading ....
        </div>
    }else if (loadError){
        return <div>Oops There seems to be an error. Please try again later</div>
    }else{
        return(
            <div className="header-items">
                <FontAwesomeIcon className="icon" icon={faAnchor} size="lg"/>
                {data.map(catagory=> 
                <div className={"header-item "+(catagory === selectedCategory ? "header-item-selected" :"")} key={catagory} onClick={()=>{setSelectedCategory(catagory);setShowCart(false) }}>
                    {catagory}
                </div>
                )}
                <div className="shopping-items" >
                    <div onClick={()=>{
                        setShowCart(true)
                    }}>
                        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart}/>
                        <span style={{marginLeft:5}}  className="cart-length">{Object.keys(cart).length}</span>
                    </div>
                    

                </div>

            </div>
        );
    }

};

export default Header;