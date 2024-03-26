
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/assets/img/logo.png';
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function MainNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  const [navtextcolor, setNavtextcolor] = React.useState('');
  const [navlogin, setnavlogin] = React.useState('loginbtn');
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("scroll", changeNavtextColor);
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", changeNavtextColor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      setColor("headershado");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  const changeNavtextColor = () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    if (scrollPercentage > 1.2) {
      setNavtextcolor('navtext');
      setnavlogin('responsivebtn')
    } else {
      setNavtextcolor('');
      setnavlogin('')
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <>
      <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
        <Container className="d-flex justify-content-between align-items-center p-2">
          <div className="navbar-translate d-flex justify-content-between">
            <NavbarBrand to="/" id="navbar-brand" tag={Link}>
              <img className='navlogo' src={logo}></img>
            </NavbarBrand>
          </div>
          <div className="d-flex justify-content-center w-100 navfontstyle">
            {windowWidth >= 992 && (
              <Nav navbar className="d-flex justify-content-end w-100 " >
                <NavItem>
                  <NavLink href="/" className={navtextcolor}>
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" className={navtextcolor}>
                    Doctors
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" className={navtextcolor}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={navtextcolor}
                    href="/contact">
                    Contact
                  </NavLink>
                </NavItem>
                <div className="d-flex justify-content-around w-25">
                  <NavItem>
                    <Button color="success" className="mr-5">Free Trial</Button>
                  </NavItem>
                  <NavItem>
                    <Button
                    href="https://app.medicy.in/login.php"
                      color="primary"
                    >Login</Button>
                  </NavItem>
                </div>
              </Nav>
            )}
          </div>
          <div className="d-flex justify-content-end align-items-center">
            {windowWidth < 992 && (
              <>
                {/* <div><Button outline color="success" className="freetrialbtn" >Free Trial</Button></div> */}
                <div className="m-2"><Button href="https://app.medicy.in/login.php" className={"loginbtn btn btn-transparent "+ navlogin} >Login</Button></div>
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

      <Collapse
        className={"sidebar " + (showSidebar ? "show" : "")}
        navbar
      >
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
            <NavLink href="/">
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              Doctors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=""
              href="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </>
  );
}
