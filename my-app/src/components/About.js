import React, { useEffect,useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./about.css"
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import whyimage from "../images/whyimage1.jpeg"
// import whyimage1 from "../images/whyimage.jpeg"
import about from "../images/aboutimage.jpg"
import ceo from "../images/ceo.jpg"
import Pageheader from "../components/Pageheader"
const About = ({ setProgress }) => {

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
        <title>About | Royals Consultant</title>
      </Helmet>

      <Pageheader/>


<div className='container '>
<div className='row py-4'>




  <div className='col-md-7 ps-4'>
    <h3 className='why-head pt-md-0 pt-2'>
     About <span className='country'>Us </span>
      </h3>
    <p className='why-des py-3'
    data-aos='fade-right'
    data-aos-duration='1000'
    data-aos-once="false">Royals consultant is an educational as well as work visa consultancy company. We are a UK and Pakistan based registered company and providing the best services in Pakistan and UK. Royals consultant are offering life changing opportunities to its customers and helping people in choosing, applying and get selected in their dream country for not only study purposes but for the settlement as well. We accommodate our clients with best services along with accommodation, File preparation, pre and post landing services as we are a one step solution for all the problem of the person who is willing to get educational and work visa in multiple countries. We promise you the best study and work plans specially in UK, Australia, Canada, Hungary, Ireland, Portugal, USA and Sweden. Moreover we offer the students a variety of institutions and courses from top ranked countries and always try to get them the best option for their future.</p>
  </div>

  <div className='col-md-5 order-md-last order-first'
>
  <img src={about} class="mt-0 my-0 py-0 why-logo h-100 w-100" alt="..." 
  data-aos='flip-down'
  data-aos-duration='1000'
  data-aos-once="false"/>
  </div>
 
</div>
</div>


<div className='container abii'>
<div className='row py-4'>



  <div className='col-md-5'
>
  <img src={whyimage} class="mt-0 my-0 py-0 why-logo h-100 w-100" alt="..." 
  data-aos='fade-right'
  data-aos-duration='1000'
  data-aos-once="false"/>
  </div>


  {/* <div className='col-md-2 col-0'></div> */}


  <div className='col-md-7 ps-4'>
    <h3 className='why-head pt-md-0 pt-2'
      data-aos='fade-down'
      data-aos-duration='1000'
      data-aos-once="false">
      Why Royals <span className='country'>consultant  </span>
      </h3>
    <p className='why-des py-3'
      data-aos='fade-left'
      data-aos-duration='1000'
      data-aos-once="false">The educational and work choices of an individual decide his or her future and success. It is considered to be one of the most important decisions that a person takes in the life. The world is progressing and changing by the minute with hundreds of prospects generating every instant. Keeping up with all this information in our already hectic lifestyle is very difficult. So, Royals consultant are here for you to get the most suitable option for your future. We will take all of your pressure regarding your future and without any dishonesty and deception we will pursue your case with very best prices in Pakistan and we promise that our rates are very reasonable and your amount will be 100% secure with us. We believe in personal satisfaction and every individual who will be part of Royals consultant must be fully satisfied through our sincere guidance. Our Work and study visa experts will handle your application with complete reliance and attentiveness with the help of Allah Almighty. Last but not the least, your privacy and documental security is our first responsibility and we will not disappoint you at any level. IN Shah Allah!</p>
  </div>
 
</div>
</div>





<div className='container'>
  <div className='row'>
    <div className='col-12 py-3'>
    <h3 className="abi">Expertise</h3>
      <p className='why-des'>Our team of experts has years of experience in the field of international education and work, and we have established partnerships with top universities and companies around the world. We have helped thousands of students and professionals achieve their dreams, and we are committed to providing the highest quality services to each and every one of our clients.</p>
    </div>
    <div className='col-12 py-3'>
    <h3 className="abi">Commitment</h3>
      <p className='why-des'>At Royals Consultant, we understand that our clients are our top priority. That's why we go above and beyond to ensure that each client receives personalized attention and support throughout their journey with us. We are committed to providing the highest level of customer service, and we pride ourselves on our reputation for excellence</p>
    </div>
    <div className='col-12 py-3'>
    <h3 className="abi">Vision</h3>
      <p className='why-des'>Our vision at Royals Consultant is to be a leading provider of international education and work opportunities, empowering individuals to achieve their full potential and make a positive impact on the world.</p>
    </div>
    <div className='col-12 py-3'>
    <h3 className="abi">Mission</h3>
      <p className='why-des'>Our mission at Royals Consultant is to provide our clients with the tools and resources they need to succeed in their chosen fields, while maintaining a commitment to excellence, integrity, and customer service.</p>
    </div>
    <div className='col-12 py-3'>
    <h3 className="abi">Core Values</h3>
      <p className='why-des'>At Royals Consultant, our core values include passion for education, integrity in all that we do, excellence in service, and a commitment to diversity and inclusivity.</p>
    </div>
   
    <div className='col-12 py-3'>
    <h3 className="abi">Call to Action</h3>
      <p className='why-des'>If you share our vision for international education and work opportunities, and are interested in learning more about how we can help you achieve your goals, contact us today to schedule a consultation with one of our experts.</p>
    </div>
  </div>
</div>


<div className='container'>
<div className='row py-4'>


<div className='col-md-5'
>
  <img src={ceo} class="mt-0 my-0 py-0 why-logo h-100 w-100" alt="..." 
  data-aos='fade-right'
  data-aos-duration='1000'
  data-aos-once="false"/>
  </div>

  <div className='col-md-7 ps-4'>
    <h3 className='why-head pt-md-0 pt-2'
      data-aos='fade-down'
      data-aos-duration='1000'
      data-aos-once="false">
      CEO <span className='country'>Message </span>
      </h3>
      <span>Dear Visitors</span>
    <p className='why-des pt-3'>I am Junaid Rehman, the CEO of Royals Consultant. We are a travel agency specializing in providing international education and work opportunities for students all over the world.</p>
    <p className='why-des pt-2'>We believe that education and work opportunities should be accessible to everyone, regardless of their location or background. That's why we have dedicated ourselves to helping students achieve their dreams of studying abroad, and professionals to secure work permits and employment opportunities overseas.</p>
    <p className='why-des pt-2'>Our team of experts has extensive experience in the field of international education and work, and we are committed to providing personalized attention and support to each and every one of our clients. We understand that studying or working abroad can be a challenging and intimidating process, which is why we strive to make it as easy and stress-free as possible.</p>
    <p className='why-des pt-2'>We are committed to delivering exceptional service and ensuring that our clients have the best possible experience. We are constantly improving and expanding our services to ensure that we are meeting the needs of our clients, and we are always looking for ways to innovate and stay ahead of the curve.</p>
    <p className='why-des pt-2'>If you are looking for international education or work opportunities, I invite you to explore our website and learn more about what we have to offer. Our team of experts is here to guide you every step of the way, and we look forward to helping you achieve your goals.</p>
    <p className='why-des pt-2'>Thank you for considering Royals Consultant as your partner in international education and work opportunities.</p>
    <p className='why-des  pt-2'>Sincerely,</p>
    <p className=' ceo pt-2'>Junaid Rehman , CEO of Royals Consultant</p>
  </div>

  
 
</div>
</div>

    </>
    ) : (
      <div className="loader">
<div className="spinner"></div>
</div>
    )}
    </>
    
  )
}

export default About
