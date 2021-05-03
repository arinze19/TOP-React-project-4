import "../../styles/product/product-description.css";
import SizeList from "./SizeList";

function ProductDescription({ product }) {
  return (
    <div className="product-description-container">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <hr />
      <p>{product.description}</p>
      <SizeList sizes={product.sizes} />
    </div>
  );
}

export default ProductDescription;
