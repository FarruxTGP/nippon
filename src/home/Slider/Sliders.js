import React, { useContext } from "react";
import "./Sliders.css";
import Slider from "react-slick";

import FadeIn from "react-fade-in";
import { Lang } from "../../App";
import SliderItem from "./SliderItem";
function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="bg__japan">
      <div className="Lang">
      {Lang()}
      </div>
      <FadeIn>
        <Slider {...settings} className="custom__arrow">
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"}/>
         <SliderItem url={"https://www.youtube.com/embed/yusIUGhk7A8"}/>
        </Slider>
      </FadeIn>
    </div>
  );
}

export default Sliders;
