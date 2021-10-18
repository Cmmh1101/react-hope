import React from "react";
import { Jumbotron } from "reactstrap";
import { FadeTransform } from "react-animation-components";

const Header = () => (
  <>
    <Jumbotron className="header m-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-lg-6 mx-auto hero-text">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="300"
            >
              <h1>Our Recent Programs</h1>
            </FadeTransform>
          </div>
        </div>
      </div>

      <img className="hero-image" src="../images/hunger3.png" alt="" />
    </Jumbotron>
  </>
);

export default Header;
