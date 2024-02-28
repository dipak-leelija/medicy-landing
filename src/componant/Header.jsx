import {React, useState,useEffect} from 'react'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Header() {
    const [navbar,setNavbar]= useState(false);

    // const changeNavbar = ()=>{
    //     console.log(window.scrollY);
    //     if(window.scrollY >= 30){
    //         setNavbar(true);
    //     }else{
    //         setNavbar(false);
    //     }
    // }
    // // "p-4 headershado"
    // window.addEventListener('scroll',changeNavbar );

    useEffect(() => {
      const changeNavbar = () => {
        if (window.scrollY >= 1) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
  
      window.addEventListener('scroll', changeNavbar);
  
      return () => {
        window.removeEventListener('scroll', changeNavbar);
      };
    }, []);
    
  return (
    <Navbar expand="lg" className={navbar ? 'p-4 headershado active' : 'p-4' }>
    <Container>
      <Navbar.Brand href="#home"><img className='w-50 h-50' src='../../public/image/logo.png'></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className='d-flex justify-content-between w-100'>
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">Appointment</Nav.Link>
          <NavDropdown title="Pharmacy" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#link">Contact Sale</Nav.Link>
          {/* <Nav.Link href="#link" className='btn btn-outline-primary'></Nav.Link> */}
          <button type='button' className='btn btn-outline-primary ml-3 mr-3'>Login</button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
