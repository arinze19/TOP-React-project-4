import "../../styles/product/product-item.css";

function ProductItem({ product }) {
  return (
    <div className="product-item-container">
      <div className="product-item-container__imgBg">
        <img src={product.imgs[0]} alt={product.name} />
      </div>

      <div className="product-item-container__info">
        <p>${product.price}</p>
        <p>{product.name}</p>
      </div>
    </div>
  );
}


export default ProductItem
