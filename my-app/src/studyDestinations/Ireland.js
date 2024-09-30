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
// import irestudy from "../images/irestudy.jpg"
import swestudy from "../images/canstudy.jpg"
import hunstudy from "../images/hunstudy.jpg"
import ausstudy from "../images/ausstudy.jpg"

const Ireland = ({ setProgress }) => {


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
          <h3 className='why-choose-this text-center'>Why Choose <span className='country'>Ireland</span></h3>
          <p className='why-des text-center'>Ireland is a popular study destination for international students due to its high-quality education system, friendly and welcoming society, and vibrant culture. Irish universities are highly ranked, and offer a wide range of programs in fields such as business, engineering, science, humanities, and social sciences. International students can benefit from the country's beautiful landscapes, rich history, and lively cultural scene. Graduates from Irish universities are highly sought after by employers, both in Ireland and internationally. Additionally, Ireland provides excellent post-study work opportunities, making it an ideal destination for those seeking to launch their careers.</p>
        </div>
      </div>
     </div>

     <div className='container py-4'>
     <div class="row ">
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Quality <span className='country'>Education </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Ireland has a strong higher education system with many internationally recognized universities</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Welcoming <span className='country'>Culture</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">Irish people are known for their friendly and welcoming nature, making it easier for international students to feel at home.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Post-Study <span className='country'>Work Opportunities </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Students are allowed to work up to 20 hours per week during the academic year and full-time during vacations, giving them a chance to earn extra income and gain work experience.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Safety and <span className='country'>Security  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Ireland is known for its safe and secure environment, with low crime rates and strict laws to ensure the safety of its citizens and visitors.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">English-speaking <span className='country'>Country </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Ireland is an English-speaking country, making it easier for international students to study and communicate with locals.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Career <span className='country'>Prospects </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Ireland qualifications are recognized globally, and the country offers a range of job opportunities in various fields, making it an excellent destination for international students seeking to launch their careers.</p>
        
      </div>
    </div>
  </div>
</div>
<div className='row  py-4'>
<h3 className='why-choose-this text-center'
data-aos='fade-up'
data-aos-duration='500' data-aos-once="false">Universities Of <span className='country'>Ireland</span></h3>
<p className='why-des  text-md-center'>Welcome to our Universities of Ireland page! We're excited to offer our students the opportunity to study at some of the most prestigious universities in the world. Ireland has a rich academic history and is home to many world-class universities that offer diverse academic programs and research opportunities. As a travel agency specializing in study abroad, we have partnerships with universities across Ireland, giving our students access to top-notch education and a unique cultural experience.</p>
<div className='col-12'>
  <p className='text-center countryy'>
  Some of the top universities we partner with include:
  </p>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>Trinity College Dublin</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>University College Dublin</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University College Cork</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Limerick</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>Dublin City University</span></h6>
</div>
<p className='why-des  text-md-center'>
These universities are renowned for their academic excellence, cutting-edge research, and top-class facilities. As a student with our agency, you can rest assured that you'll receive the highest quality education and support. Don't see the university you're interested in on our list? Don't worry! We work with many other universities across Ireland and can help you find the perfect fit for your academic goals. Contact us today to learn more about our programs and how we can help you achieve your dreams of studying in Ireland.
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

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={hunstudy} class="card-img-top back png " alt="Study in Hungary"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Hungary</h5>
    <p class="card-text des-dess mb-5">Affordable tuition fees, historical and cultural heritage, and vibrant student life.</p>
    <Link to="/hungary"  type="button" class="btn btn-outline-dark bot-btn  ">Read More</Link>
  </div>
</div>
          </div>

          {/* <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={irestudy} class="card-img-top back png " alt="Study in Ireland"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Ireland</h5>
    <p class="card-text des-dess mb-5">Strong focus on research and innovation, excellent career prospects, and friendly environment.</p>
    <Link to="/ireland"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

  </div>
</div>
          </div> */}
        

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

export default Ireland;

