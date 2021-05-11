import ProductImages      from "../product/ProductImages";
import ProductDescription from "../product/ProductDescription";
// import ProductComments    from "../product/ProductImages";
import { products }       from "../../data/products.json";
import "../../styles/pages/product-page.css";

function ProductPage({ match, handleClick }) {
  const id       = match.params.productId;
  const product  = products.find(prod => prod.id === id)
  document.title = `Collection | ${product.name}`

  return (
    <div className="product-page-container">
      <div className="project-page-container__info">
        <ProductImages images={product.imgs} />
        <ProductDescription product={product} handleClick={handleClick}/>
      </div>
      {/* <ProductComments comments={product.comments} /> */}
    </div>
  );
}

export default ProductPage;
