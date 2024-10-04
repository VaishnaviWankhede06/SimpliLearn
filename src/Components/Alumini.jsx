/*import React from "react";
import switchup from './Images/switchup.avif';
import trustpilot from './Images/trustpilot_v1.avif';
import report from './Images/course-report.avif';
import { FaStar } from "react-icons/fa";

const Alumini = ()=>{
    return(
       <div className="flex flex-row">
         <div>
            <h2>Hear it<br/>
            from our Alumni</h2>
            <div>
                <span className="fs-1">4.5 <FaStar className="text-warning fs-6"/></span>
                <img src={switchup} alt=""/>
             </div> 

             <div>
                <span className="fs-1">4.5 <FaStar className="text-warning fs-6"/></span>
                <img src={trustpilot} alt=""/>
             </div> 

             <div>
                <span className="fs-1">4.4 <FaStar className="text-warning fs-6"/></span>
                <img src={report} alt=""/>
             </div> 
         </div>
         <div>
            <vedio src=""></vedio>
         </div>

       </div>
    );
}

export default Alumini;*/

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import switchup from './Images/switchup.avif';
import trustpilot from './Images/trustpilot_v1.avif';
import report from './Images/course-report.avif';
import { FaStar } from "react-icons/fa";


const Alumini = () => {
    return (
        <section className="alumni-section">
            <Container>
                <Row className="align-items-center">
                    
                    <Col md={5}>
                        <h2 className="alumni-title mb-4">Hear it <br/> from our Alumni</h2>
                        <div className="review-container">
                            
                            <div className="review-item">
                                <span className="review-rating">
                                    4.5 <FaStar className="text-warning fs-6" />
                                </span>
                                <img src={switchup} alt="SwitchUp" className="review-image" />
                            </div>
                            
                            <div className="review-item">
                                <span className="review-rating">
                                    4.5 <FaStar className="text-warning fs-6" />
                                </span>
                                <img src={trustpilot} alt="Trustpilot" className="review-image" />
                            </div>
                            
                            <div className="review-item">
                                <span className="review-rating">
                                    4.4 <FaStar className="text-warning fs-6" />
                                </span>
                                <img src={report} alt="Course Report" className="review-image" />
                            </div>
                        </div>
                    </Col>

                    
                    <Col md={7} className="video-container">
                        <video width="100%" controls>
                            <source src="" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Alumini;
