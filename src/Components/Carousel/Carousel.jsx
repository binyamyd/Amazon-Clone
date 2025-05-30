import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../Carousel/img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Carousel/Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infinteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
