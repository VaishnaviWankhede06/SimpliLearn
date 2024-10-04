import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './Images/award.jpg';
import logo1 from './Images/award1.jpg';
import logo2 from './Images/award2.jpg';
import logo3 from './Images/award3.jpg';
import logo4 from './Images/award4.jpg';

function AwardsSection() {
  return (
    <Container className="awards-section m-auto">
      <h2 className="text-center mb-4">Awards and Accolades</h2>
      <Row className='d-flex justify-content-center g-5 mt-4'>
        <Col md={2} className="mb-4 ms-6 text-center ">
        <img src={logo} className="mb-5" style={{width:"7rem"}}/>
        <div className='flex flex-col text-center'>
          <span className="fw-bold ">2023 Winner</span>
          <p className='text-size1'>For IT & Technical Training</p>
        </div>
        </Col>
        
        <Col md={2} className="mb-4 ms-6 text-center">
        <img className='mb-5' src={logo1} style={{width:"7rem"}}/>
        <div className='flex flex-col text-center '>
          <span className="fw-bold">2022 Gold Winner</span>
          <p className='text-size1'>For Customer Service by Stevie Awards</p>
          </div>
        </Col>
        <Col md={2} className="mb-4 ms-6 text-center">
        <img className='mb-5' src={logo2} style={{width:"5rem"}}/>
        <div className='flex flex-col text-center'>
          <span className="fw-bold">2021 Silver Winner</span>
          <p className='text-size1'>For Customer Service by Stevie Awards</p>
          </div>
        </Col>
        <Col md={2} className="mb-4 text-center">
        <img className='mb-5' src={logo3} style={{width:"7rem"}}/>
        <div className='flex flex-col text-center'>
          <span className="fw-bold">2022 Bronze Winner</span>
          <p className='text-size1'>For Learning Delivery Platform</p>
          </div>
        </Col>
        <Col md={2} className="mb-4 text-center">
        <img className='mb-5' src={logo4} style={{width:"7rem"}}/>
        <div className='flex flex-col text-center'>
          <span className="fw-bold">2024 Bronze Winner</span>
          <p className='text-size1'>For Customer Service by Stevie Awards</p>
          </div>
        </Col>
       
       
      </Row>
    </Container>
  );
}

export default AwardsSection;