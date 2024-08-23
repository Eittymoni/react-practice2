import React from 'react'
import "./feature.css"
import { Container, Row, Col } from 'react-bootstrap'
import ProIm from "../../assets/project.png"
import FeatureReusable from '../reueable/FeatureReusable'


const Feature = () => {
  return (
    <div id='feature'>
        <Container>
            <Row className='feature_top' >
                <Col lg={{ span:7, offset:3}}>
                <h5>Features</h5>
                <h2>Design that solves problems, one product at a time</h2>
                </Col>
            </Row>
            <Row>
            <Col lg={4} >
            <FeatureReusable  img ={ ProIm} title=" Uses Client First" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
             </Col>
            <Col lg={4} >
            <FeatureReusable  img ={ ProIm} title=" Uses Client First" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
             </Col>
            <Col lg={4} >
            <FeatureReusable  img ={ ProIm} title=" Uses Client First" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
             </Col>
            <Col lg={4} className='mt-3' >
            <FeatureReusable  img ={ ProIm} title=" Uses Client First" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
             </Col>
            <Col lg={4} className='mt-3' >
            <FeatureReusable  img ={ ProIm} title=" Uses Client First" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
             </Col>
            <Col lg={4} className='mt-3' >
            <FeatureReusable  img ={ ProIm} title=" Uses Client First" pera="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."/>
             </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Feature
