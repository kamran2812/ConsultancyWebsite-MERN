import React, { useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Modal, Button } from 'react-bootstrap';

// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import "./contactForm.css"


const ContactForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [oneshowModal, onesetShowModal] = useState(false);
	const [twoshowModal, twosetShowModal] = useState(false);
	const [threeshowModal, threesetShowModal] = useState(false);



	// const navigate = useNavigate();
	const [user, setUser] = useState({
	  name: '',
	  email: '',
	  phone: '',
	  message: '',
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

	  emailjs.sendForm("service_vvjs25t","template_fdsxgg3", form.current, 'C8XLInD-grqdW8vPe')
	  .then((result) => {
		  console.log(result.text);
		  console.log("message sent")
	  }, (error) => {
		  console.log(error.text);
	  });
	  const { name, email, phone, message } = user;
  
	  
  
	  const res = await fetch('/register', {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify({
		  name,
		  email,
		  phone,
		  message,
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
		
	  } 
	  else {
		  threesetShowModal(true);
		setUser({
			name: '',
			email: '',
			phone: '',
			message: '',
		  });
	  }
	};









  return (
    <>

<Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please fill the required fields</Modal.Body>
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
        <Modal.Title>Error</Modal.Title>
    </Modal.Header>
    <Modal.Body>Phone number should be at least 9 digits long</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => twosetShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
{/* three  */}
<Modal show={threeshowModal} onHide={() => threesetShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Submitted</Modal.Title>
    </Modal.Header>
    <Modal.Body>Information has been submitted.</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => threesetShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>


     <div class="container-fluid contact ">
	<div class="row">
			<h1 className='text-center py-2'>Contact Us</h1>
	</div>
	<div class="row ">
			<h4 className='text-center'>We'd love to hear from you!</h4>
	</div>
    <form method='POST' ref={form} >
	<div class="row input-container py-0 my-0">
      
   
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" name='name' value={user.name} onChange={handleInputs} autocomplete="off" required />
					<label>Name<span class="required">*</span></label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" name="email" value={user.email} onChange={handleInputs} required/>
					<label>Email<span class="required">*</span></label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="number" name='phone' value={user.phone} onChange={handleInputs} autocomplete="off" required />
					<label>Phone Number<span class="required">*</span></label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name='message' value={user.message} onChange={handleInputs} autocomplete="off" ></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12 pb-3 mb-0 con-btn">
            <button type="submit" value="Sign Up" onClick={postData} class="btn btn-outline-warning btn-lg">Submit</button>
			</div>
	</div>
      </form>
</div>

    </>
  )
}

export default ContactForm
