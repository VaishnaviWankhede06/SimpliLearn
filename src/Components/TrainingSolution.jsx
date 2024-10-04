/*import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo1 from './Images/AIRBUS_home.avif';
import logo2 from './Images/BCG_home.avif';
import logo3 from './Images/Bosch.avif';
import logo4 from './Images/EY_home.avif';
import logo5 from './Images/HP_home.avif';
import logo6 from './Images/MPhasis_v_1_01.avif';
import logo7 from './Images/The-World-Bank_home.avif';
import logo8 from './Images/dell.avif';
import logo9 from './Images/vodafone.avif';

const TrainingSolution = () => {
  return (
    <>
      
      <section className="d-flex  py-5 bg-light">
        <Container>
          <p className="" style={{color:'rgb(39, 44, 55)', fontFamily:'Roboto, sans-serif', fontSize:'2.20rem', fontWeight:'300'}}>Employee and Team<br/> Training Solutions</p>
          <p className="text-size2" style={{color:'rgb(81, 86, 94)'}}>
            Curriculum tailored to your organization, delivered <br/> with white-glove service and support.
          </p>
          <Button variant="primary" size="lg" className="mt-4">Request a Free Demo</Button>
        </Container>

        <Container>
          <h4 className="text-center text-muted">Supporting Enterprises Around the Globe</h4>
          <div className='mt-5'>
            <Row className='mb-5'>
                <Col md={4}>
                <div className='border shadow-lg'><img src={logo1} style={{width:"7rem"}}/></div>
                </Col>
                <Col md={4}>
                <div className='border shadow-lg'><img src={logo2} style={{width:"7rem"}}/></div>
                </Col>
                <Col md={4}>
                <div className='border shadow-lg'><img src={logo3} style={{width:"7rem"}}/></div>
                </Col>
            </Row>
            <Row className='mb-5'>
            <Col md={4}>
                <div className='border shadow-lg'><img src={logo4} style={{width:"7rem"}}/></div>
                </Col>
                <Col md={4}>
                <div className='border shadow-lg'><img src={logo5} style={{width:"7rem"}}/></div>
                </Col>
                <Col md={4}>
                <div className='border shadow-lg'><img src={logo6} style={{width:"7rem"}}/></div>
                </Col>

            </Row>
            <Row className='mb-5'>
               <Col md={4}>
                  <div className='border shadow-lg'><img src={logo7} style={{width:"7rem"}}/></div>
                </Col>
                <Col md={4}>
                    <div className='border shadow-lg'><img src={logo8} style={{width:"7rem"}}/></div>
                </Col>
                <Col md={4}>
                   <div className='border shadow-lg'><img src={logo9} style={{width:"7rem"}}/></div>
                </Col>
            </Row>
          </div>
         
         
        </Container>
      </section>

      
      
    </>
  );
};

export default TrainingSolution;*/

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo1 from './Images/AIRBUS_home.avif';
import logo2 from './Images/BCG_home.avif';
import logo3 from './Images/Bosch.avif';
import logo4 from './Images/EY_home.avif';
import logo5 from './Images/HP_home.avif';
import logo6 from './Images/MPhasis_v_1_01.avif';
import logo7 from './Images/The-World-Bank_home.avif';
import logo8 from './Images/dell.avif';
import logo9 from './Images/vodafone.avif';

const TrainingSolution = () => {
  return (
    <>
      <section className="training-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className=' mt-0 pt-0' >
              <h2 className="training-header mb-5 mt-0 pt-0">
                Employee and Team <br /> Training Solutions
              </h2>
              <p className="training-subtext mb-6">
                Curriculum tailored to your organization, delivered <br/>with white-glove service and support.
              </p>
              <Button variant="primary" size="lg" className="demo-button" style={{marginTop:'6rem'}}>
                Request a Free Demo
              </Button>
            </Col>
            <Col lg={7} className='pt-5'>
              <h4 className=" text-muted supporting-text">
                Supporting Enterprises Around the Globe
              </h4>
              <div className="logo-grid mt-5">
                <Row className="mb-4">
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo1} alt="Airbus" className="logo-img" />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo2} alt="BCG" className="logo-img" />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo3} alt="Bosch" className="logo-img" />
                    </div>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo4} alt="EY" className="logo-img" />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo5} alt="HP" className="logo-img" />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo6} alt="MPhasis" className="logo-img" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo7} alt="The World Bank" className="logo-img" />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo8} alt="Dell" className="logo-img" />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="logo-card">
                      <img src={logo9} alt="Vodafone" className="logo-img" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TrainingSolution;
