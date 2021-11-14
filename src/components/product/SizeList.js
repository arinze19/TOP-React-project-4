import '../../styles/product/size-list.css';
import SizeItem from './SizeItem';

function SizeList({ sizes, selectSize, selectedSize }) {
  const list = sizes.map((size, idx) => (
    <SizeItem
      size={size}
      selectSize={selectSize}
      selectedSize={selectedSize}
      key={idx}
    />
  ));
  return (
    <div>
      <h3>Select Size:</h3>
      <div className='size-list-container'>{list}</div>
    </div>
  );
}

export default SizeList;
