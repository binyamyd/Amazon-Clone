import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "../Cart/Cart.module.css";
import { Type } from "../../Utility/actiontype";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(basket);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <div>
            <h2>Hello</h2>
            <h3>Your shopping basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps! No item in your cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={classes.cart_product}>
                    <ProductCard
                      key={i}
                      product={item}
                      renderDesc={true}
                      renderAdd={false}
                      flex={true}
                    />
                    <div className={classes.btn_containers}>
                      <button
                        className={classes.btn}
                        onClick={() => increment(item)}
                      >
                        <SlArrowUp />
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={classes.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <SlArrowDown />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
