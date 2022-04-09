import { useEffect } from 'react'
import { getProducts } from "../helpers/thunk";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../components/product/ProductList";
import '../styles/pages/products-page.css';

function ProductsPage() {
  document.title = "Octane | Full Summer Collection";
  const { loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className='products-page-container'>
    <h1>This is Octane.</h1>
    <div className='products-list'>
      { loading.products ?  <i className="products-spinner las la-atom spinner"></i> : <ProductList /> }
    </div>
  </div>
  )
}

export default ProductsPage;
