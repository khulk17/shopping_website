import "../App.css"
const Product=({img,title, price})=>(
    
        <div className="product-card">
        <div className="product-image">
            <img src={img} alt={""} />
        </div>
        <div className="product-details">
            <h3>
                {title}
            </h3>
            <span>Rs {price}</span>
        </div>
    </div>
    )
    

export default Product;