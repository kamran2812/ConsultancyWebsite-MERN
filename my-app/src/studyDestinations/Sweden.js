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
// import swestudy from "../images/canstudy.jpg"
import hunstudy from "../images/hunstudy.jpg"
import ausstudy from "../images/ausstudy.jpg"

const Sweden = ({ setProgress }) => {


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
          <h3 className='why-choose-this text-center'>Why Choose <span className='country'>Sweden</span></h3>
          <p className='why-des text-center'>Sweden is a great study destination with a unique approach to education, emphasizing critical thinking, creativity, and sustainability. Portugal provides a high-quality education system with a rich history, culture, and language. Ireland is known for its friendly and welcoming society, top-ranked universities, and excellent job opportunities. Canada offers a world-class education system with a diverse and multicultural society, and strong support for international students. The UK is home to some of the world's most renowned universities, with a rich history of academic excellence and a wide range of programs to choose from.</p>
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
        <p class="card-text text-des">Sweden is home to some of the best universities in the world, with many programs taught in English.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Sustainable <span className='country'>Living</span></h4>
        <hr className='line'></hr>
        <p class="card-text text-des">Sweden is known for its commitment to sustainability, with many universities focusing on environmental issues and sustainable development.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Innovative <span className='country'>Technology Opportunities </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Sweden is a hub for innovative technology and research, with many opportunities for students to gain hands-on experience in cutting-edge fields.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Work <span className='country'>Opportunities  </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Students are allowed to work up to 20 hours per week during the academic year and full-time during vacations, giving them a chance to earn extra income and gain work experience.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Natural <span className='country'>Beauty </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Sweden is home to beautiful forests, lakes, and mountains, making it an ideal destination for outdoor enthusiasts.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4 py-2" data-aos="flip-up"
            data-aos-once="false">
    <div class="card h-100 des-cards">
      <div class="card-body">
        <h4 class="card-title text-light">Safe and <span className='country'>Egalitarian Society </span></h4>    <hr className='line'></hr>
        <p class="card-text text-des">Sweden is known for its safety and equality, making it an ideal destination for international students.</p>
        
      </div>
    </div>
  </div>
</div>
<div className='row  py-4'>
<h3 className='why-choose-this text-center'
data-aos='fade-up'
data-aos-duration='500' data-aos-once="false">Universities Of <span className='country'>Sweden</span></h3>
<p className='why-des  text-md-center'>Welcome to our Universities of Sweden page! Sweden is known for its world-class higher education system, with over 70 universities and university colleges. Our travel agency, Royals Consultant, is proud to have partnerships with universities across Sweden, giving our students access to a range of top-notch programs and research opportunities. Whether you're interested in business, engineering, arts, or sciences, Sweden has a university for you. </p>
<div className='col-12'>
  <p className='text-center countryy'>
  Some of the top universities we partner with include:
  </p>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>Lund University</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>Uppsala University</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>Karolinska Institutet</span></h6>
</div>
<div className='col-md-2 text-center'>
<h6> <span className='countryy'>Stockholm University</span></h6>
</div>
<div className='col-md-3 text-center'>
<h6> <span className='countryy'>Royal Institute of Technology</span></h6>
</div>
<p className='why-des  text-md-center'>
These universities consistently rank among the top in Sweden and the world, offering world-class facilities, renowned faculty, and research opportunities. As a student with our agency, you can be confident that you're receiving the highest quality education and support. Don't see the university you're interested in on our list? Don't worry! We work with many other universities across Sweden and can help you find the perfect fit for your academic goals. Contact us today to learn more about our programs and how we can help you achieve your dreams.
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

          {/* <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={swestudy} class="card-img-top back png " alt="Study in Sweden"/>
  <div class="card-body">
    <h5 class="card-title des-titlee">Sweden</h5>
    <p class="card-text des-dess mb-5">High-quality education, innovative research, and sustainable lifestyle.</p>
    <Link to="/sweden"  type="button" class="btn btn-outline-dark bot-btn ">Read More</Link>
  </div>
</div>
          </div> */}

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

export default Sweden;

