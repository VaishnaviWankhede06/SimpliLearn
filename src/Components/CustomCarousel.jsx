
/*


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import { Image, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import { Navigation, Autoplay } from 'swiper/modules'; // Swiper modules

const CustomCarousel = () => {
  const slides = [
    { image: './Image/person.avif', name: 'Sameer Marathe', role: 'Project Manager, Atos', 
      description: 'The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!' },
    { image: './Image/person1.avif', name: 'Rajendra Prabhu Sivasamy', role: 'Principal Software Engineer, TESCO',
      description: "Simplilearn's Certified Scrum Master course helped me rise in my career from Principal Software Engineer to Senior Manager. Thank you." },
    { image: './Image/person2.avif', name: 'Sabyasachi Gupta', role: 'Project Manager, aQb Solutions Pvt Ltd', 
      description: 'The course increased my practical knowledge in Agile methodology and helped me get promoted to a Project Manager in the short span of 1.5 months.' },
    { image: './Image/person3.avif', name: 'Pramod Bhargav', role: 'Sr. Business Data Analyst and Lead, Apple Inc.(TCS)', 
      description: 'The trainer was entirely professional, knowledgeable, and helpful while clearing any doubts. Learning from Simplilearn was worth the money and time spent.' },
    { image: './Image/person4.avif', name: 'Sreeram Narayan', role: 'Data Analyst, Hewlett Packard Enterprise', 
      description: 'Thanks to the knowledgeable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!' },
    { image: './Image/person5.avif', name: 'Satish Hiremath', role: 'Senior Consultant, Capgemini', 
      description: "Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary." },
  ];

  return (
    <Container fluid className='py-5' style={{ backgroundColor: 'rgb(248, 251, 255)', width: '100vw', padding: 0 }}>
      <Swiper
        modules={[Navigation, Autoplay]} // Use Autoplay and Navigation
        spaceBetween={0}
        slidesPerView={2}
        slidesPerGroup={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        loop={true} // Loop through slides continuously
        pagination={{ clickable: true }} // Add pagination dots
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card p-3 shadow-sm" style={{ width: '500px', height: '250px', border: 'none' }}>
              <Row className="align-items-center h-100">
                <Col xs={3} className="d-flex justify-content-center align-items-center">
                  <Image src={slide.image} alt={slide.name} roundedCircle style={{ width: '100px', height: '100px' }} />
                </Col>
                <Col xs={9}>
                  <h6 className="mb-1">{slide.name}</h6>
                  <p className="text-muted mb-0">{slide.role}</p>
                </Col>
              </Row>
              <p className="text-secondary mt-0">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomCarousel;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Navigation, Autoplay } from 'swiper/modules';

const CustomCarousel = () => {
  const slides = [
    { image: './Image/person.avif', name: 'Sameer Marathe', role: 'Project Manager, Atos', 
      description: 'The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!' },
    { image: './Image/person1.avif', name: 'Rajendra Prabhu Sivasamy', role: 'Principal Software Engineer, TESCO',
      description: "Simplilearn's Certified Scrum Master course helped me rise in my career from Principal Software Engineer to Senior Manager. Thank you." },
    { image: './Image/person2.avif', name: 'Sabyasachi Gupta', role: 'Project Manager, aQb Solutions Pvt Ltd', 
      description: 'The course increased my practical knowledge in Agile methodology and helped me get promoted to a Project Manager in the short span of 1.5 months.' },
    { image: './Image/person3.avif', name: 'Pramod Bhargav', role: 'Sr. Business Data Analyst and Lead, Apple Inc.(TCS)', 
      description: 'The trainer was entirely professional, knowledgeable, and helpful while clearing any doubts. Learning from Simplilearn was worth the money and time spent.' },
    { image: './Image/person4.avif', name: 'Sreeram Narayan', role: 'Data Analyst, Hewlett Packard Enterprise', 
      description: 'Thanks to the knowledgeable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!' },
    { image: './Image/person5.avif', name: 'Satish Hiremath', role: 'Senior Consultant, Capgemini', 
      description: "Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary." },
  ];

  return (
    <Container fluid className='py-5' style={{ backgroundColor: 'rgb(248, 251, 255)', padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5} // Reduced space between slides
          slidesPerView={2}
          slidesPerGroup={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          centeredSlides={true}
          style={{ width: '90%' }} // Carousel width set to 90% for better centering
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="card p-3 shadow-sm" style={{ width: '100%', height: '250px', border: 'none' }}>
                <Row className="align-items-center h-100">
                  <Col xs={3} className="d-flex justify-content-center align-items-center">
                    <Image src={slide.image} alt={slide.name} roundedCircle style={{ width: '100px', height: '100px' }} />
                  </Col>
                  <Col xs={9}>
                    <h6 className="mb-1">{slide.name}</h6>
                    <p className="text-muted mb-0">{slide.role}</p>
                  </Col>
                </Row>
                <p className="text-secondary mt-0">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CustomCarousel;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Navigation, Autoplay } from 'swiper/modules';

const CustomCarousel = () => {
  const slides = [
    { image: './Image/person.avif', name: 'Sameer Marathe', role: 'Project Manager, Atos', 
      description: 'The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!' },
    { image: './Image/person1.avif', name: 'Rajendra Prabhu Sivasamy', role: 'Principal Software Engineer, TESCO',
      description: "Simplilearn's Certified Scrum Master course helped me rise in my career from Principal Software Engineer to Senior Manager. Thank you." },
    { image: './Image/person2.avif', name: 'Sabyasachi Gupta', role: 'Project Manager, aQb Solutions Pvt Ltd', 
      description: 'The course increased my practical knowledge in Agile methodology and helped me get promoted to a Project Manager in the short span of 1.5 months.' },
    { image: './Image/person3.avif', name: 'Pramod Bhargav', role: 'Sr. Business Data Analyst and Lead, Apple Inc.(TCS)', 
      description: 'The trainer was entirely professional, knowledgeable, and helpful while clearing any doubts. Learning from Simplilearn was worth the money and time spent.' },
    { image: './Image/person4.avif', name: 'Sreeram Narayan', role: 'Data Analyst, Hewlett Packard Enterprise', 
      description: 'Thanks to the knowledgeable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!' },
    { image: './Image/person5.avif', name: 'Satish Hiremath', role: 'Senior Consultant, Capgemini', 
      description: "Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary." },
  ];

  return (
    <Container fluid className='py-5' style={{ backgroundColor: 'rgb(248, 251, 255)', padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10} // Adjusted space between slides
          slidesPerView={2} // Show 2 slides at a time
          slidesPerGroup={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          centeredSlides={false} // Disable centeredSlides so two slides are fully shown
          style={{ width: '90%' }} // Carousel width set to 90% for better centering
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="card p-3 shadow-sm" style={{ width: '90%', height: '300px', border: 'none' }}>
                <Row className="align-items-center h-100">
                  <Col xs={3} className="d-flex justify-content-center align-items-center">
                    <Image src={slide.image} alt={slide.name} roundedCircle style={{ width: '100px', height: '100px' }} />
                  </Col>
                  <Col xs={9}>
                    <h6 className="mb-1">{slide.name}</h6>
                    <p className="text-muted mb-0">{slide.role}</p>
                  </Col>
                </Row>
                <p className="text-secondary mt-0">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CustomCarousel; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Navigation, Autoplay } from 'swiper/modules';

const CustomCarousel = () => {
  const slides = [
    { image: './Image/person.avif', name: 'Sameer Marathe', role: 'Project Manager, Atos', 
      description: 'The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!' },
    { image: './Image/person1.avif', name: 'Rajendra Prabhu Sivasamy', role: 'Principal Software Engineer, TESCO',
      description: "Simplilearn's Certified Scrum Master course helped me rise in my career from Principal Software Engineer to Senior Manager. Thank you." },
    { image: './Image/person2.avif', name: 'Sabyasachi Gupta', role: 'Project Manager, aQb Solutions Pvt Ltd', 
      description: 'The course increased my practical knowledge in Agile methodology and helped me get promoted to a Project Manager in the short span of 1.5 months.' },
    { image: './Image/person3.avif', name: 'Pramod Bhargav', role: 'Sr. Business Data Analyst and Lead, Apple Inc.(TCS)', 
      description: 'The trainer was entirely professional, knowledgeable, and helpful while clearing any doubts. Learning from Simplilearn was worth the money and time spent.' },
    { image: './Image/person4.avif', name: 'Sreeram Narayan', role: 'Data Analyst, Hewlett Packard Enterprise', 
      description: 'Thanks to the knowledgeable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!' },
    { image: './Image/person5.avif', name: 'Satish Hiremath', role: 'Senior Consultant, Capgemini', 
      description: "Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary." },
  ];

  return (
    <Container fluid className='py-5' style={{ backgroundColor: 'rgb(248, 251, 255)', padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10} // Adjusted space between slides
          slidesPerView={2} // Show 2 slides at a time
          slidesPerGroup={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          centeredSlides={false} // Disable centeredSlides so two slides are fully shown
          style={{ width: '80%' }} // Carousel width set to 90% for better centering
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="card shadow-sm" style={{ padding: '20px', margin: '0 auto', height: '300px', border: 'none' }}> 
                <Row className="align-items-center h-100">
                  <Col xs={3} className="d-flex justify-content-center align-items-center">
                    <Image src={slide.image} alt={slide.name} roundedCircle style={{ width: '100px', height: '100px' }} />
                  </Col>
                  <Col xs={9}>
                    <h6 className="mb-1">{slide.name}</h6>
                    <p className="text-muted mb-0">{slide.role}</p>
                  </Col>
                </Row>
                <p className="text-secondary mt-2">{slide.description}</p> 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CustomCarousel; */


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Navigation, Autoplay } from 'swiper/modules';

