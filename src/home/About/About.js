import React from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import FadeIn from "react-fade-in/lib/FadeIn";
import ielts from "../../assets/img/iel.png";
import "./About.css";
function About() {
  const [Response, setResponse] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.nipon.techdatasoft.uz/api/v1/result")
      .then((response) => response.json())
      .then((json) => setResponse(json));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg__default">
      <FadeIn className="natijalar">
        <div className="title__numbers">
          <h1>Natijalar</h1>
        </div>
        <Slider {...settings}>
          {Response.map((item) => (
            <div className="padding__10">
              <div className="card__nat">
                <img
                  src={"https://api.nipon.techdatasoft.uz" + item.img}
                  alt=""
                />
                <div className="txt__nat">
                  <div className="item__nat">
                    <p>Reading</p>
                    <b>{item.task1}</b>
                  </div>
                  <div className="item__nat">
                    <p>Listening</p>
                    <b>{item.task2}</b>
                  </div>
                  <div className="item__nat">
                    <p>Writing</p>
                    <b>{item.task3}</b>
                  </div>
                  <div className="item__nat">
                    <p>Writing</p>
                    <b>{item.ball}</b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </FadeIn>
    </div>
  );
}

export default About;
