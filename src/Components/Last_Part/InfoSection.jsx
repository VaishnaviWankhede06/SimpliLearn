import React from "react";
import {Col, Row, Container} from 'react-bootstrap';
import { BsAndroid2 } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import { FaFacebookF , FaTwitter , FaYoutube , FaLinkedinIn , FaTelegramPlane , FaInstagram} from "react-icons/fa";

function InfoSection(){
  return(
    
      <Container fluid className=""style={{backgroundColor: 'rgb(26, 26, 26)', padding:'3rem 6rem 1rem 6rem'}} >
        <Row>
        <Col md={2}>
            <p className="text-size2 text-white mb-4">Follow us!</p>
            <a href="" className="custom-link text-size px-3 py-2 mb-3 text-white border text-decoration-none rounded textcolor">
              Refer and Earn
            </a>
            <div className="fs-5 mt-3 d-flex flex-column ">
              <div className="ml-0 mb-2">
              <a href="" className=" face">
                <FaFacebookF className="textbgcolor text-white rounded-circle p-2 fs-2 text-center me-2" />
              </a>
              <a href="" className="">
                <FaTwitter className="twiter textbgcolor text-white rounded-circle p-2 fs-2 me-2" />
              </a>
              <a href="" className="">
                <FaYoutube className="youtube textbgcolor text-white rounded-circle p-2 fs-2" />
              </a>
                </div>
              
              <div>
              <a href="" className="">
                <FaLinkedinIn className="linkedin textbgcolor text-white rounded-circle p-2 fs-2 me-2" />
              </a>
              <a href="" className="">
                <FaTelegramPlane className="telegrm textbgcolor text-white rounded-circle p-2 fs-2 me-2" />
              </a>
              <a href="" className="  ">
                <FaInstagram className="insta textbgcolor text-white rounded-circle p-2 fs-2" />
              </a>
              </div>
            </div>
          </Col>

          <Col md={2}>
            <p className="text-size2 text-white">Company</p>
            <ul className="list-unstyled text-white text-size">
              <li className="mb-2 textcolor">About us</li>
              <li className="mb-2 textcolor">Careers</li>
              <li className="mb-2 textcolor">Newsroom</li>
              <li className="mb-2 textcolor">Alumni speak</li>
              <li className="mb-2 textcolor">Grievance redressal</li>
              <li className="mb-2 textcolor">Contact us</li>
              <li className="mb-2 textcolor">Work with us</li>
            </ul>
          </Col>

          <Col md={2}>
            <p className="text-white text-size2">Work with us</p>
            <ul className="list-unstyled text-white text-size">
              <li className="mb-2 textcolor">Become an instructor</li>
              <li className="mb-2 textcolor">Blog as guest</li>
            </ul>
          </Col>

          <Col md={2}>
          <p className="text-white text-size2">Discover</p>
            <ul className="list-unstyled text-white text-size">
            
              <li className="mb-2 textcolor">Free Courses</li>
              <li className="mb-2 textcolor">Skillup Sitemap</li>
              <li className="mb-2 textcolor">Resources</li>
              <li className="mb-2 textcolor">RSS feed</li>
              <li className="mb-2 textcolor">City Sitemap</li>
            </ul>
          </Col>

          <Col md={2}>
            <p className="text-white text-size2">For Businesses</p>
            <ul className="list-unstyled text-white text-size ">
              <li className="mb-2 textcolor">Corporate training</li>
              <li className="mb-2 textcolor">Simplilearn Learning Hub+</li>
              <li className="mb-2 textcolor">Guaranteed-to-run Classes</li>
              <li className="mb-2 textcolor">Partners</li>
            </ul>
          </Col>

          <Col md={2}>
            <p className="text-white text-size2">Learn On the Go!</p>
            <ul className="list-unstyled text-white text-size1">
              <li className="mb-0"><a href="" style={{ whiteSpace: 'nowrap', width:'180px'}} className="d-flex align-items-center  custom-link text-decoration-none textcolor border rounded px-2 py-2" ><BsAndroid2 className="me-2 fs-5"/>Get the Android App</a></li>
              <li><a href="" className=" custom-link text-decoration-none textcolor border rounded px-2 py-2 " style={{width:'180px', display:'inline-block'}}><IoLogoApple className="me-2 fs-5"/>Get the ios App</a></li>
              
            </ul>
          </Col>
         
        </Row>
        <hr className="text-white" style={{height:'10px'}}/>
      </Container>
      
    
  );
}

export default InfoSection;