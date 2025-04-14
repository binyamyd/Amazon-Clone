import React from "react";
import categoryInfos from "../Category/categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "../Category/Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </section>
  );
}
export default Category;
