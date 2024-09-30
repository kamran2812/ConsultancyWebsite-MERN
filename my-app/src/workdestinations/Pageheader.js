import React, { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './main.css';
import { useLocation } from 'react-router-dom';
// import back from '../images/image10.jpg';
import image1 from '../images/image11.jpg';
import image2 from '../images/image8.jpg';
import image3 from '../images/image10.jpg';

const images = [image1, image2, image3];

const Pageheader = () => {
  
    
    const [currentImage, setCurrentImage] = useState(0);
    
    const { pathname } = useLocation();
    const countryName = pathname.substring(1).toUpperCase();

  const settings = {
    dots: true,
    arrows: false, // hide navigation buttons
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current) => {
      setCurrentImage(current);
    },
    appendDots: (dots) => (
      <div style={{ display: "none" }}></div> // hide the indicator dots
    ),
  };
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      disableMutationObserver: true // add this option
    });
    AOS.refresh(); // manually refresh animations
  }, []);

  return (
    <>
      <div className='container my-5'
        data-aos='flip-down'
        data-aos-duration='1000'
        data-aos-once="false">
        <div className='row'>
          <div className='col-12 backi'>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '220px',
                      borderRadius: '20px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(0, 41, 88, 0.7)',
                      }}
                    ></div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255)',
                      }}
                    >
                      <h1 className='text-light'
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        WORK <span className='country'>{countryName}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      </>
  )
                    }
                    export default Pageheader;