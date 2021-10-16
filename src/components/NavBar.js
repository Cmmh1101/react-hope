import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="nav" expand="md" dark>
        <div className="container p-0">
          <NavbarBrand href="/" className="logo-container">
            <img src="../images/logobrand.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav tag="ul" className="mr-auto" navbar>
              <NavItem tag="li">
                <NavLink to="/" onClick={toggle}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem tag="li">
                <NavLink
                  to={{
                    pathname:
                      "https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4",
                  }}
                  target="_blank"
                  onClick={toggle}
                >
                  Donate
                </NavLink>
              </NavItem>
              <NavItem tag="li">
                <NavLink to="/about" onClick={toggle}>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem tag="li">
                <NavLink tag="a" to="/articles-list" onClick={toggle}>
                  Programs
                </NavLink>
              </NavItem>
              <NavItem tag="li">
                <NavLink to="/contact" onClick={toggle}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
