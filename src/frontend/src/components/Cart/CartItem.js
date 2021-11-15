import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const CartItem = (props) => {
  //console.log(props.amount);
  const cartContext = useContext(CartContext);
  const onincreaseHandler = () => {
    cartContext.addItem({
      id: props.id,
      amount: 1,
    });
  };
  const ondecreaseHandler = () => {
      cartContext.removeItem({
          id: props.id,
          amount: 1,
      })
  };
  return (
    <li className={classes["cart-item"]} key={props.id}>
      <div className={classes["name-price"]}>
        <h2>{props.name}</h2>
        <span> {props.totalCost}</span>
      </div>
      <div className={classes.amount}>{props.amount}</div>
      <div className={classes["adjust-order"]}>
        <button onClick={ondecreaseHandler}>-</button>
        <button onClick={onincreaseHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
