import React from 'react'
import "./aboutBanner.css"
import { Col, Container, Row } from 'react-bootstrap'
import abtImg from "../../assets/AbtBanner.png"

const AboutBanner = () => {
  return (
    <div id='about_us'>
     <Container>
        <Row>
            <Col lg={6}>
            <h5>About us</h5>
                    <h2>Our designs solve problems</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
            <Col lg={{span:4, offset:1}}>
            <img src={abtImg}/>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default AboutBanner
