import React, { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import './austrailia.css';
import Pageheader from "./Pageheader"
import Partners from '../components/Partners';
import { useLocation } from 'react-router-dom';


import ukpng from "../images/uk.jpg"
// import canstudy from "../images/swestudy.jpg"
import porstudy from "../images/porstudy.jpg"
import irestudy from "../images/irestudy.jpg"
import swestudy from "../images/canstudy.jpg"
import hunstudy from "../images/hunstudy.jpg"
import ausstudy from "../images/ausstudy.jpg"


const Canada = ({ setProgress }) => {


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
                <h3 className='why-choose-this text-center'>
                  Why Choose <span className='country'>Canada</span>
                </h3>
                <p className='why-des text-center'>
                  Canada is one of the top study destinations for international
                  students, offering world-class education, excellent
                  post-graduation job prospects, and a welcoming and
                  multicultural society. Canadian universities provide a wide
                  range of programs in various fields, including engineering,
                  medicine, business, social sciences, and humanities. Canada's
                  education system is known for its high standards, quality
                  research, and practical learning opportunities. The country
                  is also known for its natural beauty, vibrant cities, and
                  friendly people. Graduates from Canadian universities are
                  highly regarded by employers, both in Canada and around the
                  world. Canada also offers various post-study work visa options
                  for international students.
                </p>
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
        <p class="card-text text-des">Canada is home to many excellent universities and colleges with world-class academic programs.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Welcoming <span className='country'>Culture</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">Canada is known for its friendly and inclusive culture, making it an ideal place for international students to study.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Post-Study <span className='country'>Work Opportunities </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Canada offers a range of post-graduation work permit options, making it easier for international students to stay and work in Canada after graduation.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Work <span className='country'>opportunities  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Students are allowed to work up to 20 hours per week during the academic year and full-time during vacations, giving them a chance to earn extra income and gain work experience.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Affordable <span className='country'>tuition fees </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Tuition fees in Canada are generally more affordable compared to other popular study abroad destinations like the USA or the UK.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Beautiful natural <span className='country'>scenery </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Canada is home to stunning natural scenery, including mountains, lakes, and forests.</p>
        
      </div>
    </div>
  </div>
</div>
<div className='row  py-4'>
<h3 className='why-choose-this text-center'
data-aos='fade-up'
data-aos-duration='500' data-aos-once="false">Universities Of <span className='country'>Canada</span></h3>
<p className='why-des  text-md-center'>Welcome to our Universities of Canada page! As a leading travel agency specializing in study abroad programs, we're proud to offer our students the opportunity to pursue their education at some of the finest universities in Canada. With over 100 universities across the country, Canada boasts a world-renowned higher education system that attracts students from all corners of the globe. At Royals Consultant, we have partnerships with universities across Canada, from the vibrant city of Toronto to the scenic beauty of Vancouver. Whether you're interested in studying business, engineering, sciences, or arts, we can help you find the perfect program to match your interests and career goals.</p>
<div className='col-12'>
  <p className='text-center countryy'>
  Some of the top universities we partner with include:
  </p>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Toronto</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>University of British Columbia</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>McGill University</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>University of Alberta</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>University of Waterloo</span></h6>
</div>
<p className='why-des  text-md-center'>
These universities consistently rank among the top in Canada and the world, offering world-class facilities, distinguished faculty, and research opportunities. As a student with our agency, you can be confident that you're receiving the highest quality education and support. Don't see the university you're interested in on our list? Don't worry! We work with many other universities across Canada and can help you find the perfect fit for your academic goals. Ready to start your study abroad journey in Canada? Contact us today to learn more about our programs and how we can help you achieve your dreams.
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
        

          {/* <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={canstudy} class="card-img-top back png " alt="Study in Canada"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Canada</h5>
    <p class="card-text des-dess mb-5">High standard of education, multicultural society, and welcoming environment for international students.</p>
    <Link to="/canada"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>

  </div>
</div>
          </div> */}
        

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

export default Canada;

