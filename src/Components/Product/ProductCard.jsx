import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "../Product/Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
        <div>
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/* ratings  */}
            <Rating value={rating?.rate || 0} precision={0.1} />
            {/* count */}
            <small>{rating?.count || 0}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormat amount={price} />
          </div>
          <button className={classes.button}>add to cart</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
