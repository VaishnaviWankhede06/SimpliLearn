/*import React, {Component} from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';


class NavabarComp extends Component{
       render(){
        return(
           
      <Navbar expand="lg" className="bg-body-white">
      <Container fluid className="d-flex  flex-lg-row justify-content-center align-items-center gap-3">
      <img
            src="https://www.simplilearn.com/ice9/new_logo.svgz" // Path to your logo
            width="180"
            height="50"
            className="d-inline-block align-top "
            alt="Logo"
          />
          <div className="bg-primary p-2 rounded  d-lg-inline">
            <span className="fs-6 text-light fw-semibold font-roboto me-3">All Courses</span>
          </div>
          <Form className="d-flex w-25">
           
               <InputGroup className=" custom-border-color rounded">
        <Form.Control 
          className="custom-placeholder font-open-sans p-1 rounded outline-none border-none"
          placeholder="What do you wank to learn?"
          aria-label="Search"
        />
        <InputGroup.Text className="text-primary search-icon-hover" style={{ backgroundColor: '#e0f7fa' }} >
          <FaSearch /> 
        </InputGroup.Text >
      </InputGroup>
            
          </Form>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fw-bold fs-7 text-secondary nav-link-hover-blue">Review</Nav.Link>
            <Nav.Link href="#action2"className="fw-bold fs-7 text-secondary nav-link-hover-blue">For Business</Nav.Link>
            <Nav.Link href="#action3"className="fw-bold fs-7 text-secondary nav-link-hover-blue">Resources</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown"className="fw-bold fs-7 text-secondary nav-dropdown-hover nav-dropdown-hover1 ">
              <NavDropdown.Item href="#action3" className="fs-6">Hire From Us</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="fs-6">
                Become an Instructor
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-dark"className="text-secondary fw-semibold ms-3 button-hover-blue"style={{ width: '120px' }}>Log in</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
           
        );
       }
}
export default NavabarComp;





import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { InputGroup, Card } from 'react-bootstrap';
import { FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa';

class NavabarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCoursesOpen: false, // Track if "All Courses" is hovered
      isMoreOpen: false, // Track if "More" is hovered
    };
  }

  // Toggle "All Courses" div open state on hover
  handleCoursesMouseEnter = () => {
    this.setState({ isCoursesOpen: true });
  };

  handleCoursesMouseLeave = () => {
    this.setState({ isCoursesOpen: false });
  };

  // Toggle "More" dropdown arrow
  handleMoreMouseEnter = () => {
    this.setState({ isMoreOpen: true });
  };

  handleMoreMouseLeave = () => {
    this.setState({ isMoreOpen: false });
  };

  render() {
    return (
      <Navbar expand="lg" className="bg-body-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Container fluid className="d-flex flex-lg-row justify-content-center align-items-center gap-3">
          <img
            src="https://www.simplilearn.com/ice9/new_logo.svgz" // Path to your logo
            width="180"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />

          
          <div
            className="bg-primary p-2 rounded d-lg-inline position-relative"
            onMouseEnter={this.handleCoursesMouseEnter}
            onMouseLeave={this.handleCoursesMouseLeave}
            style={{ cursor: 'pointer', fontSize: '14px' }}
          >
            <span className="fs-6 text-light fw-semibold font-roboto me-3">All Courses</span>
            {this.state.isCoursesOpen ? <FaAngleUp className="text-light" /> : <FaAngleDown className="text-light" />}
            
            
            {this.state.isCoursesOpen && (
              <div className="position-absolute bg-white p-3 shadow" style={{ top: '50px', left: 0, zIndex: 1000, width: '300px' }}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Course 1</Card.Title>
                    <Card.Text>Brief description of course 1.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Course 2</Card.Title>
                    <Card.Text>Brief description of course 2.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Course 3</Card.Title>
                    <Card.Text>Brief description of course 3.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>

          
          <Form className="d-flex w-25">
            <InputGroup className="custom-border-color rounded">
              <Form.Control
                className="custom-placeholder font-open-sans p-1 rounded outline-none border-none"
                placeholder="What do you want to learn?"
                aria-label="Search"
              />
              <InputGroup.Text className="text-primary search-icon-hover" style={{ backgroundColor: '#e0f7fa' }}>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', fontSize: '14px' }} navbarScroll>
              <Nav.Link href="#action1" className="fw-bold text-secondary nav-link-hover-blue">Review</Nav.Link>
              <Nav.Link href="#action2" className="fw-bold text-secondary nav-link-hover-blue">For Business</Nav.Link>
              <Nav.Link href="#action3" className="fw-bold text-secondary nav-link-hover-blue">Resources</Nav.Link>

              
              <NavDropdown
                title="More "
                id="navbarScrollingDropdown"
                className="fw-bold text-secondary nav-dropdown-hover"
              >
                <NavDropdown.Item href="#action4" className="fs-6">Hire From Us</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="fs-6">Become an Instructor</NavDropdown.Item>
              </NavDropdown>

              <Button variant="outline-dark" className="text-secondary fw-semibold ms-3 button-hover-blue" style={{ width: '120px' }}>Log in</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavabarComp;


import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { InputGroup } from 'react-bootstrap';
import { FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Icons for the arrow

class NavabarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCoursesOpen: false, // Track if "All Courses" is hovered
    };
  }

  // Toggle dropdown open state on hover
  handleMouseEnter = () => {
    this.setState({ isCoursesOpen: true });
  };

  handleMouseLeave = () => {
    this.setState({ isCoursesOpen: false });
  };

  render() {
    return (
      <Navbar expand="lg" className="bg-body-white">
        <Container fluid className="d-flex flex-lg-row justify-content-center align-items-center gap-3">
          <img
            src="https://www.simplilearn.com/ice9/new_logo.svgz" // Path to your logo
            width="180"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          
          
          <div
            className="bg-primary p-2 rounded d-lg-inline position-relative"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{ cursor: 'pointer' }}
          >
            <span className="fs-6 text-light fw-semibold font-roboto me-3">All Courses</span>
            {this.state.isCoursesOpen ? <FaAngleUp className="text-light" /> : <FaAngleDown className="text-light" />}
            
            
            {this.state.isCoursesOpen && (
              <div className="position-absolute bg-white p-3 shadow" style={{ top: '50px', left: 0, zIndex: 1000 }}>
                <NavDropdown.Item href="#course1">Course 1</NavDropdown.Item>
                <NavDropdown.Item href="#course2">Course 2</NavDropdown.Item>
                <NavDropdown.Item href="#course3">Course 3</NavDropdown.Item>
              </div>
            )}
          </div>

          
          <Form className="d-flex w-25">
            <InputGroup className="custom-border-color rounded">
              <Form.Control
                className="custom-placeholder font-open-sans p-1 rounded outline-none border-none"
                placeholder="What do you want to learn?"
                aria-label="Search"
              />
              <InputGroup.Text className="text-primary search-icon-hover" style={{ backgroundColor: '#e0f7fa' }}>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1" className="fw-bold fs-7 text-secondary nav-link-hover-blue">Review</Nav.Link>
              <Nav.Link href="#action2" className="fw-bold fs-7 text-secondary nav-link-hover-blue">For Business</Nav.Link>
              <Nav.Link href="#action3" className="fw-bold fs-7 text-secondary nav-link-hover-blue">Resources</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown" className="fw-bold fs-7 text-secondary nav-dropdown-hover nav-dropdown-hover1">
                <NavDropdown.Item href="#action3" className="fs-6">Hire From Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="fs-6">Become an Instructor</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-dark" className="text-secondary fw-semibold ms-3 button-hover-blue" style={{ width: '120px' }}>Log in</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavabarComp;*/

