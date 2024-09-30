import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './faq.css';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Pageheader from "../components/Pageheader"
import { useState } from 'react';

const FAQs = ({ setProgress }) => {


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
  const [activeIndex, setActiveIndex] = useState(1);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    {progress === 100 ? (
    <>
      <Helmet>
        <title>FAQs | Royals Consultant</title>
      </Helmet>
      <Pageheader/>

      <h1 className='text-center faq-head py-3'>Frequently Asked <span className='country'>Questions </span></h1>
      <div className='faq-container my-3'>
      <div className={`faq ${activeIndex === 0 ? 'active' : ''}`}>
          <h3 className='faq-title'>What Royals Consultant offer?</h3>
          <p className='faq-text'>
          We offer all kinds of study and work visas, potential study plans for those who want to study abroad and all kinds of assistance regarding settlement abroad.
          </p>
          <button className='faq-toggle' onClick={() => handleClick(0)}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>

        <div className={`faq ${activeIndex === 1 ? 'active' : ''}`}>
          <h3 className='faq-title'>When will be the consultancy fee will be paid?</h3>
          <p className='faq-text'>
          Consultancy fee will be paid at the time of the application submission.
          </p>
          <button className='faq-toggle' onClick={() => handleClick(1)}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        

        <div className={`faq ${activeIndex === 2 ? 'active' : ''}`}>
          <h3 className='faq-title'>Is language proficiency necessary for a work permit?</h3>
          <p className='faq-text'>
          Royals Consultant offer such permits too in which language proficiency is not an issue.A person with no language proficiency can apply for a work visa.
          </p>
          <button className='faq-toggle' onClick={() => handleClick(2)}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        <div className={`faq ${activeIndex === 3 ? 'active' : ''}`}>
          <h3 className='faq-title'>Can one get help in writing a personal statement or letter of intent?</h3>
          <p className='faq-text'>
          Yes! Offcours, we offer our assistance in preparing all your documents.
          </p>
          <button className='faq-toggle' onClick={() => handleClick(3)}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        <div className={`faq ${activeIndex === 4 ? 'active' : ''}`}>
          <h3 className='faq-title'>What are the important documents i need to submit on my first meeting with Royals Consultant?</h3>
          <p className='faq-text'>
          You need to bring your CV, copy of educational documents (if you have),copy of passport and a copy of your ID card.
          </p>
          <button className='faq-toggle' onClick={() => handleClick(4)}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        <div className={`faq ${activeIndex === 5 ? 'active' : ''}`}>
          <h3 className='faq-title'>What Royals Consultant charge for student counselling?</h3>
          <p className='faq-text'>
          Royals Consultant do no charge for student's counselling.It is free of cost
          </p>
          <button className='faq-toggle' onClick={() => handleClick(5)}>
            <i className='fas fa-angle-down'></i>
          </button>
        </div>
        
      </div>
    </>
     ) : (
      <div className="loader">
<div className="spinner"></div>
</div>
    )}
    </>
  );
};

export default FAQs;
