import React, { useEffect,useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import "./service.css"
import image1 from "../images/image1.jpg"
import { useLocation } from 'react-router-dom';
import Pageheader from "../components/Pageheader"
const Services = ({ setProgress }) => {

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
        <title>Services | Royals Consultant</title>
      </Helmet>



      <Pageheader/>

      <section className="we-offer-area text-center bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2>What we <span>Offer</span></h2>
                        <h4 className='ser-title text-center'>Experience the world through our diverse range of study abroad programs, work permit services, internships, and cultural exchange opportunities</h4>
                    </div>
                </div>
            </div>
                <div className="row our-offer-items less-carousel">
                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item h-100 w-100"
                          data-aos='flip-up'
                          data-aos-duration='1000'
                          data-aos-once="false">
                        <i className="fa-solid fa-book-atlas ico py-3 text-center"></i>
      <h4 className='ser-title text-center '>Education Counselling</h4>
      <p className='ser-des text-center pb-md-5'>Get expert guidance on choosing the right academic path to achieve your career goals from Royals Consultant's experienced education counselors.</p>
                       
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item  h-100 w-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                           
                            <i className="fa-solid fa-person-digging ico py-3"></i>
      <h4 className='ser-title text-center'>Work Visa Counselling</h4>
      <p className='ser-des text-center pb-md-5'> Our team of visa experts will guide you through the complex process of obtaining a work visa and help you prepare for a successful career abroad.</p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item  h-100 w-100" data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-earth-americas ico py-3"></i>
      <h4 className='ser-title text-center'>Visit Visa Services</h4>
      <p className='ser-des text-center pb-md-5'>Experience seamless travel arrangements with our visit visa services, including visa application assistance and travel insurance.</p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item h-100 w-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-arrow-pointer ico py-3"></i>
      <h4 className='ser-title text-center'>University Selection</h4>
      <p className='ser-des text-center pb-md-5'>Choose the best university for your academic aspirations with Royals Consultant's personalized university selection service.</p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item h-100 w-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-clipboard-question  ico py-3"></i>
          
          <h4 className='ser-title text-center'>Interview Preparation</h4>
          <p className='ser-des text-center pb-md-5'>Ace your university or job interviews with our interview preparation service, which includes mock interviews and valuable tips and advice.</p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item h-100 w-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-envelope ico py-3"></i>
     
     <h4 className='ser-title text-center'>Visa Application Services</h4>
     <p className='ser-des text-center pb-md-5'>Royals Consultant will assist you in filling out your visa application and ensure that all necessary documents are in order, making the process stress-free.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item h-100 w-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-hotel ico py-3"></i>
      <h4 className='ser-title text-center'>Accommodation Services</h4>
      <p className='ser-des text-center pb-md-5'>Our team will help you find safe and comfortable accommodation, whether it's a homestay, dormitory or private rental, so you can focus on your studies or work.</p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height ">
                        <div className="item h-100 w-100 "
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-suitcase-medical ico py-3"></i>
      <h4 className='ser-title text-center'>Health & Travel Insurance</h4>
      <p className='ser-des text-center pb-md-5'>Stay protected during your travels with our comprehensive health and travel insurance coverage, tailored to your specific needs.</p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}

                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item h-100 w-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                        <i className="fa-solid fa-users ico py-3"></i>
      <h4 className='ser-title text-center'>One-on-One Counselling</h4>
      <p className='ser-des text-center pb-md-5'>Enjoy personalized attention and guidance with our one-on-one counseling services, where we will provide support and advice every step of the way towards your academic or career goals.</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    </section>
     









    </>
    ) : (
        <div className="loader">
  <div className="spinner"></div>
</div>
      )}
      </>
  )
}

export default Services
