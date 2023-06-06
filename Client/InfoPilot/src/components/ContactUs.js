import React, {useRef} from "react";
import "./contact.css"
import emailjs from '@emailjs/browser';



export  default function ContactUs(){
  const form = useRef();

  const [formStatus, setFormStatus] = React.useState("Send");

  

  const sendEmail = (e) => {
    
    e.preventDefault();
    setFormStatus("Submitting...");
    emailjs.sendForm('service_jr581ol', 'template_lv3wcmt', form.current, 'Sd324sONnwcNeI8Uw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormStatus("Submitted");
     
  };

  return (

<>

<div style={{display:"flex"}}>
<div id="contact-info" >

<h1>How are you feeling today. <br/> Share your feedback or concerns with us.</h1>


</div>

<div className="container  border border-primary rounded  p-3" id="form-container">
      <h2 className="mb-3">Contact US</h2>


    <form ref={form} onSubmit={sendEmail}>
     <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" placeholder="Full names" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" placeholder="Email" required 
          pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'/>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="number">
            Phone
          </label>


<input className="form-control" type="tel" name="phone" placeholder="+1234567890" required
       pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
       title="Phone number must be in the format +1234567890"
        />



        </div>

        <div className="mb-3" >
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" placeholder="Message" required />
        </div>
        <button id="danger" type="submit">
          {formStatus}
        </button>
    </form>

    </div>
    </div>
    </>
  );
};
