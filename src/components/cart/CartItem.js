export default function CartItem({ item }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item__image">
          <img src="" alt="" />
      </div>
      <div className="cart-item__description">
          <h2>{item.name}</h2>
      </div>
      <div className="cart-item__info">
        <p>X</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
