import React, { useEffect,useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ImageSlider from './slider';
 import Partners from './Partners';
import './Home.css';
// images 
import ukpng from "../images/uk.jpg"
import whyimage from "../images/whyimage1.jpeg"


import ukwork from "../images/ukwork.jpg"
import hungarywork from "../images/hungarywork.jpg"
import slovakiawork from "../images/slovakiawork.jpg"
import portugalwork from "../images/portugalwork.jpg"



import canstudy from "../images/swestudy.jpg"
import porstudy from "../images/porstudy.jpg"
import irestudy from "../images/irestudy.jpg"
import swestudy from "../images/canstudy.jpg"
import hunstudy from "../images/hunstudy.jpg"
import ausstudy from "../images/ausstudy.jpg"




// partner start
// import one from "../images/partners/one.png"
// import two from "../images/partners/two.jpg"
// import three from "../images/partners/three.jpg"
// import four from "../images/partners/four.jpg"
// import five from "../images/partners/five.jpg"
// import six from "../images/partners/six.jpg"
// import seven from "../images/partners/seven.jpg"
// import eight from "../images/partners/eight.jpg"
// import nine from "../images/partners/nine.jpg"
// import ten from "../images/partners/ten.jpg"
// import eleven from "../images/partners/eleven.jpg"
// import twelve from "../images/partners/twelve.jpg"
// import thirteen from "../images/partners/thirteen.jpg"
// import fouteen from "../images/partners/fouteen.jpg"
// import fifteen from "../images/partners/fifteen.jpg"
// import sixteen from "../images/partners/sixteen.jpg"
// import seventeen from "../images/partners/seveteen.jpg"
// import eighteen from "../images/partners/eighteen.jpg"
// import ninteen from "../images/partners/ninteen.jpg"
// import twenty from "../images/partners/twenty.jpg"
// import twoone from "../images/partners/21.jpg"
// import twotwo from "../images/partners/22.jpg"
// import twothree from "../images/partners/23.jpg"
// import twofour from "../images/partners/24.jpg"
// import twofive from "../images/partners/25.jpg"
// import twosix from "../images/partners/26.jpg"
// import twoseven from "../images/partners/27.jpg"
// import twoeight from "../images/partners/28.jpg"
// import twonine from "../images/partners/29.jpg"
// import thirty from "../images/partners/thirty1.jpg"
// partner end
const Home = ({ setProgress }) => {


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
    <Helmet>
        <title>Royals Consultant</title>
      </Helmet>
      <ImageSlider />
      
      <div className='container my-md-0 py-md-0 main-containerr'>
        <div className='row py-3'>
          <div
            className='col-md-4 mb-md-0 mb-3 px-md-0'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-once="false"
          >
            <div className='card cardi card-one h-100'>
              <div className='card-body'>
                <h5 className='card-title text-light'>Overseas Education</h5>
                <p className='card-text text-light mb-5'>
                Discover a world of learning with us! Royals Consultant sends students on fantastical adventures across the globe to pursue their academic dreams. Join us and unlock the door to an enchanted world of knowledge and cultural exploration.
                </p>
                <Link to='/services'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className='col-md-4 mb-md-0 mb-3 px-md-0'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-once="false"
          >
            <div className='card cardi card-two h-100'>
              <div className='card-body'>
                <h5 className='card-title text-light'>
                  
                </h5>
                <p className='card-text text-light mb-5'>
                Step into a magical realm of opportunity with Royals Consultant! We send skilled workers on mystical journeys to exotic lands, where they can gain valuable experience and make lasting connections. Let us transport you to a realm of infinite possibilities!
                </p>
                <Link to='/services'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className='col-md-4 px-md-0'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-once="false"
          >
            <div className='card cardi card-three h-100'>
              <div className='card-body'>
                <h5 className='card-title text-light'>About Us</h5>
                <p className='card-text text-light mb-5'>
                Embark on an adventure with Royals Consultant! We transport students to study all over the world and offer work permits too! Join us on a magical journey to explore new horizons and ignite your passion for learning and growth. Let's create unforgettable memories together!
                </p>
                <Link to='/about'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>



<div className='container'>
<div className='row py-4'>



  <div className='col-md-5'
  data-aos='fade-right'
  data-aos-duration='1000'
  data-aos-once="false">
  <img src={whyimage} class="mt-0 my-0 py-0 why-logo h-100 w-100" alt="..." />
  </div>


  {/* <div className='col-md-2 col-0'></div> */}


  <div className='col-md-7 ps-4'>
    <h3 className='why-head pt-md-0 pt-2'data-aos='fade-down'
            data-aos-duration='500' data-aos-once="false">
      Why Royals <span className='country'>Consultant</span>
      </h3>
    <p className='why-des py-3' data-aos='fade-up'
            data-aos-duration='500' data-aos-once="false">The educational and work choices of an individual decide his or her future and success. It is considered to be one of the most important decisions that a person takes in the life. The world is progressing and changing by the minute with hundreds of prospects generating every instant. Keeping up with all this information in our already hectic lifestyle is very difficult. So, Royals Consultants are here for you to get the most suitable option for your future. We will take all of your pressure regarding your future and without any dishonesty and deception we will pursue your case with very best prices in Pakistan and we promise that our rates are very reasonable and your amount will be 100% secure with us. We believe in personal satisfaction and every individual who will be part of Royals Consultants must be fully satisfied through our sincere guidance. Our Work and study visa experts will handle your application with complete reliance and attentiveness with the help of Allah Almighty. Last but not the least, your privacy and documental security is our first responsibility and we will not disappoint you at any level. IN Shah Allah!</p>
  </div>
 
</div>
</div>




<div className='container-fluid study-container'>
        <div className='row px-md-5 px-2 py-4'>

        <h3 className='study-destination text-light' data-aos='fade-down'
            data-aos-duration='500' data-aos-once="false">Study <span className='country'>Destinations</span></h3>

          <p className='study-text text-light  pb-3' data-aos='fade-up'
            data-aos-duration='500' data-aos-once="false">Embark on a magical journey to pursue your academic dreams with Royals Consultant. Explore enchanting study destinations all over the world and unlock the door to a world of knowledge and adventure.</p>

            {/* cards  */}
          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={ukpng} class="card-img-top back png " alt="Study in UK"/>
  <div class="card-body">
    <h5 class="card-title des-title">United Kingdom</h5>
    <p class="card-text des-des mb-5">World-class universities, diverse range of courses, and career opportunities.</p>
    <Link to="/united-kindom"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={swestudy} class="card-img-top back png " alt="Study in Sweden"/>
  <div class="card-body">
    <h5 class="card-title des-title">Sweden</h5>
    <p class="card-text des-des mb-5">High-quality education, innovative research, and sustainable lifestyle.</p>
    <Link to="/sweden"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={hunstudy} class="card-img-top back png " alt="Study in Hungary"/>
  <div class="card-body">
    <h5 class="card-title des-title">Hungary</h5>
    <p class="card-text des-des mb-5">Affordable tuition fees, historical and cultural heritage, and vibrant student life.</p>
    <Link to="/hungary"  type="button" class="btn btn-outline-warning bot-btn  ">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={irestudy} class="card-img-top back png " alt="Study in Ireland"/>
  <div class="card-body">
    <h5 class="card-title des-title">Ireland</h5>
    <p class="card-text des-des mb-5">Strong focus on research and innovation, excellent career prospects, and friendly environment.</p>
    <Link to="/ireland"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={porstudy} class="card-img-top back png " alt="Study in Portugal"/>
  <div class="card-body">
    <h5 class="card-title des-title">Portugal</h5>
    <p class="card-text des-des mb-5">Affordable tuition fees, mild climate, and quality education in areas such as engineering and business.</p>
    <Link to="/Portugal"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={canstudy} class="card-img-top back png " alt="Study in Canada"/>
  <div class="card-body">
    <h5 class="card-title des-title">Canada</h5>
    <p class="card-text des-des mb-5">High standard of education, multicultural society, and welcoming environment for international students.</p>
    <Link to="/canada"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

          <div className='col-md-4 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={ausstudy} class="card-img-top back png " alt="Study in Austrailia"/>
  <div class="card-body">
    <h5 class="card-title des-title">Austrailia</h5>
    <p class="card-text des-des mb-5">Top-ranked universities, vibrant campus life, and opportunities for internships and work experience.</p>
    <Link to="/austrailia"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

        </div>

        {/* work  */}

        <div className='row px-md-5 px-2 py-4'>

        <h3 className='study-destination text-light' data-aos='fade-down'
            data-aos-duration='500' data-aos-once="false">Work <span className='country'>Destinations</span></h3>

          <p className='study-text text-light  pb-3' data-aos='fade-up'
            data-aos-duration='500' data-aos-once="false">Set sail on a fantastical voyage to your dream work destination with Royals Consultant. Discover opportunities to work and thrive in a world of wonder and excitement. Let us guide you to your happily ever after.</p>

            {/* cards  */}
          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={ukwork} class="card-img-top back png " alt="UK for work"/>
  <div class="card-body">
    <h5 class="card-title des-title">United Kingdom</h5>
    <p class="card-text des-des">High wages, multicultural society, strong economy, and job opportunities in a variety of fields such as finance, healthcare, and technology.</p>
    <Link to="/in-UK"  type="button" class="btn btn-outline-warning ">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={slovakiawork} class="card-img-top back png " alt="Slovakia for work"/>
  <div class="card-body">
    <h5 class="card-title des-title">Slovakia</h5>
    <p class="card-text des-des">Low cost of living, skilled workforce, and emerging opportunities in the automotive and technology industries.</p>
    <Link to="/in-slovakia"  type="button" class="btn btn-outline-warning bot-btn">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={hungarywork} class="card-img-top back png " alt="hungary for work"/>
  <div class="card-body">
    <h5 class="card-title des-title">Hungary</h5>
    <p class="card-text des-des">Low taxes, favorable business environment, and job opportunities in automotive, pharmaceutical, and technology sectors.</p>
    <Link to="/in-hungary"  type="button" class="btn btn-outline-warning bot-btn">Read More</Link>
  </div>
</div>
          </div>

          <div className='col-md-3 ' data-aos="flip-up"
            data-aos-once="false">
          <div class="card cardii h-100">
  <img src={portugalwork} class="card-img-top back png " alt="portugal for work"/>
  <div class="card-body">
    <h5 class="card-title des-title">Portugal</h5>
    <p class="card-text des-des ">Growing economy, low cost of living, and job opportunities in tourism, agriculture, and technology industries.</p>
    <Link to="/in-portugal"  type="button" class="btn btn-outline-warning bot-btn ">Read More</Link>

  </div>
</div>
          </div>
        

        </div>

      </div>
   


      <div className='container-fluid services-container'>
  <div className='row px-md-5 px-2 py-5'>
  <h3 className='service text-center' data-aos='fade-down'
            data-aos-duration='500' data-aos-once="false">Our <span className='country'>Services</span></h3>

          <p className='ser-text text-center pb-3' data-aos='fade-up'
            data-aos-duration='500' data-aos-once="false">We offer top-notch travel services to students and individuals seeking work opportunities worldwide. Our web services are designed to ensure a seamless booking experience for all our clients.</p>


    <div className='col-md-4 sample '
    data-aos='fade-right'
    data-aos-duration='1000'
    data-aos-once="false">

<i class="fa-solid fa-book-atlas ico py-3 text-center"></i>
      <h4 className='ser-title text-center '>Education <span className='country'>Counselling</span></h4>
      <p className='ser-des text-center pb-md-5'>Get expert advice on choosing the right course and university for your career goals.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
         </div>
    <div className='col-md-4 sample '
    data-aos='fade-up'
    data-aos-duration='1000'
    data-aos-once="false">
           
            <i class="fa-solid fa-person-digging ico py-3"></i>
      <h4 className='ser-title text-center'>Work Visa <span className='country'>Counselling</span></h4>
      <p className='ser-des text-center pb-md-5'>Learn about the requirements and process for obtaining a work visa for your desired destination.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
    </div>
    <div className='col-md-4 sample '
    data-aos='fade-left'
    data-aos-duration='1000'
    data-aos-once="false">
            <i class="fa-solid fa-earth-americas ico py-3"></i>
      <h4 className='ser-title text-center'>Visit Visa <span className='country'>Services</span></h4>
      <p className='ser-des text-center pb-md-5'>Get assistance with your visa application process and ensure a hassle-free travel experience.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
    </div>

    <div className='col-md-4 sample '
    data-aos='fade-right'
    data-aos-duration='1000'
    data-aos-once="false">
      <i class="fa-solid fa-arrow-pointer ico py-3"></i>
      <h4 className='ser-title text-center'>University <span className='country'>Selection</span></h4>
      <p className='ser-des text-center pb-md-5'>Find the best universities and courses that align with your career aspirations and academic background.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn '>
                  Read More
                </Link>
    </div>
    <div className='col-md-4 sample '
    data-aos='fade-up'
    data-aos-duration='1000'
    data-aos-once="false">
      <i class="fa-solid fa-clipboard-question  ico py-3"></i>
          
      <h4 className='ser-title text-center'>Interview <span className='country'>Preparation</span></h4>
      <p className='ser-des text-center pb-md-5'>Get expert guidance on how to prepare for interviews and increase your chances of getting selected.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn '>
                  Read More
                </Link>
    </div>
    <div className='col-md-4 sample '
    data-aos='fade-left'
    data-aos-duration='1000'
    data-aos-once="false">
     <i class="fa-solid fa-envelope ico py-3"></i>
     
      <h4 className='ser-title text-center'>Visa Application <span className='country'>Services</span></h4>
      <p className='ser-des text-center pb-md-5'>Let us handle your visa application process and ensure a smooth and hassle-free experience.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn '>
                  Read More
                </Link>
    </div>

    <div className='col-md-4 sample '
    data-aos='fade-right'
    data-aos-duration='1000'
    data-aos-once="false">
            <i class="fa-solid fa-hotel ico py-3"></i>
      <h4 className='ser-title text-center'>Accommodation <span className='country'>Services</span></h4>
      <p className='ser-des text-center pb-md-5'>Find the perfect accommodation that meets your needs and budget in your desired destination.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn '>
                  Read More
                </Link>
    </div>
    <div className='col-md-4 sample '
    data-aos='fade-up'
    data-aos-duration='1000'
    data-aos-once="false">
            <i class="fa-solid fa-suitcase-medical ico py-3"></i>
      <h4 className='ser-title text-center'>Health and <span className='country'>Travel Insurance</span></h4>
      <p className='ser-des text-center pb-md-5'>Ensure a worry-free travel experience with our comprehensive health and travel insurance coverage.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn '>
                  Read More
                </Link>
    </div>
    <div className='col-md-4 sample '
    data-aos='fade-left'
    data-aos-duration='1000'
    data-aos-once="false">
            <i class="fa-solid fa-users ico py-3"></i>
      <h4 className='ser-title text-center'>One-on-One <span className='country'>Counselling</span></h4>
      <p className='ser-des text-center pb-md-5'>Get personalized guidance and support from our experienced counselors throughout your journey.</p>
      <Link to='/services'  className='btn btn-outline-dark bot-btn'>
                  Read More
                </Link>
    </div>
  </div>
</div>
      

   {/* <div className='container'>
   <div className='row py-4'>
    <h3 className='partner-head text-center' data-aos='fade-up'
    data-aos-duration='500' data-aos-once="false">Our Partners</h3>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'>
   <img src={one} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." />
   </div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'>
   <img src={two} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." />
   </div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={three} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={four} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={five} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={six} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={seven} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={eight} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={nine} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={ten} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={eleven} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twelve} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={thirteen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={fouteen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={fifteen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={sixteen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={seventeen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={eighteen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={ninteen} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twenty} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twoone} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twotwo} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twothree} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twofour} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twofive} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twosix} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twoseven} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twoeight} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={twonine} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   <div className='col-xl-2 col-lg-3 col-sm-4  col-6   partner-image-card py-2'> <img src={thirty} class="mt-0 my-0 partner-image h-100 w-100 " alt="..." /></div>
   </div>
   </div> */}

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

export default Home;
