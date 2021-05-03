import "../../styles/product/size-item.css";

function SizeItem({ size }) {
  return (
    <button className="size-item-container">
      {size}
    </button>
  );
}

export default SizeItem;
