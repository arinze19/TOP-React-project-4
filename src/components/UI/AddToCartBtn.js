import "../../styles/UI/add-to-cart-btn.css"


function AddToCartBtn({ handleClick, product }) {
    return <button className="add-to-cart-btn" onClick={()=> handleClick(product)}>Add to Cart</button>
}

export default AddToCartBtn