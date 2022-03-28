import React from "react";
import "react-tabs/style/react-tabs.css";
import "./Client.css";
import { FormattedMessage } from "react-intl";
import FadeIn from "react-fade-in/lib/FadeIn";
import license from "../../assets/img/license.png";
function Client({ next }) {
  return (
    <>
      <div className="license">
        <FadeIn className="container">
          <div className="title__numbers">
            <h1>Litsenziya</h1>
          </div>
          <FadeIn className="row__lic">
            <div className="txt__lic">
              <h1>
                Markazimiz O’zbekiston Respublikasi qonunchiligiga muvofiq
                litsenziyalangan
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magnafringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est
              </p>
            </div>
            <img src={license} alt="" />
          </FadeIn>
        </FadeIn>
      </div>
    </>
  );
}

export default Client;
