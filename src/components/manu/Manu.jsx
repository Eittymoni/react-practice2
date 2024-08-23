import React from 'react';
import "./manu.css"
import {Container,Navbar, Nav} from "react-bootstrap"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';


const Manu = () => {
  return (
    <div>
        <Navbar expand="lg" className="manu-bg">
        <Container>
        <Navbar.Brand href="#home"> <img src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto manu"> 
            <Link to="/">Home </Link>
            <Link to="/AboutUs">About Us </Link>
            <Link>Feature</Link>
            <Link>Princing </Link>
            <Link>Princing </Link>
            <Link> FAQ</Link>
            <Link>Blog </Link>
            <Link>Contact </Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
    
  )
}

export default Manu
