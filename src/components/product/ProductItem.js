import { Link } from "react-router-dom";
import "../../styles/product/product-item.css";

function ProductItem({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-item-container">
        <div className="product-item-container__imgBg">
          <img src={product.imagesUrl[0].url} alt={product.name} />
        </div>

        <div className="product-item-container__info">
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
