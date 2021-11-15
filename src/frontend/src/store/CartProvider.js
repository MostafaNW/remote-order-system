import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: {},
  totalCost: 0,
};

const cartReducer = (state, action) => {
  const id = action.item.id;
  const items =  state.items;
  if (action.type === "ADD") {
    let updatedItems = {};
    let updatedTotalCost;
    if (id in items) { 
      //the item already exists
      const cartItem = items[id];
      const updatedAmount = cartItem.amount + action.item.amount;
      //console.log(updatedAmount);
      updatedTotalCost =
        state.totalCost -
        cartItem.price * cartItem.amount +
        cartItem.price * updatedAmount;
      const updatedItem = {};
      updatedItem[id] = {
        name: cartItem.name,
        price: cartItem.price,
        amount: updatedAmount,
      };
      updatedItems = {
        ...items,
        ...updatedItem,
      };
    } else {
      //add new item to cart
      const updatedItem = {};
      updatedItem[id] = {
        name: action.item.name,
        price: action.item.price,
        amount: action.item.amount,
      };
      updatedItems = { ...items, ...updatedItem };
      updatedTotalCost =
        state.totalCost + action.item.price * action.item.amount;
    }
    console.log(
      `updated amount for id: ${id} amount: ${updatedItems[id].amount}`
    );
    return { items: updatedItems, totalCost: updatedTotalCost };
  }

  if (action.type === "REMOVE") {
    const cartItem = state.items[action.item.id];
    const updatedAmount = cartItem.amount - action.item.amount;
    let updatedItems = { ...items};
    let updatedTotalCost =
      state.totalCost - cartItem.price * action.item.amount; //update the total amount in the cart
    console.log(`updated cost:${updatedTotalCost}`);
    if (updatedAmount === 0) {
      //remove the item from the cart
      delete updatedItems[action.item.id];
      //console.log(`updatedItems after deletion: ${JSON.stringify(updatedItems)}`)
    } else {
      //update item amount in state to reflex changes
      let updatedItem = {};
      updatedItem[action.item.id] = {
        ...cartItem,
        amount: updatedAmount,
      };
      console.log(`updatedItem after updated: ${JSON.stringify(cartItem)}`);
      updatedItems = { ...items, ...updatedItem };
    }
    console.log(updatedItems);
    return { items: updatedItems, totalCost: updatedTotalCost };
  }
  return state;
};
const CartProvider = (props) => {
  const addItemHandler = (item) => {
    cartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (item) => {
    cartAction({ type: "REMOVE", item: item });
  };
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);
  const cartContext = {
    //the starting context value for our app
    items: cartState.items,
    totalCost: cartState.totalCost,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
