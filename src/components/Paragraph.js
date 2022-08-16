import React from "react";
import "../styles/Pages.css";
import user from "./images/user.png";
import google from "./images/google.png";
import slack from "./images/slack.png";
import whatsapp from "./images/whatsapp.png";
import basecamp from "./images/basecamp.png";
const Paragraph = (props) => {
  let image;
  if (props.image === "1") {
    image = <img src={user} alt=""></img>;
  } else if (props.image === "2") {
    image = <img src={google} alt=""></img>;
  } else if (props.image === "3") {
    image = <img src={slack} alt=""></img>;
  } else if (props.image === "4") {
    image = <img src={whatsapp} alt=""></img>;
  } else {
    image = <img src={basecamp} alt=""></img>;
  }
  return (
    <>
      <section className="centralize-col mt-100">
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="content container paragraph-display">
          <div >{image}</div>
          <div>
            <p className="paragraph-padding">
              <span className="capitalize">"{props.capital}</span>{" "}
              {props.paragraph1}
              <br />
              {props.nextline}
            </p>
          </div>
        </div>
        <div className="content container">
          <p>
            <p>{props.paragraph2}</p>
          </p>
        </div>
      </section>
    </>
  );
};

export default Paragraph;