const CustomCarousel = () => {
  const slides = [
    { image: './Image/person.avif', name: 'Sameer Marathe', role: 'Project Manager, Atos', 
      description: 'The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!' },
    { image: './Image/person1.avif', name: 'Rajendra Prabhu Sivasamy', role: 'Principal Software Engineer, TESCO',
      description: "Simplilearn's Certified Scrum Master course helped me rise in my career from Principal Software Engineer to Senior Manager. Thank you." },
    { image: './Image/person2.avif', name: 'Sabyasachi Gupta', role: 'Project Manager, aQb Solutions Pvt Ltd', 
      description: 'The course increased my practical knowledge in Agile methodology and helped me get promoted to a Project Manager in the short span of 1.5 months.' },
    { image: './Image/person3.avif', name: 'Pramod Bhargav', role: 'Sr. Business Data Analyst and Lead, Apple Inc.(TCS)', 
      description: 'The trainer was entirely professional, knowledgeable, and helpful while clearing any doubts. Learning from Simplilearn was worth the money and time spent.' },
    { image: './Image/person4.avif', name: 'Sreeram Narayan', role: 'Data Analyst, Hewlett Packard Enterprise', 
      description: 'Thanks to the knowledgeable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!' },
    { image: './Image/person5.avif', name: 'Satish Hiremath', role: 'Senior Consultant, Capgemini', 
      description: "Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary." },
  ];

  return (
    <Container fluid className='py-5' style={{ backgroundColor: 'rgba(248, 251, 255,0.3)', padding: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30} 
          slidesPerView={2} 
          slidesPerGroup={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          centeredSlides={false} 
          style={{ width: '80%' }} 
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="card shadow-sm" style={{ padding: '20px', margin: '0 auto', height: '300px', border: 'none' }}> {/* Increased padding */}
                <Row className="align-items-center h-100">
                  <Col xs={3} className="d-flex justify-content-center align-items-center">
                    <Image src={slide.image} alt={slide.name} roundedCircle style={{ width: '100px', height: '100px' }} />
                  </Col>
                  <Col xs={9}>
                    <h6 className="mb-1">{slide.name}</h6>
                    <p className="text-muted mb-0">{slide.role}</p>
                  </Col>
                </Row>
                <p className="text-secondary mt-2">{slide.description}</p> 
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CustomCarousel;



