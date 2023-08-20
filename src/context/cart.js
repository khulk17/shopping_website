import { createContext,useContext,useState } from "react";

const CartContext=createContext();

function CartContextProvider({children}){
    const [cart,setCart]=useState({});
    const AddToCart = (product)=>{
        setCart((prevCart)=>{
            const newCart= {...prevCart};
            // if item is not in cart
            if(!prevCart[product.id]){
                newCart[product.id]={
                    id:product.id,
                    quantity:1
                }
            }else{
                const newProduct={...prevCart[product.id]};
                newProduct.quantity+=1;
                newCart[product.id]=newProduct;
            }
            return newCart;
        })
    };

    const removeFromCart =(product)=>{
        setCart((prevCart)=>{
            const newCart={...prevCart};
            const updatedProduct={...prevCart[product.id]}
            if(updatedProduct.quantity===1){
                delete newCart[product.id];    
            }else{
                updatedProduct.quantity-=1
            newCart[product.id]=updatedProduct;
            }
            return newCart;
        })
        
    };

    return <CartContext.Provider value={{cart,AddToCart,removeFromCart}}>{children}</CartContext.Provider>
}

export const useCartContext=()=>useContext(CartContext);

export default CartContextProvider;