import "../../styles/product/product-description.css";

function ProductDescription({ product }) {
  return (
    <div className="product-description-container">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <hr/>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDescription
