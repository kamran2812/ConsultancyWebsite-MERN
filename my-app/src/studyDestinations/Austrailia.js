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
import hunstudy from "../images/hunstudy.jpg"
// import ausstudy from "../images/ausstudy.jpg"

const Austrailia = ({ setProgress }) => {


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
          <h3 className='why-choose-this text-center'
          data-aos='fade-down'
          data-aos-duration='500' data-aos-once="false">Why Choose <span className='country'>Austrailia</span></h3>
          <p className='why-des text-center '>Australia is an attractive study destination for international students due to its world-class education system, diverse and welcoming society, safe environment, excellent post-study work opportunities, and beautiful natural scenery. With highly ranked universities and a strong research focus, students can gain valuable skills and knowledge in their chosen field. Post-graduation, students can access a variety of work visa options and the opportunity to apply for permanent residency. Australia's welcoming environment and natural beauty make it an ideal place to study, live and explore. </p>
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
        <p class="card-text text-des">Australia is home to some of the best universities in the world, providing high-quality education and opportunities for students to pursue their dreams.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Diverse <span className='country'>Culture</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">Australia is a multicultural society that welcomes people from all over the world, providing a unique opportunity for international students to experience different cultures and customs</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Post-Study <span className='country'>Work Opportunities </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Australia offers post-study work visas for up to three years, providing international students with practical work experience and career prospects</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Safety and <span className='country'>Security  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Australia is known for its safe and secure environment, with low crime rates and strict laws to ensure the safety of its citizens and visitors.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Natural <span className='country'>Beauty </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Australia is famous for its stunning natural landscapes, including beaches, mountains, and national parks, providing a perfect backdrop for leisure activities and adventures.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Career <span className='country'>Prospects </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Australian qualifications are recognized globally, and the country offers a range of job opportunities in various fields, making it an excellent destination for international students seeking to launch their careers.</p>
        
      </div>
    </div>
  </div>
</div>
<div className='row  py-4'>
<h3 className='why-choose-this text-center'
data-aos='fade-up'
data-aos-duration='500' data-aos-once="false">Universities Of <span className='country'>Austrailia</span></h3>
<p className='why-des  text-md-center'>Welcome to our Universities of Australia page! We're proud to offer our students the opportunity to study at some of the best universities in the world. Australia has a thriving higher education system with over 40 universities, each offering unique programs and research opportunities. As a travel agency specializing in study abroad, we have partnerships with universities across Australia, giving our students access to top-notch education and life-changing experiences. Whether you're interested in business, engineering, arts, or sciences, Australia has a university for you. Our agency works with universities across the country, from big cities to small towns, to provide our students with the best possible study abroad experience.</p>
<div className='col-12'>
  <p className='text-center countryy'>
  Some of the top universities we partner with include:
  </p>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Melbourne</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>Australian National University</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Sydney</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>Monash University</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>University of Queensland</span></h6>
</div>
<p className='why-des  text-md-center'>
These universities consistently rank among the top in Australia and the world, offering world-class facilities, renowned faculty, and research opportunities. As a student with our agency, you can be confident that you're receiving the highest quality education and support. Don't see the university you're interested in on our list? Don't worry! We work with many other universities across Australia and can help you find the perfect fit for your academic goals. Ready to start your study abroad journey in Australia? Contact us today to learn more about our programs and how we can help you achieve your dreams.
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
        

          {/* <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={ausstudy} class="card-img-top back png " alt="Study in Austrailia"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Austrailia</h5>
    <p class="card-text des-dess mb-5">Top-ranked universities, vibrant campus life, and opportunities for internships and work experience.</p>
    <Link to="/austrailia"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

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

export default Austrailia;

