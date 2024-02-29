// import React from "react";
// import { Link } from "react-router-dom";
// import logo from '../../public/assets/img/logo.png';
// // reactstrap components
// import {
//   Button,
//   Collapse,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";


// export default function MainNavbar() {
//   const [collapseOpen, setCollapseOpen] = React.useState(false);
//   const [collapseOut, setCollapseOut] = React.useState("");
//   const [color, setColor] = React.useState("navbar-transparent");
//   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

//   React.useEffect(() => {
//     window.addEventListener("scroll", changeColor);
//     window.addEventListener("resize", handleResize);
//     return function cleanup() {
//       window.removeEventListener("scroll", changeColor);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   const changeColor = () => {
//     if (
//       document.documentElement.scrollTop > 30 ||
//       document.body.scrollTop > 99
//     ) {
//       setColor("headershado");
//     } else if (
//       document.documentElement.scrollTop < 100 ||
//       document.body.scrollTop < 100
//     ) {
//       setColor("navbar-transparent");
//     }
//   };
//   const toggleCollapse = () => {
//     // document.documentElement.classList.toggle("nav-open");
//     setCollapseOpen(!collapseOpen);
//   };
//   // const onCollapseExiting = () => {
//   //   setCollapseOut("collapsing-out");
//   // };
//   // const onCollapseExited = () => {
//   //   setCollapseOut("");
//   // };
//   return (
//     <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
//       <Container className="d-flex justify-content-between p-2">
//         <div className="navbar-translate d-flex justify-content-between">
//           <button
//             aria-expanded={collapseOpen}
//             className="navbar-toggler navbar-toggler"
//             onClick={toggleCollapse}
//           >
//             <span className="navbar-toggler-bar bar1" />
//             <span className="navbar-toggler-bar bar2" />
//             <span className="navbar-toggler-bar bar3" />
//           </button>
//           <NavbarBrand to="/" id="navbar-brand" tag={Link}>
//             <img className='w-50' src={logo}></img>
//           </NavbarBrand>
//           <UncontrolledTooltip placement="bottom" target="navbar-brand">
//             Designed and Coded by Creative Tim
//           </UncontrolledTooltip>
//           <div className="d-flex justify-content-end align-items-center ">
//             {windowWidth < 992 && (
//               <>
//                 <div><Button outline color="success" size="sm">Free Trial</Button></div>
//                 <div className="m-2"><Button className="ml-4" color="primary" size="sm">Login</Button></div>
//               </>
//             )}
//           </div>
//         </div>
//         <Collapse
//         className={"sidebar " + (collapseOpen ? "show" : "")}
//           // className={"justify-content-end " + collapseOut }
//           navbar
//           // isOpen={collapseOpen}
//         // onExiting={onCollapseExiting}
//         // onExited={onCollapseExited}
//         >
//           <div className="navbar-collapse-header">
//             <Row>
//               <Col className="collapse-brand" xs="6">
//                 {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                   BLK•React
//                 </a> */}
//               </Col>
//               <Col className="collapse-close text-right" xs="6">
//                 <button
//                   aria-expanded={collapseOpen}
//                   className="navbar-toggler border-0"
//                   onClick={toggleCollapse}
//                 >
//                   ❌
//                 </button>
//               </Col>
//             </Row>
//           </div>

//           <Nav navbar className="d-flex justify-content-around w-75">
//             <NavItem>
//               <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
//                 Pricing
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink tag={Link} to="/">
//                 Doctors
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
//                 About
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 className=""
//                 href="https://github.com/creativetimofficial/blk-design-system-react/issues">
//                 Contact
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <Button color="success">Free Trial</Button>
//             </NavItem>
//             <NavItem>
//               <Button
//                 color="primary"
//               >Login</Button>
//             </NavItem>

//           </Nav>
//         </Collapse>
//       </Container>
//     </Navbar>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/assets/img/logo.png';
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

export default function MainNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
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

  // const toggleCollapse = () => {
  //   setCollapseOpen(!collapseOpen);
  // };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <>
      <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
        <Container className="d-flex justify-content-between p-2">
          <div className="navbar-translate d-flex justify-content-between">
            {windowWidth < 992 && (
              <button
                aria-expanded={collapseOpen}
                className="navbar-toggler navbar-toggler"
                onClick={toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            )}
            <NavbarBrand to="/" id="navbar-brand" tag={Link}>
              <img className='w-50' src={logo}></img>
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Designed and Coded by Creative Tim
            </UncontrolledTooltip>
          </div>
          <div className="d-flex justify-content-end w-75">
            {windowWidth >= 992 && (
              <Nav navbar className="d-flex justify-content-around w-75">
                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Doctors
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    href="https://github.com/creativetimofficial/blk-design-system-react/issues">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button color="success">Free Trial</Button>
                </NavItem>
                <NavItem>
                  <Button
                    color="primary"
                  >Login</Button>
                </NavItem>
              </Nav>
            )}

            <div className="d-flex justify-content-end align-items-center">
              {windowWidth < 992 && (
                <>                <div><Button outline color="success" >Free Trial</Button></div>
                  <div className="m-2"><Button className="ml-4" color="primary" >Login</Button></div>              </>
              )}          </div>
          </div>
        </Container>
      </Navbar>

      <Collapse
        className={"sidebar " + (showSidebar ? "show" : "")}
        navbar
      >
        <div className="navbar-collapse-header">
          <button
            aria-expanded={showSidebar}
            className="clossbtn"
            onClick={toggleSidebar}
          >
            ❌
          </button>
        </div>
        <Nav navbar className="flex-column respnsenave">
          <NavItem>
            <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/">
              Doctors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=""
              href="https://github.com/creativetimofficial/blk-design-system-react/issues">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </>
  );
}