import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { InputGroup } from 'react-bootstrap';
import { FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

class NavabarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCoursesOpen: false, 
    };
  }

  
  handleMouseEnter = () => {
    this.setState({ isCoursesOpen: true });
  };

  handleMouseLeave = () => {
    this.setState({ isCoursesOpen: false });
  };

  render() {
    return (
      <Navbar expand="lg" className="bg-body-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Container fluid className="d-flex flex-lg-row justify-content-center align-items-center gap-3">
          <img
            src="https://www.simplilearn.com/ice9/new_logo.svgz" 
            width="180"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          
          
          <div
            className="bg-primary p-2 rounded d-lg-inline position-relative"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{ cursor: 'pointer' }}
          >
            <span className="fs-6 text-light fw-semibold me-3">All Courses</span>
            {this.state.isCoursesOpen ? <FaAngleUp className="text-light" /> : <FaAngleDown className="text-light" />}
            
            {this.state.isCoursesOpen && (
              <div className="position-absolute bg-white p-3 shadow" style={{ top: '50px', left: 0, zIndex: 1000 }}>
               
              </div>
            )}
          </div>

          
          <Form className="d-flex w-25">
            <InputGroup className="custom-border-color rounded">
              <Form.Control
                className="custom-placeholder p-1 rounded outline-none border-none"
                placeholder="What do you want to learn?"
                aria-label="Search"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              />
              <InputGroup.Text className="text-primary search-icon-hover" style={{ backgroundColor: '#e0f7fa' }}>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1" className="fw-bold fs-7 text-secondary nav-link-hover-blue" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>
                Review
              </Nav.Link>
              <Nav.Link href="#action2" className="fw-bold fs-7 text-secondary nav-link-hover-blue" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>
                For Business
              </Nav.Link>
              <Nav.Link href="#action3" className="fw-bold fs-7 text-secondary nav-link-hover-blue" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>
                Resources
              </Nav.Link>

             
              <NavDropdown
                title="More"
                id="navbarScrollingDropdown"
                className="fw-bold fs-7 text-secondary nav-dropdown-hover nav-dropdown-hover1"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              >
                <NavDropdown.Item href="#action3" className="fs-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Hire From Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="fs-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Become an Instructor
                </NavDropdown.Item>
              </NavDropdown>

              
              <Button
                variant="outline-dark"
                className="text-secondary fw-semibold ms-3 button-hover-blue"
                style={{ width: '120px', fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}
              >
                Log in
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavabarComp; 

