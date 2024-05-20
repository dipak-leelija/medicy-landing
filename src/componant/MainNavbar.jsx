import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "/assets/img/logo.png";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

export default function MainNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [color, setColor] = useState("navbar-transparent");
  const [navDemoBtn, setNavDemoBtn] = useState(true);

  const [curhover, setCurhover] = useState("");
  const [navlogin, setnavlogin] = useState("loginbtn");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState("");

  useEffect(() => {
    handleInitialActiveNavItem();
    window.addEventListener("scroll", changeColor);
    window.addEventListener("scroll", changeNavtextColor);
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", changeNavtextColor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInitialActiveNavItem = () => {
    const path = location.pathname;
    setActiveNavItem(getNavItemFromPath(path));
  };

  const handleNavItemClicked = (navItem) => {
    setActiveNavItem(navItem);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 992) {
      setShowSidebar(false); // Hide sidebar when screen size is large
    }
  };

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 30 ||
      document.body.scrollTop > 99
    ) {
      setColor("sticky-header");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  const changeNavtextColor = () => {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;
    if (scrollPercentage > 1.2) {
      setNavDemoBtn(false);
      setCurhover("deactive");
      setnavlogin("responsivebtn");
    } else {
      setNavDemoBtn(true);
      setCurhover("");
      setnavlogin("");
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const getNavItemFromPath = (path) => {
    // Logic to determine the active navigation item based on the path
    if (path === "/") {
      return;
    } else if (path === "/pricing") {
      return "pricing";
    } else if (path === "/doctor") {
      return "doctor";
    } else if (path === "/about") {
      return "about";
    } else if (path === "/contact") {
      return "contact";
    } else {
      return ""; // Default to empty string if no match
    }
  };

  return (
    <>
      <Navbar
        className={"fixed-top " + color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container className="d-flex justify-content-between align-items-center p-2">
          <div className="navbar-translate d-flex justify-content-between">
            <NavbarBrand
              to="/"
              id="navbar-brand"
              tag={Link}
              onClick={() => handleNavItemClicked("")}
              active={activeNavItem === "" ? "true" : ""}
            >
              <img className="navlogo" src={logo}></img>
            </NavbarBrand>
          </div>
          <div className="d-flex justify-content-center w-100 navfontstyle">
            {windowWidth >= 992 && (
              <Nav navbar className="d-flex justify-content-end w-100 ">
                <NavItem>
                  <NavLink
                    to="/pricing"
                    tag={Link}
                    className={`${activeNavItem === "pricing" && curhover}`}
                    onClick={() => handleNavItemClicked("pricing")}
                    active={activeNavItem === "pricing"}
                  >
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/doctor"
                    tag={Link}
                    className={`${activeNavItem === "doctor" && curhover}`}
                    onClick={() => handleNavItemClicked("doctor")}
                    active={activeNavItem === "doctor"}
                  >
                    Doctors
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/about"
                    tag={Link}
                    className={`${activeNavItem === "about" && curhover}`}
                    onClick={() => handleNavItemClicked("about")}
                    active={activeNavItem === "about"}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeNavItem === "contact" && curhover}`}
                    onClick={() => handleNavItemClicked("contact")}
                    active={activeNavItem === "contact"}
                    to="/contact"
                    tag={Link}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem className="nav-button-item">
                  <Button
                    to="https://app.medicy.in/login.php"
                    tag={Link}
                    color="success"
                    outline={navDemoBtn}
                  >
                    Get Demo
                  </Button>
                </NavItem>
                <NavItem className="nav-button-item">
                  <Button
                    to="https://app.medicy.in/login.php"
                    tag={Link}
                    color="primary"
                  >
                    Login
                  </Button>
                </NavItem>
              </Nav>
            )}
          </div>
          <div className="d-flex justify-content-end align-items-center">
            {windowWidth < 992 && (
              <>
                <div className="m-2">
                  <Button
                    to="https://app.medicy.in/login.php"
                    tag={Link}
                    className={"loginbtn btn btn-transparent " + navlogin}
                  >
                    Login
                  </Button>
                </div>
              </>
            )}
          </div>
          {windowWidth < 992 && (
            <button
              aria-expanded={collapseOpen}
              className="navbtn"
              onClick={toggleSidebar}
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </Container>
      </Navbar>

      <Collapse className={"sidebar " + (showSidebar ? "show" : "")} navbar>
        <div className="navbar-collapse-header d-flex justify-content-end">
          <button
            aria-expanded={showSidebar}
            className="clossbtn"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        </div>
        <Nav navbar className="flex-column responsesidebar">
          <NavItem>
            <NavLink tag={Link} to="/pricing"  onClick={toggleSidebar}>Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/doctor" onClick={toggleSidebar}>Doctors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about" onClick={toggleSidebar}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="" to="/contact" onClick={toggleSidebar}>
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </>
  );
}
