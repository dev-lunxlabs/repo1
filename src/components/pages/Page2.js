import React from "react";
import "../../styles/Pages.css";
import image from "../images/author.png";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import rectangle3 from "../images/Rectangle3.png";
import rectangle4 from "../images/Rectangle4.png";
import rectangle5 from "../images/Rectangle5.png";
import rectangle6 from "../images/Rectangle6.png";
import rectangle7 from "../images/Rectangle7.png";
import author1 from "../images/author1.png";
import author2 from "../images/author2.png";
import author3 from "../images/author3.png";
import author4 from "../images/author4.png";
const Page2 = () => {
  const flex = {
    display: "flex",
  };
  return (
    <>
      <div className="centralize mt-100">
        <div className="card end" id="card-2">
          <div className="card-row">
            <div className="left-col">
              <div className="left-title">
                <p>Perfect Dev team for your product</p>
              </div>

              <div className="left-content">
                <p>We independentl verify the skills of every engineer</p>
              </div>
              <div className="left-footer">
                <p>BUILD YOUR TEAM </p>
              </div>
            </div>
            <div classname="card-image" style={flex}>
              <img src={rectangle3} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="centralize">
        <div className="label complete-centralize">HIRE OUTSOURCING TEAM</div>
        <div className="label complete-centralize">HOW TO OUTSOURCE</div>
        <div className="label complete-centralize">OUTSOURCING</div>
        <div className="label complete-centralize">IT OUTSOURCING</div>
      </div>
      <div className="container">
        <img className="author-image" src={image} alt=""></img>
      </div>
      <div className="labels-left container">
        <div className="label complete-centralize">VIEW ALL ARTICLES</div>
        <div className="image">
          <img src={twitter} alt=""></img>
        </div>
        <div className="image">
          <img src={instagram} alt=""></img>
        </div>
        <div className="image">
          <img src={facebook} alt=""></img>
        </div>
      </div>
      <div className="container ">
        <p className="article-title">Related articles</p>
        <div className="article-cards">
          <div className="card" id="card-article">
            <div className="article-image">
              <img className="article-image" src={rectangle4} alt=""></img>
            </div>
            <div className="article-info">
              <div>
                <span className="underline-grey">OUT</span>SOURCING
              </div>
              <div className="article-content">
                <p>
                  Everything You Should Know About Outsourcing Software
                  Development to Georgia in 2022
                </p>
              </div>
              <div>
                <img src={author1} alt=""></img>
              </div>
            </div>
          </div>

          <div className="card" id="card-article">
            <div className="article-image">
              <img className="article-image" src={rectangle5} alt=""></img>
            </div>
            <div className="article-info">
              <div>
                <span className="underline-grey">OUT</span>SOURCING
              </div>
              <div className="article-content">
                <p>
                  Everything You Should Know About Outsourcing Software
                  Development to Georgia in 2022
                </p>
              </div>
              <div>
                <img src={author2} alt=""></img>
              </div>
            </div>
          </div>

          <div className="card" id="card-article">
            <div className="article-image">
              <img className="article-image" src={rectangle6} alt=""></img>
            </div>
            <div className="article-info">
              <div>
                <span className="underline-grey">OUT</span>SOURCING
              </div>
              <div className="article-content">
                <p>
                  Everything You Should Know About Outsourcing Software
                  Development to Georgia in 2022
                </p>
              </div>
              <div>
                <img src={author3} alt=""></img>
              </div>
            </div>
          </div>

          <div className="card" id="card-article">
            <div className="article-image">
              <img className="article-image" src={rectangle7} alt=""></img>
            </div>
            <div className="article-info">
              <div>
                <span className="underline-grey">OUT</span>SOURCING
              </div>
              <div className="article-content">
                <p>
                  Everything You Should Know About Outsourcing Software
                  Development to Georgia in 2022
                </p>
              </div>
              <div>
                <img src={author4} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-space-around container mb-100 mt-100"
        id="gradient-card"
      >
        <div className="gradient-title container">
          <p>
            Tell us about your plans on a brief intro call and we’ll start the
            matching process.
          </p>
        </div>
        <div className=" container centralize ">
          <button className="buttons">HIRE DEVELOPERS</button>
        </div>
      </div>
    </>
  );
};

export default Page2;
