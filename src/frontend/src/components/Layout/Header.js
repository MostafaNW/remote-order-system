import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import NavBar from "./NavBar";

const Header = (props) => {
  const [displayNav, setDisplayNav] = useState(false);
  const match = window.matchMedia("(min-width: 768px)");
  const links = [
    <Link to="/">HOME</Link>,
    <Link to="/menus">MENUS</Link>,
    <Link to="/contact">CONTACT</Link>,
  ];
  const handleNavBarClick = () => {
    setDisplayNav((prevState) => !prevState);
  };

  console.log(displayNav);

  return (
    <>
      <header className={classes.header}>
        <div className={classes["open-btn"]} onClick={handleNavBarClick}>
          &#8801;
        </div>
        <h1>728 Sushi</h1>
        <NavBar links={links} className={classes.container} />
        <HeaderCartButton showCart={props.showCart} />
      </header>
      {displayNav && (
        <NavBar links={links} handleNavBarClick={handleNavBarClick} className={classes["c-navbar"]}>
          &#8801;
        </NavBar>
      )}
    </>
  );
};

export default Header;
