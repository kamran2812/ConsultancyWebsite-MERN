import React, { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import './main.css';
// import ukpng from "../images/uk.jpg"
import Pageheader from "./Pageheader"
import Partners from '../components/Partners';
import { useLocation } from 'react-router-dom';

import ukwork from "../images/ukwork.jpg"
import hungarywork from "../images/hungarywork.jpg"
import slovakiawork from "../images/slovakiawork.jpg"
// import portugalwork from "../images/portugalwork.jpg"

const Portugal = ({ setProgress }) => {


  // loader start
const [isLoading, setIsLoading] = useState(true);
const [progress, setLocalProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    if (isLoading && progress < 100) {
      setLocalProgress(progress + 10);
      setProgress(progress + 10);
    }
  }, 0||10);

  return () => clearInterval(timer);
}, [isLoading, progress, setProgress]);

const onLoaderFinished = () => {
  setIsLoading(false);
  setLocalProgress(0);
  setProgress(0);
};

// loader end


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      disableMutationObserver: true // add this option
    });
    AOS.refresh(); // manually refresh animations
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    {progress === 100 ? (
    <>
<Pageheader/>


<div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='why-choose-this text-center'>Why Choose Royals Consultant for Your <span className='country'>Portuguese Work Permit</span></h3>
          <p className='why-des text-center'>Portugal is a stunning country with a warm and welcoming culture. If you're looking to work in Portugal, you'll need a work permit, and that's where Royals Consultant comes in. Our team of experts has years of experience in securing work permits for Portugal, and we know exactly what it takes to make the process as smooth and stress-free as possible. From initial consultation to final approval, we'll be with you every step of the way, ensuring that your experience is as seamless as possible. Choose Royals Consultant for your Portuguese work permit and let us help you achieve your dreams.</p>
        </div>
      </div>
     </div>

     <div className='container py-4'>
     <div class="row ">
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Sunny <span className='country'>Weather </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Portugal has a warm and sunny climate throughout the year, making it an ideal destination for those who enjoy outdoor activities.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Affordable <span className='country'>Living</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">Portugal has a low cost of living compared to other European countries, offering workers an affordable lifestyle.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Growing <span className='country'>Economy</span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Portugal's economy is growing rapidly, providing workers with a range of job opportunities.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Beautiful <span className='country'>Beaches  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Portugal is known for its beautiful beaches, providing workers with plenty of opportunities to relax and enjoy the sea.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Rich <span className='country'>Culture </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Portugal has a rich history and culture, with a range of museums, art galleries, and other cultural attractions.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Delicious <span className='country'>Cuisine </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Portuguese cuisine is diverse and delicious, offering a range of seafood dishes and traditional recipes.</p>
        
      </div>
    </div>
  </div>
</div>

     </div>

     <div className='container-fluid '>
     <div className='row px-md-5 px-2 py-4 destination-container'>
     <h3 className='why-choose-this text-center'>Other <span className='country'>Destinations</span></h3>

    {/* cards  */}
  <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={ukwork} class="card-img-top back png " alt="UK for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">United Kingdom</h5>
<p class="card-text des-dess">High wages, multicultural society, strong economy, and job opportunities in a variety of fields such as finance, healthcare, and technology.</p>
<Link to="/in-UK"  type="button" class="btn btn-outline-dark bot-btnn ">Read More</Link>
</div>
</div>
  </div>

  <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={slovakiawork} class="card-img-top back png " alt="Slovakia for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">Slovakia</h5>
<p class="card-text des-dess">Low cost of living, skilled workforce, and emerging opportunities in the automotive and technology industries.</p>
<Link to="/in-slovakia"  type="button" class="btn btn-outline-dark bot-btnn ">Read More</Link>
</div>
</div>
  </div>

  <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={hungarywork} class="card-img-top back png " alt="hungary for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">Hungary</h5>
<p class="card-text des-dess">Low taxes, favorable business environment, and job opportunities in automotive, pharmaceutical, and technology sectors.</p>
<Link to="/in-hungary"  type="button" class="btn btn-outline-dark bot-btnn ">Read More</Link>
</div>
</div>
  </div>

  {/* <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={portugalwork} class="card-img-top back png " alt="portugal for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">Portugal</h5>
<p class="card-text des-dess ">Growing economy, low cost of living, and job opportunities in tourism, agriculture, and technology industries.</p>
<Link to="/in-portugal"  type="button" class="btn btn-outline-dark bot-btnn  ">Read More</Link>

</div>
</div>
  </div> */}


</div>
      


     </div>

     <Partners/>
    </>
    ) : (
      <div className="loader">
<div className="spinner"></div>
</div>
    )}
    </>
  );
};

export default Portugal;

