import "../App.css"
import AddToCart from "./AddToCart";
const ProductCard=({product})=>(
    <div className="product" >

        <img src={product.image} className="image" alt="" />
        <div className="title">{product.title}</div>
        <div className="product-body">
            <span style={{marginLeft:5}} className="prices" >${product.price} </span>
            <AddToCart product={product}/> 

        </div>
    </div>
)
    


export default ProductCard; 