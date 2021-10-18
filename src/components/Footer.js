import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div className="container content-container">
          <div className="row">
            <div
              className="
              col-6 col-md-3
              order-2 order-md-0
              
              d-flex
              flex-column
              mx-auto
              justify-content-center
              align-items-center
            "
            >
              <Link to="/" className="">
                <img
                  src="../images/hopeforthenationslogo.png"
                  alt="Logo Hope For The Nations"
                />
              </Link>

              <Link
                to={{
                  pathname:
                    "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
                }}
                target="_blank"
                className="button"
              >
                Donate
              </Link>
            </div>
            <div
              className="
              col-6 col-md-3
              my-5
              d-flex
              mx-auto
              justify-content-center
              small
            "
            >
              <div>
                <h5>Useful Links</h5>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={{
                        pathname:
                          "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
                      }}
                      target="_blank"
                    >
                      Donate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/articles-list">
                      Programs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="
              col-sm-6 col-md-3
              order-2
              my-5
              d-flex
              mx-auto
              justify-content-center
              text-center
            "
            >
              <div>
                <h5>Stay Updated</h5>
                <div className="social-icons d-flex justify-content-center">
                  <Link
                    to={{
                      pathname: "https://www.facebook.com/hopeforthenations7",
                    }}
                    target="_blank"
                  >
                    <i
                      className="fa fa-facebook social-icon p-2 m-3"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Link
                    to={{
                      pathname:
                        "https://www.youtube.com/channel/UCN0GdsHHo__oHqqZ63IUB7g",
                    }}
                    target="_blank"
                  >
                    <i
                      className="fa fa-youtube social-icon p-2 m-3"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          ©2021 Hope For The Nations | created by{" "}
          <Link
            to={{
              pathname: "https://carlamontano.tech",
            }}
            target="_blank"
          >
            Carla Montano
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
