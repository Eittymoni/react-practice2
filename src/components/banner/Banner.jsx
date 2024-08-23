import React from 'react'
import "./banner.css"
import {Container,Row,Col} from "react-bootstrap"
import banImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div id='banner'>
   <Container>
    <Row>
    <Col lg={5} className='banner-text'>
    <h1>Building stellar websites for early startups</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <a href="#">View our work</a>
    </Col >
    <Col lg={{ span:5, offset:1}}>
    <img src={banImg}></img>
    </Col >
    </Row>
   </Container>
    
    </div>
  )
}

export default Banner
