import React from "react";

const GetInvolved = () => {
  return (
    <>
      <h2>Would you like to get involved?</h2>
      <div className="row my-3 my-md-5">
        <div className="col-md-6 involve-area">
          <div className="get-involved d-flex justify-content-center flex-column">
            <div className="donate-area mx-auto my-3 my-md-5">
              <a
                className="
                        d-flex
                        justify-content-center
                        flex-column
                        text-center
                      "
                href="https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4"
                target="_blank"
              >
                <div className="involve-img">
                  <img
                    src="../images/donate.png"
                    alt="Lady holding a donation box"
                  />
                </div>
                <h3 className="my-5">
                  Donate<i className="fa fa-paypal ml-2" aria-hidden="true"></i>
                </h3>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 involve-area">
          <div className="get-involved d-flex justify-content-center flex-column">
            <div className="donate-area text-center mx-auto my-3 my-md-5">
              <a className="disabled" href="#" target="_blank">
                <div className="involve-img Volunteer">
                  <img
                    src="../images/volunteer.png"
                    alt="Group of volunteers"
                  />
                </div>
                <h3 className="my-5">Volunteer</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
