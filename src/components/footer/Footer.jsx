import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div id='footer'>
        <Container>
            <Row>
                <Col lg={5}>
                    <img src={logo}/>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                    <Row className='bg-color'>
                        <Col lg={6}>
                        <h4>Email me at</h4>
                        <h5>contact@website.com</h5>
                        </Col>
                        <Col lg={5}>
                        <h4>Call us</h4>
                        <h5>01735393954</h5>
                        </Col>

                    </Row>
                </Col>
                <Col lg={{ span:4, offset:2}}>
                <h2>Lets Talk!</h2>
                <p> We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges</p>
                <div className='icon'>
                <a href="#"><FaFacebook/> </a>
                <a href="#"><FaInstagramSquare/> </a>
                <a href="#"><IoLogoYoutube/> </a>
                </div>
               
                </Col>
            </Row>
    
            
        </Container>
        <div className='footer_manu'>
            <Container>
           <h6>@Copyright 2022, Finsweet.com</h6>
            </Container>
        </div>
    </div>

    
  )
}

export default Footer
