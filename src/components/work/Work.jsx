import React from 'react'
import "./work.css"
import { Col, Container, Row,} from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa";
import WorkReusable from '../reueable/WorkReusable';
import Wm1 from "../../assets/work1.png"
import Wm2 from "../../assets/work2.png"
import Wm3 from "../../assets/work3.png"
import Wm4 from "../../assets/work4.png"

const Work = () => {
  return (
    <div  id='work'>
        <Container>
            <Row>
            <Col lg={4} className='left-text'>

            <h2>How we work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#">Get in touch with us &nbsp; < FaArrowRight/> </a>
            </Col>
            <Col lg={{ span:6, offset:2}}>
            <Row>
            <Col lg={6}>
                <WorkReusable title="Strategy" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." wImg={Wm1}/>
             </Col>
            <Col lg={6}>
                <WorkReusable title="Wireframing" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." wImg={Wm2}/>
             </Col>
            <Col lg={6}>
                <WorkReusable title="Design" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." wImg={Wm3}/>
             </Col>
            <Col lg={6}>
                <WorkReusable title="Development" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."wImg={Wm4}/>
             </Col>
             
            </Row>
            </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Work
