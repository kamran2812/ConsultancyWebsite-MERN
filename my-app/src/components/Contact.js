import React, { useEffect,useState, } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./contact.css"
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Pageheader from "../components/Pageheader"
const Contact = ({ setProgress }) => {


  // loader start
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setLocalProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (isLoading && progress < 100) {
        setLocalProgress(progress + 10);
        setProgress(progress + 10);
      }
    },0||10);
  
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
        <title>Contact | Royal Consultant</title>
      </Helmet>

    <Pageheader/>

    
    






<ul class="nav nav-tabs d-flex justify-content-center " id="myTab" role="tablist">
  <li class="nav-item ajeeb" role="presentation">
    <button class="nav-link active btn three" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">PK-Branch</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">UK-Branch</button>
  </li>
</ul>





<div className='container-fluid px-md-5 py-md-5 py-3'>
  <div className='row'>

                          <div className="col-12">
                          
                          <div className="tab-content">
  <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <div className="row my-1">
  <div className="col-12 ">
                      <div className="row">
                        <div className="col-md-4 col-12 my-md-0 my-2 ">
                          <div className="card card-one py-0 my-0 h-100"
                                data-aos='flip-up'
                                data-aos-duration='1000'
                                data-aos-once="false">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-phone-alt fa-lg mx-2 ic"></i>
                              <span className="card-title tit">Phone</span>
                              <p className="card-text py-1 my-1 ms-3 de">+92-316-79-49-505</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-md-0 my-2">
                        <div className="card card-two py-0 my-0 h-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-envelope fa-lg mx-2 ic"></i>
                              <span className="card-title tit">Email</span>
                              <p className="card-text py-1 my-1 ms-3 de">royalconsultant.inn@gmail.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-md-0 my-2">
                        <div className="card card-three py-0 my-0 h-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-address-card fa-lg mx-2 ic"></i>
                              <span className="card-title py-0 my-0 tit">Address</span>
                              <p className="card-text py-1 my-1 ms-3 de">Neelum commercial market, Plaza-147, DC Colony Dc Colony, Gujranwala, Punjab 52250</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                
  </div>
  
  </div>
 
  <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
  <div className="row my-1">
  <div className="col-12 ">
                      <div className="row">
                        <div className="col-md-4 col-12 my-md-0 my-2">
                          <div className="card card-one py-0 my-0 h-100"
                          data-aos='flip-up'
                          data-aos-duration='1000'
                          data-aos-once="false">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-phone-alt fa-lg mx-2 ic"></i>
                              <span className="card-title tit">Phone</span>
                              <p className="card-text py-1 my-1 ms-3 de">+44-7888-274660</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-md-0 my-2">
                        <div className="card card-two py-0 my-0 h-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-envelope fa-lg mx-2 ic"></i>
                              <span className="card-title tit">Email</span>
                              <p className="card-text py-1 my-1 ms-3 de ">royalconsultant.inn@gmail.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-12 my-md-0 my-2">
                        <div className="card card-three py-0 my-0 h-100"
                        data-aos='flip-up'
                        data-aos-duration='1000'
                        data-aos-once="false">
                            <div className="card-body py-2 my-0">
                            <i className="fas fa-address-card fa-lg ic mx-2"></i>
                              <span className="card-title py-0 my-0 tit">Address</span>
                              <p className="card-text py-1 my-1 ms-3 de">Charlotte Court, 47 Castle Road, Po53ay, Portsmouth, Uk</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                
  </div>

  </div>
</div>
</div>
</div>

                        </div>


                        <div className=" col-12 px-md-5 px-2 map-container py-md-4">
                        <h3 className='why-choose-this text-center pb-2'>OUR <span className='country'>Location</span></h3>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13500.13644456679!2d74.1665915!3d32.230248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29447aae6767%3A0x3bf95b5e35f72e13!2sRoyal%20Consultants!5e0!3m2!1sen!2s!4v1679397403270!5m2!1sen!2s
              "
              
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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

export default Contact
