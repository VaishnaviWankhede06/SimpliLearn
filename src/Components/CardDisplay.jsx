/*

import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import './cards/Cards.css';
import JSON1 from './cards/Cards.json'; // Replace with your JSON data for cards
import JSON2 from './cards/Cards1.json'; // Replace with your JSON data for cards
import logo from './cards/pmc.webp'; // Example logo

const CardDisplay = () => {
  const [currentCards, setCurrentCards] = useState(JSON1); // Default to first set of cards

  const handleNameClick = (cards) => {
    setCurrentCards(cards);
  };

  const renderList = () => {
    return currentCards.map((data, index) => (
      <div className="card-container" key={index}>
        <img src={logo} className="card-img" alt="Card" />
        <div className="card-content">
          <h5 className="card-title">{data.heading}</h5>
          <p>{data.data1}</p>
          <p>{data.data2}</p>
          <span>{data.duration}</span>
          <span>{data.start} <b>{data.date}</b></span>
        </div>
      </div>
    ));
  };

  return (
    <Container fluid className="p-4">
      <h2>Get Certified, Get Ahead with Our Programs</h2>
      <h6>Learn from global experts and get certified by the world's leading universities</h6>
      <Row>
        
        <Col xs={12} md={3} className="left-section ">
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Most Popular
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Generative AI
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              AI & Machine Learning
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Data Science & Business Analytics
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Project Management
            </ListGroup.Item>
           
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
            Cyber Security
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Agile & Scrum
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
            Cloud Computing & DevOps
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Business Leadership
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
            Software Development
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Product and Design
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
            IT Service and Architecture
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Quality Managemrnt
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Digital Marketing 
            </ListGroup.Item>
          </ListGroup>
        </Col>

        
        <Col xs={12} md={9} className="right-section">
          <Row>
            {renderList()}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDisplay;*/ 

import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import './cards/Cards.css';
import JSON1 from './cards/Cards.json'; 
import JSON2 from './cards/Cards1.json'; 

import { IoMdCheckmark } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

const CardDisplay = () => {
  const [currentCards, setCurrentCards] = useState(JSON1); 

  const handleNameClick = (cards) => {
    setCurrentCards(cards);
  };

  const renderList = () => {
    return currentCards.map((data, index) => (
      
      <div className="card-container" key={index}>
       <div className="over-div">
    <img src={data.institute}/>
  </div>
       <img src={data.image} className="card-img mb-3" alt="Card" />
       <div className="card-content">
          <h5 className="card-title mb-2">{data.heading}</h5>
          <div className="d-flex">
          <IoMdCheckmark  className="me-2 text-primary"/>
          <p className="" style={{fontSize:'13px'}}>{data.data1}</p>
          </div>
          <div className="d-flex">
          <IoMdCheckmark className="text-primary me-2"/>
          <p style={{fontSize:'13px'}}>{data.data2}</p>
          </div>
          <span className="" style={{fontSize:'13px'}}> <CiCalendar /> {data.duration}</span>
          <div>
          <span style={{fontSize:'13px'}}>{data.start} <b>{data.date}</b></span>
          <a href="" className="text-primary text-decoration-none ms-4" style={{fontSize:'14px', fontWeight:'500'}}>Know More</a>
          </div>
        </div>
      </div>
      
    ));
  };

  return (
    <Container fluid className="p-4 mx-5 " style={{marginTop:'2rem'}}> 
      <h2 className="mb-3" style={{fontFamily:'Roboto, sans-serif', color:'rgb(39, 44, 55)'}}>Get Certified, Get Ahead with Our Programs</h2>
      <p className="mb-4" style={{ fontFamily:'Roboto, sans-serif', color:'rgb(81, 86, 94)', fontSize:'1rem'}}>Learn from global experts and get certified by the world's leading universities</p>
      <Row>
        
        <Col xs={12} md={2} className="left-section rounded border pb-3 "style={{ overflowY: 'hidden'}} > 
        <p className="ps-3 pt-2" style={{color:'rgb(39, 44, 55)',fontSize:'20px', fontFamily:'Roboto, sans-serif'}}>Categories</p>
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Most Popular
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Generative AI
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              AI & Machine Learning
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Data Science & Business Analytics
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Project Management
            </ListGroup.Item>
           
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Cyber Security
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Agile & Scrum
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON2)}>
              Cloud Computing & DevOps
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Business Leadership
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Software Development
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Product and Design
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              IT Service and Architecture
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Quality Management
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleNameClick(JSON1)}>
              Digital Marketing 
            </ListGroup.Item>
          </ListGroup>
        </Col>

        
        <Col xs={12} md={9} className="right-section pt-0">
          <Row>
            {renderList()}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDisplay;

