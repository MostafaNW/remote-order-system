import React from "react";
import classes from "./MenuSummary.module.css";
const MenuSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h1>
        {props.title}
      </h1>
      <p>
        {props.description}
      </p>
    </section>
  );
};

export default MenuSummary;
