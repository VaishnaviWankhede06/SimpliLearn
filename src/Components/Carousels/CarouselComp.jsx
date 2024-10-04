import Carousel from 'react-bootstrap/Carousel';
import logo from "./download.png";   
import logo1 from "./istockphoto-1393065816-612x612.jpg";  
import logo3 from "./banner-right-web.webp";
import logo2 from "./banner_third_desktop.avif";
import { FaArrowLeftLong , FaArrowRightLong} from "react-icons/fa6";

function CarouselComp() {
  return (
    
    <Carousel  indicators={false} 
     nextIcon={<FaArrowRightLong className="arrow-btn text-dark fs-1" />} 
    prevIcon={<FaArrowLeftLong className="arrow-btn text-dark fs-1" />}>
      <Carousel.Item>
        
        <div className="carousel-slide d-flex align-items-center" style={{ backgroundImage: `url(${logo})`, height: "75vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container h-100">
            <div className="row h-100">
              
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div>
                  <p className='font-roboto' style={{ color: 'white', fontSize: '1.76rem'}}>All our top programs include<br/>
                      <span style={{ color: 'rgb(250, 166, 26)'}}>Generative AI Components</span></p>
                  <h3 className='font-roboto' style={{ color: 'white' , fontSize: '2.30rem'}}> Be a leader in your field<br/>
                      Change, Adapt and Build with AI</h3>
                      <button type='submit' className='btn fw-semibold  fs-5 align-items-center mt-5 sm-center'
  style={{ width: '18.75rem', height: '3.125rem', backgroundColor:'rgb(234, 133, 0)' }}>Explore Gen AI Program</button>
                </div>
              </div>
              
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img 
                  className="d-block" 
                  src={logo3} 
                  alt="Overlay Image" 
                  style={{ maxWidth: "100%", maxHeight: "100%", height: "100%", width: "auto", objectFit: "contain" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div 
          className="carousel-slide d-flex align-items-center" 
          style={{ backgroundImage: `url(${logo1})`, height: "75vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container h-100 ">
            <div className="row h-100 ">
              <div className="col-md-6 d-flex align-items-center justify-content-center ">
                <div className=' '>
                  <h1 style={{color:'white', fontSize:'60px'}} >World’s #1<br/>
                  Online Bootcamp</h1>
                  <p className='font-roboto' style={{ color: 'white'}}><strong>5,000,000</strong> careers advanced</p>
                  <p className='font-roboto' style={{ color: 'white'}}><strong>1,500 </strong>live classes every month</p>
                  <p className='font-roboto' style={{ color: 'white'}}><strong>85% </strong>report career benefits including promotion or a new job</p>
                  <button style={{backgroundColor:'rgb(17,121,239)'}} className='border-0 rounded fw-semibold  fs-6 align-items-center mt-5 sm-center px-5 py-2 text-white'>Explore Program</button>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img 
                  className="d-block" 
                  src={logo2} 
                  alt="Overlay Image" 
                  style={{ maxWidth: "100%", maxHeight: "100%", height: "100%", width: "auto", objectFit: "contain" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div 
          className="carousel-slide d-flex align-items-center" 
          style={{ backgroundImage: `url(${logo})`, height: "75vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-6 d-flex align-items-center justify-content-center  ms-5">
                <div>
                  <h1 className='text-white'>Transform your Career with</h1>
                  <h3 style={{color: 'rgb(250, 166, 26)'}}>100+ In-demand Industry-Recognized Certifications</h3>
                 
                  <div className='d-flex align-items-center mb-2'>
                  <img src='https://www.simplilearn.com/ice9/assets/banner-3-success-icon.svgz?w=720&dpr=1' className='me-3'/>
                  <h4 className='text-white'>1Mn+ Successful Learners</h4>
                  </div>
                 
                 <div className='d-flex align-items-center'>
                 <img src='https://www.simplilearn.com/ice9/assets/banner-3-group-icon.svgz?w=720&dpr=1' className='me-3'/>
                 <h4 className='text-white'style={{ whiteSpace: 'nowrap' }}>1500+ Guaranteed to run sessions every month</h4>
                 </div>
                 
                  
                  <button type='submit' className='btn fw-semibold  fs-5 align-items-center mt-5 sm-center'
  style={{ width: '18.75rem', height: '3.125rem', backgroundColor:'rgb(234, 133, 0)' }}>Explore Program</button>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center justify-content-end mt-4 mt-md-0">
                <img 
                  className="d-block" 
                  src={logo2} 
                  alt="Overlay Image" 
                  style={{ maxWidth: "100%", maxHeight: "100%", height: "70%", width: "auto", objectFit: "contain" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;