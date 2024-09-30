import React, { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import './main.css';
import Pageheader from "./Pageheader"
import Partners from '../components/Partners';
import { useLocation } from 'react-router-dom';

// import ukwork from "../images/ukwork.jpg"
import hungarywork from "../images/hungarywork.jpg"
import slovakiawork from "../images/slovakiawork.jpg"
import portugalwork from "../images/portugalwork.jpg"

const UK = ({ setProgress }) => {


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
          <h3 className='why-choose-this text-center'>Why Choose Royals Consultant for Your <span className='country'> UK Work Permit</span></h3>
          <p className='why-des text-center'>At Royals Consultant, we understand that securing a work permit for the UK can be a complex and daunting process. That's why we're here to help. With years of experience in the industry, we have the knowledge and expertise to guide you through every step of the way. From initial application to final approval, we'll be with you every step of the way, ensuring that your experience is as smooth and stress-free as possible. Choose Royals Consultant for your UK work permit and let us help you achieve your dreams.</p>
        </div>
      </div>
     </div>

     <div className='container py-4'>
     <div class="row ">
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">High Standard <span className='country'>of Living </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">The UK offers a high standard of living, with excellent healthcare and education systems.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Diverse Job <span className='country'>Opportunities</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">There are a wide range of job opportunities available in various sectors, providing workers with diverse career options.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Good work-life balance <span className='country'>Balance</span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">UK employers are required to provide a minimum of 28 days paid annual leave, offering workers a good work-life balance.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Language <span className='country'>Advantage</span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">English is the primary language in the UK, providing non-native speakers with the opportunity to improve their language skills.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Cultural <span className='country'>Experiences </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">The UK is rich in history and culture, offering workers a chance to explore museums, art galleries, and other cultural attractions.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Easy <span className='country'>Travel </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">The UK is well-connected to other European countries, making it easy for workers to travel and explore other parts of Europe.</p>
        
      </div>
    </div>
  </div>
</div>

     </div>

     <div className='container-fluid '>
     <div className='row px-md-5 px-2 py-4 destination-container'>
     <h3 className='why-choose-this text-center'>Other <span className='country'>Destinations</span></h3>

    {/* cards  */}
  {/* <div className='col-md-4 ' data-aos="flip-up"
    data-aos-once="false">
  <div class="card cardii h-100">
<img src={ukwork} class="card-img-top back png " alt="UK for work"/>
<div class="card-body">
<h5 class="card-title des-titlee">United Kingdom</h5>
<p class="card-text des-dess">High wages, multicultural society, strong economy, and job opportunities in a variety of fields such as finance, healthcare, and technology.</p>
<Link to="/in-UK"  type="button" class="btn btn-outline-dark bot-btnn ">Read More</Link>
</div>
</div>
  </div> */}

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

export default UK;

