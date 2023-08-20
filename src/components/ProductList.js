// fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

import { useEffect, useState } from "react";
import "../App.css"
import { useCartContext } from "../context/cart";
import {faShoppingCart}  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from "./Product-card";
import { useSelector } from "react-redux";
const ProductList=({selectedCategory,showCart})=>{
        const [products, setProducts] = useState([]);
        const [loading,setLoading]=useState(false);
        const cart=useSelector(state=>state.cart)
        let loadError=null;
        useEffect(()=>{
            setLoading(true);
            console.log(showCart)
            if(showCart){
                fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                const incart= [];
                for(let i=0;i<json.length;i++){
                    if(cart[json[i].id]){
                        incart.push(json[i])
                    }
                }
                setProducts(incart)
                setLoading(false)
            })
            }else{
                 fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=>{
                setProducts(json)
                setLoading(false);
            })
        }
            }
         ,[selectedCategory,showCart])
         
        if (loading){
            return <div className="loading"> Fetching Products....</div>    
        }else if(loadError){
            return <div>Please try Again ....</div>
        }else if(showCart===true && products.length===0){
            return <div className="empty-cart" >
                <FontAwesomeIcon className="cart-icon1" icon={faShoppingCart}/>
                The Cart is Empty
            </div>
        }
        else{
            return(
                <div className="products">
                    {products.map((product)=>(<ProductCard product={product} key={product.id} />))}
                </div>
            )
        }

    
}

export default ProductList;