import "../../styles/product/size-list.css";
import SizeItem from "./SizeItem";

function SizeList({ sizes }) {
  const list = sizes.map((size) => <SizeItem size={size} />);
  return (
    <div>
      <h3>Select Size:</h3>
      <div className="size-list-container">{list}</div>
    </div>
  );
}

export default SizeList;
