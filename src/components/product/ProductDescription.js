import "../../styles/product/product-description.css";
import SizeList     from "./SizeList";
import AddToCartBtn from "../UI/AddToCartBtn.js";

function ProductDescription({ product, handleClick }) {
  return (
    <div className="product-description-container">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <hr />
      <p>{product.description}</p>
      <SizeList sizes={product.sizes} />

      <AddToCartBtn product={product} handleClick={handleClick}/>
    </div>
  );
}

export default ProductDescription;
