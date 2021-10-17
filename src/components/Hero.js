import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const Hero = () => (
  <>
    <Jumbotron className="jumbo-fluid hero m-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto hero-text">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="300"
            >
              <h1>Hope For The Nations</h1>

              <p>Blessing our communities with love and hope</p>
              <Link to="/articles-list">Get Involved</Link>
            </FadeTransform>
          </div>
        </div>
      </div>

      <img className="hero-image" src="../images/heroimg.png" alt="" />

      <img className="wave" src="../images/wavy-loops-bottom.svg" alt="" />
    </Jumbotron>
  </>
);

export default Hero;
