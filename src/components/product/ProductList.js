import ProductItem  from "./ProductItem";
import { products } from "../../data/products.json";
import "../../styles/product/product-list.css";

function ProductList() {
  const list = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <div className="product-list-container">
      <h1>This is Octane.</h1>
      <div className="products-list">{list}</div>
    </div>
  );
}

export default ProductList;
