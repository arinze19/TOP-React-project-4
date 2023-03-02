import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductImages from '../components/product/ProductImages';
import ProductDescription from '../components/product/ProductDescription';
import ReviewList from '../components/reviews/ReviewList';
import '../styles/pages/product-page.css';

function ProductPage({ match }) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({ comments: [], imagesUrl: [], availableSizes: [] });
  document.title = `Collection | ${product.name}`;


  const fetchProduct = async () => {
    setLoading(true);
    const id = match.params.productId;

    try {
      const { data } = await axios.get(`/product/${id}`);
      setProduct(data.data.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className='product-page-container'>
      {loading ? (
        <div className='spinner-div'>
          <i className='spinner spinner-md las la-atom'></i>
        </div>
      ) : (
        <>
          <div className='project-page-container__info'>
            <ProductImages images={product.imagesUrl} />
            <ProductDescription product={product} />
          </div>
          <ReviewList comments={product.comments} />
        </>
      )}
    </div>
  );
}

export default ProductPage;
