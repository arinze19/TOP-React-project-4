import "../../styles/product/size-item.css";

function SizeItem({ size, selectSize, selectedSize }) {
  const sizeIsSelected = selectedSize === size ? 'size-active' : ''
  return (
    <button className={`size-item-container ${sizeIsSelected}`} onClick={() => selectSize(size)}>
      {size}
    </button>
  );
}

export default SizeItem;
