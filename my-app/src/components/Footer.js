import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Modal, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import logo from "../images/logo.png"
const Footer = () => {
	const [showModal, setShowModal] = useState(false);
	const [oneshowModal, onesetShowModal] = useState(false);
    const [twoshowModal, twosetShowModal] = useState(false);
    const [threeshowModal, threesetShowModal] = useState(false);

// const navigate = useNavigate();
const [user, setUser] = useState({
    email: '',
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const form = useRef();
  const postData = async (e) => {
    e.preventDefault();

    emailjs.sendForm("service_vvjs25t","template_cxvi1dp", form.current, 'C8XLInD-grqdW8vPe')
	  .then((result) => {
		  console.log(result.text);
		  console.log("message sent")
	  }, (error) => {
		  console.log(error.text);
	  });
    const { email, } = user;

    

    const res = await fetch('/subscribe', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
        setShowModal(true);
    }
    else if(res.status === 404 || !data){
          onesetShowModal(true);
          
        }else if(res.status === 423 || !data){
        twosetShowModal(true);
        setUser({
            email: '',
        });
    } 
    else {
        threesetShowModal(true);
      setUser({
          email: '',
        });
    }
  };



  return (
    <>

<Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please enter your email</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
{/* one  */}
<Modal show={oneshowModal} onHide={() => onesetShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
    </Modal.Header>
    <Modal.Body>Invalid email format</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => onesetShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
{/* two */}
<Modal show={twoshowModal} onHide={() => twosetShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>You are already subscribed</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => twosetShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
<Modal show={threeshowModal} onHide={() => threesetShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Congratulations</Modal.Title>
    </Modal.Header>
    <Modal.Body>Thank you for subscribing to our newsletter</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => threesetShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>



      <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-5 col-md-6 mb-30">
                        <div class="single-cta h-100">
                        <i className="fas fa-address-card"></i>
                            <div class="cta-text">
                                <h4>Address</h4>
                                <span>Charlotte Court, 47 Castle Road, Po53ay, Portsmouth, Uk</span><br/>
                                <span className='adress'>Neelum commercial market, Plaza-147, DC Colony, Gujranwala, PK</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-2 mb-30">
                        <div class="single-cta h-100">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+44-7888-274660</span><br/>
                                <span>+92-316-79-49-505</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta h-100">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>royalconsultant.inn@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={logo} class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>Embark on a journey of knowledge and adventure with Royals Consultant! Discover new cultures, pursue your studies, and explore exciting career opportunities across the globe. Let us take you on a magical voyage of self-discovery and growth.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="https://www.facebook.com/profile.php?id=100086994104343&mibextid=ZbWKwL"target="_blank" rel="noopener"><i class="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to="https://instagram.com/consultantroyal?igshid=ZDdkNTZiNTM="  target="_blank" rel="noopener"><i class="fab fa-instagram instagram-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/FAQs">FAQs</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form method='POST' ref={form}>
                                    <input type="text" name='email' value={user.email} onChange={handleInputs} autocomplete="off" placeholder="Email Address"/>
                                    <button type='submit' value="Sign Up" onClick={postData}><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                <div class="col-xl-6 col-lg-6 offset-lg-3 text-center text-lg-left">
    <div className="copyright-text">
        <p>Copyright &copy; {new Date().getFullYear()},</p>
    </div>
</div> 

                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
