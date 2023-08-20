import Product from "./components/Product";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import CartContextProvider from "./context/cart";
import { Provider } from "react-redux";
import store from "./store";


export default function App(){
  
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [showCart,setShowCart]=useState(false);
  // const iphone = {
  //   id: 1,
  //   title: "Apple iPhone 13",
  //   price: "79,999",
  //   image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
  // };
  // const samsung = {
  //   id: 2,
  //   title: "Samsung Galaxy Note 8",
  //   price: "69,999",
  //   image:
  //     "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
  // };
  // const nokia = {
  //   id: 3,
  //   title: "Nokia 1100",
  //   price: "2,999",
  //   image: "https://m.media-amazon.com/images/I/41wGEmM0S4L.jpg"
  // };
  //const products = [iphone, samsung, nokia];
  //selectedCategory("electronics");
  return (
    <div>
      <Provider store={store}>
      <CartContextProvider>
      <Header setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            setShowCart={setShowCart}
            showCart={showCart}
             />
      <ProductList selectedCategory={selectedCategory} showCart={showCart}/>
      </CartContextProvider>
      </Provider>
    </div>
      // {/* <Product img={iphone.image} title={iphone.title} price={iphone.price} />
      // <Product img={samsung.image} title={samsung.title} price={samsung.price} />
      // <Product img={nokia.image} title={nokia.title} price={nokia.price} /> */}
      //  {/* {products.map(product =><Product 
       
      //  title={product.title} 
      //  img={product.image} 
      //  price={product.price}
      //  key={product.title}
      //  />)} */}
    
  )
}