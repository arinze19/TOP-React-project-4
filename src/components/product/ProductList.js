import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import '../../styles/product/product-list.css';

function ProductList() {
  const { products } = useSelector((state) => state);
  return products.map((product) => <ProductItem product={product} key={product.id} />);
}

export default ProductList;
