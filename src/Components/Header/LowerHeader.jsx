import React from "react";
import { BsList } from "react-icons/bs";
import classes from "../Header/Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <BsList />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Customer Service</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
