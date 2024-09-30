
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import Slider from "react-slick";
import "./Partner.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../images/partners/one.jpg"
// import two from "../images/partners/two.png"
// import three from "../images/partners/three.png"
import four from "../images/partners/four.jpg"
import five from "../images/partners/five.jpg"
import six from "../images/partners/six.jpg"
// import seven from "../images/partners/seven.jpg"
import eight from "../images/partners/eight.jpg"
import nine from "../images/partners/nine.jpg"
import ten from "../images/partners/ten.jpg"
// import eleven from "../images/partners/eleven.jpg"
import twelve from "../images/partners/twelve.jpg"
// import thirteen from "../images/partners/thirteen.jpg"
// import fouteen from "../images/partners/fouteen.jpg"
import fifteen from "../images/partners/fifteen.jpg"
import sixteen from "../images/partners/sixteen.jpg"
// import seventeen from "../images/partners/seveteen.jpg"
// import eighteen from "../images/partners/eighteen.jpg"
import ninteen from "../images/partners/ninteen.jpg"
import twenty from "../images/partners/twenty.jpg"

const Partners = () => {
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
    <h3 className='partner-head text-center pt-3' data-aos='fade-up'
    data-aos-duration='500' data-aos-once="false">Our <span className='country'>Partners</span></h3>
      <div class="container-fluid px-md-5 px-2 slider">
  <div class="slide-track">
    <div class="slide">
      <img className="imgi" src={one}alt="" />
    </div>
    {/* <div class="slide">
      <img className="imgi" src={two} alt="" />
    </div> */}
    {/* <div class="slide">
      <img className="imgi" src={three} alt="" />
    </div> */}
    <div class="slide">
      <img className="imgi" src={four} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={five} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={six} alt="" />
    </div>
    {/* <div class="slide">
      <img className="imgi" src={seven} alt="" />
    </div> */}
    <div class="slide">
      <img className="imgi" src={eight} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={nine} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={ten} alt="" />
    </div>
    {/* <div class="slide">
      <img className="imgi" src={eleven} alt="" />
    </div> */}
    <div class="slide">
      <img className="imgi" src={twelve} alt="" />
    </div>
    {/* <div class="slide">
      <img className="imgi" src={thirteen} alt="" />
    </div> */}
    {/* <div class="slide">
      <img className="imgi" src={fouteen} alt="" />
    </div> */}
    <div class="slide">
      <img className="imgi" src={fifteen} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={sixteen} alt="" />
    </div>
    {/* <div class="slide">
      <img className="imgi" src={seventeen} alt="" />
    </div> */}
    {/* <div class="slide">
      <img className="imgi" src={eighteen} alt="" />
    </div> */}
    <div class="slide">
      <img className="imgi" src={ninteen} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={twenty} alt="" />
    </div>
   
    <div class="slide">
      <img className="imgi" src={one} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={four} alt="" />
    </div>
   
    <div class="slide">
      <img className="imgi" src={five} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={eight} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={nine} alt="" />
    </div>
    <div class="slide">
      <img className="imgi" src={ten} alt="" />
    </div>
   
    
  </div>
</div>
    </>
  );
};

export default Partners;
