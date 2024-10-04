import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './Images/v1.webp';
import logo1 from './Images/v2.webp';
import logo2 from './Images/v3.webp';
import logo3 from './Images/v4.webp';


const BootcampSection = () => {
  return (
    <section className="bootcamp-section py-5" style={{backgroundColor:'rgb(248, 251, 255)'}}>
      <Container>
        <span style={{color:'rgb(39, 44, 55)',fontSize:'1rem', fontWeight:'500', fontFamily:'Roboto, sans-serif'}} className=" mb-4">Our Online Bootcamp</span>
        <p style={{letterSpacing:'1px', fontFamily:'Roboto, sans-serif',fontSize:'2rem', fontWeight:'100'}} className=" mb-5 mt-2">An immersive learning experience</p>
        <Row>
          <Col md={3} className="mb-4">
            <div className="bootcamp-item">
              <img src={logo}/>
              <p className="text-dark mb-3 text-size2 fw-bold">Develop skills for real career<br/> growth</p>
              <p style={{color:'rgb(81, 86, 94)'}} className='text-size1 fw-semibold'>Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills.</p>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <div className="bootcamp-item">
            <img src={logo1}/>
              <p className="text-dark mb-3 text-size2 fw-bold">Learn from experts active in their field, not out-of-touch trainers</p>
              <p style={{color:'rgb(81, 86, 94)'}} className='text-size1 fw-semibold'>Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.</p>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <div className="bootcamp-item">
              <img src={logo2}/>
              <p className=" mb-3 text-size2 text-dark fw-bold">Learn by working on real-world problems</p>
              <p style={{color:'rgb(81, 86, 94)'}} className='text-size1 fw-semibold'>Capstone projects involving real world data sets with virtual labs for hands-on learning.</p>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <div className="bootcamp-item">
              <img src={logo3} className='text-center'/>
              <p className=" mb-3 text-size2 text-dark fw-bold">Structured guidance ensuring learning never stops</p>
              <p style={{color:'rgb(81, 86, 94)'}} className='text-size1 fw-semibold'>24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BootcampSection;
