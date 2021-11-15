import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [isbtnHover, setbtnHover] = useState(false);
  const btnClasses = `${classes.button} ${isbtnHover ? classes.bump : ""}`;
  const totalItemCount = Object.keys(cartContext.items).reduce(
    (currentTotal, id) => {
      return currentTotal + cartContext.items[id].amount;
    },
    0
  );
  useEffect(() => {
    if (Object.keys(cartContext.items).length === 0) return;
    setbtnHover(true);
    const timer = setTimeout(() => {
      setbtnHover(false);
    }, 300); //300ms = length of the bump animation 
    return () => {clearTimeout(timer)}
  }, [cartContext.items]);
  return (
    <button onClick={props.showCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{totalItemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
