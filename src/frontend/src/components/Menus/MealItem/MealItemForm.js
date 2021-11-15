import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";
const MealItemForm = (props) => {
  const amountOrdered = useRef(); 
  return (
    <form className={classes.form}>
      <Input
        ref={amountOrdered}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={(event) => props.clicked(event, +amountOrdered.current.value)}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
