import React, { useEffect, useState } from "react";
import "./Numbers.css";
import { FormattedMessage } from "react-intl";
import FadeIn from "react-fade-in/lib/FadeIn";

function Numbers() {
  const [Response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://api.nipon.techdatasoft.uz/api/v1/number")
      .then((response) => response.json())
      .then((json) => setResponse(json));
  }, []);
  return (
    <>
      <div className="numbers">
        <FadeIn className="container">
          <div className="title__numbers">
            <h1>Raqamlarda</h1>
          </div>
          <FadeIn className="row__numbers">
            <div className="item__r__numbers">
              <h1>{Response[0]?.n1}</h1>
              <p>{Response[0]?.name1}</p>
            </div>
            <div className="item__r__numbers">
              <h1>{Response[0]?.n3}</h1>
              <p>{Response[0]?.name2}</p>
            </div>
            <div className="item__r__numbers">
              <h1>{Response[0]?.n3}</h1>
              <p>{Response[0]?.name3}</p>
            </div>
            <div className="item__r__numbers">
              <h1>{Response[0]?.n4}</h1>
              <p>{Response[0]?.name4}</p>
            </div>
          </FadeIn>

          <div className="txt__numbers">
            <span>Lorem ipsum dolor sit </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magnafringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est Lorem ipsum dolor sit amet,
              consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna fringilla urna, porttitor.
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Numbers;
