// import {React, useState,useEffect} from 'react'
// import './Header.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
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


// export default function Header() {
//     const [navbar,setNavbar]= useState(false);

//     // const changeNavbar = ()=>{
//     //     console.log(window.scrollY);
//     //     if(window.scrollY >= 30){
//     //         setNavbar(true);
//     //     }else{
//     //         setNavbar(false);
//     //     }
//     // }
//     // // "p-4 headershado"
//     // window.addEventListener('scroll',changeNavbar );

//     useEffect(() => {
//       const changeNavbar = () => {
//         if (window.scrollY >= 1) {
//           setNavbar(true);
//         } else {
//           setNavbar(false);
//         }
//       };
  
//       window.addEventListener('scroll', changeNavbar);
  
//       return () => {
//         window.removeEventListener('scroll', changeNavbar);
//       };
//     }, []);
    
//   return (
//     <Navbar expand="lg" className={navbar ? 'p-4 headershado active' : 'p-4' }>
//     <Container>
//       <Navbar.Brand href="#home"><img className='w-50 h-50' src='../../public/image/logo.png'></img></Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav" >
//         <Nav className='d-flex justify-content-between w-100'>
//           <Nav.Link href="#home">Dashboard</Nav.Link>
//           <Nav.Link href="#link">Appointment</Nav.Link>
//           <NavDropdown title="Pharmacy" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#home">About Us</Nav.Link>
//           <Nav.Link href="#link">Contact Sale</Nav.Link>
//           {/* <Nav.Link href="#link" className='btn btn-outline-primary'></Nav.Link> */}
//           <button type='button' className='btn btn-outline-primary ml-3 mr-3'>Login</button>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   );
// }


export default function Header() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 30 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            <span>BLK• </span>
            Design System React
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-examples-navbar-upgrade-pro"
              >
                <i className="tim-icons icon-spaceship" /> Upgrade to PRO
              </Button>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/">
                Back to Kit
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                Have an issue?
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}