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
// import slovakiawork from "../images/slovakiawork.jpg"
import portugalwork from "../images/portugalwork.jpg"

const Slovakia = ({ setProgress }) => {


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
          <h3 className='why-choose-this text-center'>Why Choose Royals Consultant for Your <span className='country'>Slovakian Work Permit</span></h3>
          <p className='why-des text-center'>Slovakia is a country with a rich history and a bright future. If you're looking to work in Slovakia, you'll need a work permit, and that's where Royals Consultant comes in. Our team of experts has years of experience in securing work permits for Slovakia, and we know exactly what it takes to make the process as smooth and stress-free as possible. From initial consultation to final approval, we'll be with you every step of the way, ensuring that your experience is as seamless as possible. Choose Royals Consultant for your Slovakian work permit and let us help you start your new life in this beautiful country.</p>
        </div>
      </div>
     </div>

     <div className='container py-4'>
     <div class="row ">
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Affordable Living <span className='country'>Cost </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Slovakia offers a high quality of life at a low cost, making it an affordable destination for students and workers alike.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Diverse <span className='country'>Culture</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">With its diverse mix of cultures, languages, and traditions, Slovakia offers a unique cultural experience for visitors.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Stunning Natural <span className='country'>Beauty</span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">From the Tatra Mountains to the Danube River, Slovakia's natural landscapes offer breathtaking scenery and outdoor adventure opportunities.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Growing Economy and <span className='country'>Job Opportunities  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Slovakia's economy has been rapidly growing, creating numerous job opportunities for skilled workers in various industries.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Access to Other <span className='country'>European Countries </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Slovakia's central location and transportation infrastructure make it easy to travel to other European destinations.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Welcoming and <span className='country'>Friendly Locals </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">UK qualifications are recognized globally, and the country offers a range of job opportunities in various fields, making it an excellent destination for international students seeking to launch their careers.</p>
        
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

  {/* <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={slovakiawork} class="card-img-top back png " alt="Slovakia for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">Slovakia</h5>
<p class="card-text des-dess">Low cost of living, skilled workforce, and emerging opportunities in the automotive and technology industries.</p>
<Link to="/in-slovakia"  type="button" class="btn btn-outline-dark bot-btnn ">Read More</Link>
</div>
</div>
  </div> */}

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

  <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={portugalwork} class="card-img-top back png " alt="portugal for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">Portugal</h5>
<p class="card-text des-dess ">Growing economy, low cost of living, and job opportunities in tourism, agriculture, and technology industries.</p>
<Link to="/in-portugal"  type="button" class="btn btn-outline-dark bot-btnn  ">Read More</Link>

</div>
</div>
  </div>


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

export default Slovakia;

