import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const fixedCost = cartContext.totalCost.toFixed(2);
  const totalCost = fixedCost === "-0.00" ? "$0.00" : ` $${fixedCost}`;
  const cartItems = Object.keys(cartContext.items).map((id) => {
    const item = cartContext.items[id];
    return (
      <CartItem
        key={id}
        id={id}
        name={item.name}
        amount={`x${item.amount}`.trim()}
        totalCost={`$${(item.price * item.amount).toFixed(2)}`}
      />
    );
  });

  const showOrderButton = +cartContext.totalCost.toFixed(2) !== 0;
  return (
    <Modal exitCart={props.exitCart}>
      <div className={classes["cart-items"]}>
        <ul>{cartItems}</ul>
      </div>
      <div className={classes.total}>
        <span>
          Total Cost <span>{totalCost}</span>{" "}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.exitCart}>
          Close
        </button>
        {showOrderButton && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
