import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';
import image1 from "../images/image1.jpg"
import image2 from "../images/image7.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 5 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-interval="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={activeIndex === 0 ? "active" : ""} aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className={activeIndex === 1 ? "active" : ""} aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className={activeIndex === 2 ? "active" : ""} aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className={activeIndex === 3 ? "active" : ""} aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className={activeIndex === 4 ? "active" : ""} aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" className={activeIndex === 5 ? "active" : ""} aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={image1} className="d-block w-100 cimage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Royals Consultant</h4>
              <p className='fs-6'>Fantasize your future with us - study and work abroad with ease!</p>
              <Link to="/contact" type="button" class="btn btn-outline-warning btn-lg">Contact Us</Link>
            </div>
          </div>
          <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
            <img src={image2} className="d-block w-100 cimage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Royals Consultant</h4>
              <p className='fs-6'>Fantasize your future with us - study and work abroad with ease!</p>
              <Link to="/contact" type="button" class="btn btn-outline-warning btn-lg">Contact Us</Link>
            </div>
          </div>
          <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
            <img src={image3} className="d-block w-100 cimage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Royals Consultant</h4>
              <p className='fs-6'>Fantasize your future with us - study and work abroad with ease!</p>
              <Link to="/contact" type="button" class="btn btn-outline-warning btn-lg">Contact Us</Link>
            </div>
          </div>
          <div className={activeIndex === 3 ? "carousel-item active" : "carousel-item"}>
            <img src={image4} className="d-block w-100 cimage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Royals Consultant</h4>
              <p className='fs-6'>Fantasize your future with us - study and work abroad with ease!</p>
              <Link to="/contact" type="button" class="btn btn-outline-warning btn-lg">Contact Us</Link>
            </div>
          </div>
          <div className={activeIndex === 4 ? "carousel-item active" : "carousel-item"}>
            <img src={image5} className="d-block w-100 cimage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Royals Consultant</h4>
              <p className='fs-6'>Fantasize your future with us - study and work abroad with ease!</p>
              <Link to="/contact" type="button" class="btn btn-outline-warning btn-lg">Contact Us</Link>
            </div>
          </div>
          <div className={activeIndex === 5 ? "carousel-item active" : "carousel-item"}>
            <img src={image6} className="d-block w-100 cimage" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Royals Consultant</h4>
              <p className='fs-6'>Fantasize your future with us - study and work abroad with ease!</p>
              <Link to="/contact" type="button" class="btn btn-outline-warning btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider
