import ProductImages      from "../product/ProductImages";
import ProductDescription from "../product/ProductDescription";
// import ProductComments    from "../product/ProductImages";
import "../../styles/pages/product-page.css";
import { useSelector } from 'react-redux';

function ProductPage({ match }) {
  const { products } = useSelector(store => store);
  const id       = match.params.productId;
  const product  = products.find(prod => prod.id === id)
  document.title = `Collection | ${product.name}`

  return (
    <div className="product-page-container">
      <div className="project-page-container__info">
        <ProductImages images={product.imgs} />
        <ProductDescription product={product} />
      </div>
      {/* <ProductComments comments={product.comments} /> */}
    </div>
  );
}

export default ProductPage;
