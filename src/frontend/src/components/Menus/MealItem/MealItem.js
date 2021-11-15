import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import { useState } from "react";
const MealItem = (props) => {
  const [error, setError] = useState(false);
  const cartContext = useContext(CartContext);
  const onItemSubmit = (e, amount) => {
    e.preventDefault();
    if (amount === 0 || amount < 1) {
      setError(true);
      return;
    }
    cartContext.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });
    setError(false);
  };
  return (
    <>
      {error && <p className={classes.error}>Entered Amount Invalid</p>}
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
          <MealItemForm clicked={onItemSubmit} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
