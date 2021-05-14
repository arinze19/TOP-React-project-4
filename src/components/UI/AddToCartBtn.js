import "../../styles/UI/add-to-cart-btn.css"


function AddToCartBtn({ addToCart, product }) {
    return <button className="add-to-cart-btn" onClick={()=> addToCart(product)}>Add to Cart</button>
}

export default AddToCartBtn