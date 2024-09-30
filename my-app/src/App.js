import React, { useEffect,useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';
// import Preloader from "./components/Preloader"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Footer from "./components/Footer"
import ContactForm from './components/contactForm';
import Errorpage from './components/Errorpage';
// import Header from './components/Header';

// work destinations start
import UK from "./workdestinations/UK"
import Slovakia from "./workdestinations/Slovakia"
import Hungary from "./workdestinations/Hungary"
import Portugal from "./workdestinations/Portugal"
// work destinations end

// study destinations start

import UKK from "./studyDestinations/UK"
import Sweden from "./studyDestinations/Sweden"
import Hungaryy from "./studyDestinations/Hungary"
import Ireland from "./studyDestinations/Ireland"
import Portugall from "./studyDestinations/Portugall"
import Canada from "./studyDestinations/Canada"
import Austrailia from "./studyDestinations/Austrailia"


// study destinations end
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  // const [progress, setProgress] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      disableMutationObserver: true // add this option
    });
    AOS.refresh(); // manually refresh animations
  }, []);



  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 80 });
  }, []);
  

  
  return (
  <>
  {/* <Preloader/> */}

   <BrowserRouter>
   {/* <Header/> */}
   <Navbar/>
   <LoadingBar
        color='#00459a'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

<Routes>  
    <Route exact path="/" element={<Home setProgress={setProgress} />} />
    <Route  path="/about" element={<About setProgress={setProgress} />} />
    <Route path="/services" element={<Services setProgress={setProgress}/>} />
    <Route path="/contact" element={<Contact setProgress={setProgress}/>} />
    <Route path="/FAQs" element={<FAQs setProgress={setProgress}/>} />

    {/* start work router  */}
    <Route path="/in-UK" element={<UK setProgress={setProgress}/>} />
    <Route path="/in-slovakia" element={<Slovakia setProgress={setProgress} />} />
    <Route path="/in-hungary" element={<Hungary setProgress={setProgress}/>} />
    <Route path="/in-portugal" element={<Portugal setProgress={setProgress}/>} />
    {/* start study router  */}
    <Route path="/united-kindom" element={<UKK setProgress={setProgress}/>} />
    <Route path="/sweden" element={<Sweden />} setProgress={setProgress}/>
    <Route path="/hungary" element={<Hungaryy setProgress={setProgress}/>} />
    <Route path="/ireland" element={<Ireland setProgress={setProgress}/>} />
    <Route path="/PorTugal" element={<Portugall setProgress={setProgress}/>} />
    <Route path="/canada" element={<Canada setProgress={setProgress} />} />
    <Route path="/austrailia" element={<Austrailia setProgress={setProgress}/>} />
    <Route path="*" element={<Errorpage/>}/> 
</Routes>
<ContactForm/>
<Footer/>
</BrowserRouter>
    </>
  );
}

export default App;
