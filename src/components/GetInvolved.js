import React from "react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="container get-involved-section">
      <div className="row">
        <div className="col-12 mt-5">
          <h2>Would you like to get involved?</h2>
        </div>
      </div>

      <div className="row my-3 my-md-5">
        <div className="col-md-6 involve-area">
          <div className="get-involved d-flex justify-content-center flex-column">
            <div className="donate-area mx-auto my-3 my-md-5">
              <Link
                className="
                        d-flex
                        justify-content-center
                        flex-column
                        text-center
                      "
                to={{
                  pathname:
                    "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
                }}
                target="_blank"
              >
                <div className="involve-img">
                  <img
                    src="../images/donate.png"
                    alt="Lady holding a donation box"
                  />
                </div>
                <h3 className="my-5">
                  Donate
                  <i className="fa fa-paypal ml-2" aria-hidden="true"></i>
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 involve-area">
          <div className="get-involved d-flex justify-content-center flex-column">
            <div className="donate-area text-center mx-auto my-3 my-md-5">
              <Link className="disabled" disabled target="_blank" to="/">
                <div className="involve-img Volunteer">
                  <img
                    src="../images/volunteer.png"
                    alt="Group of volunteers"
                  />
                </div>
                <h3 className="my-5">Volunteer</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
