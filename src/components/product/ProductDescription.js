import { useState } from 'react';
import '../../styles/product/product-description.css';
import SizeList from './SizeList';
import AddToCartBtn from '../UI/AddToCartBtn.js';

function ProductDescription({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeIsSelected, setSizeIsSelected]= useState(false);

  const selectSize = (selectSize) => {
    if (selectSize === selectedSize) {
      setSelectedSize(null);
      setSizeIsSelected(false);
      return;
    }

    setSelectedSize(selectSize);
    setSizeIsSelected(true);
  }

  return (
    <div className='product-description-container'>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <hr />
      <p>{product.description}</p>
      <SizeList sizes={product.sizes} selectSize={selectSize} selectedSize={selectedSize} />
      <AddToCartBtn product={product} selectedSize={selectedSize} sizeIsSelected={sizeIsSelected} />
    </div>
  );
}

export default ProductDescription;
