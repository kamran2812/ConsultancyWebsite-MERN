


import React, { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import './austrailia.css';
import Pageheader from "./Pageheader"
import Partners from '../components/Partners';
import { useLocation } from 'react-router-dom';

import ukpng from "../images/uk.jpg"
import canstudy from "../images/swestudy.jpg"
import porstudy from "../images/porstudy.jpg"
import irestudy from "../images/irestudy.jpg"
import swestudy from "../images/canstudy.jpg"
// import hunstudy from "../images/hunstudy.jpg"
import ausstudy from "../images/ausstudy.jpg"

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
          <h3 className='why-choose-this text-center'>Why Choose <span className='country'>Hungary</span></h3>
          <p className='why-des text-center'>Hungary offers quality higher education programs with affordable tuition fees and low cost of living. Sweden is known for its innovative approach to education and research, as well as its strong commitment to sustainability. Portugal offers a warm and welcoming environment with a rich cultural heritage and diverse academic opportunities. Ireland provides a high standard of education and an English-speaking environment, making it a popular destination for international students. Canada and the UK offer world-class education systems and excellent post-study work opportunities.</p>
        </div>
      </div>
     </div> 

     <div className='container py-4'>
     <div class="row ">
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Affordable <span className='country'>Tuition Fees </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungarian universities offer high-quality education at a relatively affordable cost compared to other European countries.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Central Location <span className='country'> in Europe</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">Hungary is located in the heart of Europe, making it a convenient and accessible location for students who want to travel and explore other European countries.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Strong Academic <span className='country'>Programs </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungarian universities are renowned for their programs in fields such as medicine, engineering, and economics.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Cultural <span className='country'>Experiences  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungary has a rich and vibrant cultural scene, with numerous festivals, concerts, and exhibitions taking place throughout the year, providing students with a chance to experience the country's unique culture and traditions.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Scholarship <span className='country'>Opportunities </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">The Hungarian government offers a range of scholarships for international students, making it easier for them to finance their education.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">High Quality <span className='country'>of Life </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Hungary is known for its high standard of living, with low crime rates, excellent healthcare, and a relaxed lifestyle.</p>
        
      </div>
    </div>
  </div>
</div>
<div className='row  py-4'>
<h3 className='why-choose-this text-center'
data-aos='fade-up'
data-aos-duration='500' data-aos-once="false">Universities Of <span className='country'>Hungary</span></h3>
<p className='why-des  text-md-center'>Welcome to our Universities of Hungary page! As a travel agency specializing in study abroad, Royals Consultant is committed to providing our students with access to the best universities around the world. Hungary is a country that has a long history of higher education and is home to many world-renowned universities. We have partnerships with universities across Hungary, giving our students access to high-quality education, world-class facilities, and unique cultural experiences. Whether you're interested in arts, humanities, science, engineering, or business, Hungary has a university for you.</p>
<div className='col-12'>
  <p className='text-center countryy'>
  Some of the top universities we partner with include:
  </p>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>Central European University</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Szeged</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>Eötvös Loránd University</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Debrecen</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>University of Pécs</span></h6>
</div>
<p className='why-des  text-md-center'>
These universities consistently rank among the top in Hungary and Europe, with faculty and research programs that are recognized worldwide. As a student with our agency, you can be confident that you're receiving the highest quality education and support. Don't see the university you're interested in on our list? Don't worry! We work with many other universities across Hungary and can help you find the perfect fit for your academic goals. Ready to start your study abroad journey in Hungary? Contact us today to learn more about our programs and how we can help you achieve your dreams.
</p>


</div>
     </div>


     <div className='container-fluid'>
        <div className='row px-md-5 px-2 py-4 destination-container'>

        <h3 className='why-choose-this text-center' data-aos='fade-down'
            data-aos-duration='500' data-aos-once="false">OTHER <span className='country'>DESTINATIONS</span></h3>

            {/* cards  */}
          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={ukpng} class="card-img-top back png " alt="Study in UK"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">United Kingdom</h5>
    <p class="card-text des-dess mb-5">World-class universities, diverse range of courses, and career opportunities.</p>
    <Link to="/united-kindom"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={swestudy} class="card-img-top back png " alt="Study in Sweden"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Sweden</h5>
    <p class="card-text des-dess mb-5">High-quality education, innovative research, and sustainable lifestyle.</p>
    <Link to="/sweden"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>
  </div>
</div>
          </div>

          {/* <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={hunstudy} class="card-img-top back png " alt="Study in Hungary"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Hungary</h5>
    <p class="card-text des-dess mb-5">Affordable tuition fees, historical and cultural heritage, and vibrant student life.</p>
    <Link to="/hungary"  type="button" class="btn btn-outline-dark bot-btn  ">Read More</Link>
  </div>
</div>
          </div> */}

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={irestudy} class="card-img-top back png " alt="Study in Ireland"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Ireland</h5>
    <p class="card-text des-dess mb-5">Strong focus on research and innovation, excellent career prospects, and friendly environment.</p>
    <Link to="/ireland"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={porstudy} class="card-img-top back png " alt="Study in Portugal"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Portugal</h5>
    <p class="card-text des-dess mb-5">Affordable tuition fees, mild climate, and quality education in areas such as engineering and business.</p>
    <Link to="/Portugal"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={canstudy} class="card-img-top back png " alt="Study in Canada"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Canada</h5>
    <p class="card-text des-dess mb-5">High standard of education, multicultural society, and welcoming environment for international students.</p>
    <Link to="/canada"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={ausstudy} class="card-img-top back png " alt="Study in Austrailia"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Austrailia</h5>
    <p class="card-text des-dess mb-5">Top-ranked universities, vibrant campus life, and opportunities for internships and work experience.</p>
    <Link to="/austrailia"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

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

