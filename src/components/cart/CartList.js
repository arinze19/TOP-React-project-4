import CartItem from "./CartItem";

export default function CartList({ cart }) {
    const list = cart.map(item => <CartItem item={item} key={item.id}/>)
    return list
}
