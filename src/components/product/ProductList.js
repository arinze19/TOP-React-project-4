import ProductItem from './ProductItem';
import '../../styles/product/product-list.css';

function ProductList({ products }) {
  return products.map((product) => <ProductItem product={product} key={product.id} />);
}

export default ProductList;
