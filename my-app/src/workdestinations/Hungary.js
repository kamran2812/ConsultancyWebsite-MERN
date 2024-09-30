import React, { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import './main.css';
import Pageheader from "./Pageheader"
import Partners from '../components/Partners';
import { useLocation } from 'react-router-dom';

import ukwork from "../images/ukwork.jpg"
// import hungarywork from "../images/hungarywork.jpg"
import slovakiawork from "../images/slovakiawork.jpg"
import portugalwork from "../images/portugalwork.jpg"

const Hungary = ({ setProgress }) => {


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
          <h3 className='why-choose-this text-center'>Why Choose Royals Consultant for Your <span className='country'>Hungarian Work Permit</span></h3>
          <p className='why-des text-center'>Hungary is a beautiful country with a rich history and culture. If you're looking to work in Hungary, you'll need a work permit, and that's where Royals Consultant comes in. Our team of experts has years of experience in securing work permits for Hungary, and we know exactly what it takes to make the process as smooth and stress-free as possible. From filling out the paperwork to submitting your application, we'll be with you every step of the way. Choose Royals Consultant for your Hungarian work permit and let us help you start your new life in this beautiful country.</p>
        </div>
      </div>
     </div>

     <div className='container py-4'>
     <div class="row ">
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Low Cost <span className='country'>of Living  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungary has a relatively low cost of living compared to other European countries, making it an affordable destination for workers.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Booming <span className='country'>Economy</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">The Hungarian economy is growing rapidly, offering a range of job opportunities in various sectors.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Central <span className='country'>Location</span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungary is located in central Europe, making it a convenient location for workers to travel to other parts of Europe.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Beautiful <span className='country'>Scenery  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungary is known for its stunning landscapes, including the Danube River, Lake Balaton, and the Hortobágy National Park.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Rich <span className='country'>Culture </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungary has a rich history and culture, with a range of festivals and events throughout the year.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Delicious <span className='country'>Cuisine </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungarian cuisine is unique and delicious, offering a range of traditional dishes for workers to try.</p>
        
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

  {/* <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={hungarywork} class="card-img-top back png " alt="hungary for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">Hungary</h5>
<p class="card-text des-dess">Low taxes, favorable business environment, and job opportunities in automotive, pharmaceutical, and technology sectors.</p>
<Link to="/in-hungary"  type="button" class="btn btn-outline-dark bot-btnn ">Read More</Link>
</div>
</div>
  </div> */}

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

export default Hungary;

