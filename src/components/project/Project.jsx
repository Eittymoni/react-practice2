import React from 'react'
import "./project.css"
import {Container, Row, Col } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa"
import proImg1 from "../../assets/project1.png"
import img3 from "../../assets/project3.png"



const Project = () => {
  return (
    <div id='project'>
      <Container>
        <Row className='project_top'>
            
            <Col lg={5}>
                <h2>View our projects</h2>
            </Col>
            <Col lg={{span:2, offset:5}}>
            <a href="#">View More &nbsp; <FaArrowRight/> </a>
            </Col>
        </Row>
        <Row className='project_main'>
        <Col lg={8} className='project_main_left'>
        <img src={proImg1}/>
        <div className='half-hover'>
        <h3>Workhub office Webflow Webflow Design</h3>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
        <a href="#">View project &nbsp; <FaArrowRight/> </a>
        </div>
        </Col>
        <Col lg={4} className='project_main_right'>
       <img src={img3}/>
       <img src={img3}/>
       <div className="hover">
        <h3> Unisaas Website 
                  Design</h3>
        <a href="#">View portfolio &nbsp;<FaArrowRight/> </a>
        </div>
       
        </Col>

        </Row>
      </Container>
    
    </div>
  )
}

export default Project
