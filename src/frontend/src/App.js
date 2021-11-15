import Header from "./components/Layout/Header";
import Menus from "./components/Menus/Menus";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Home from "./components/Home/Home";
import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setCartVisible((prevState) => !prevState);
  };
  return (
    <CartProvider>
      <Header showCart={toggleCartVisibility} />
      <Route exact path="/">
        <Home />
        {cartVisible && <Cart exitCart={toggleCartVisibility} />}
      </Route>
      <Route path="/menus">
        {cartVisible && <Cart exitCart={toggleCartVisibility} />}
        <main>
          <Menus />
        </main>
      </Route>
    </CartProvider>
  );
}

export default App;
