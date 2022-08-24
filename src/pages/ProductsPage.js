import { useState, useEffect } from 'react'
import axios from 'axios';
import ProductList from "../components/product/ProductList";
import '../styles/pages/products-page.css';

function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  document.title = "Octane | Full Summer Collection";

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get('/products');
      setProducts(data.data.products)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='products-page-container'>
    <h1>This is Octane.</h1>
    <div className='products-list'>
      { loading ?  <i className="spinner spinner-md las la-atom"></i> : <ProductList products={products} /> }
    </div>
  </div>
  )
}

export default ProductsPage;
