import './Contact.css'
import { useState } from 'react';
import  axios from 'axios'
import { __userapiurl } from '../../API_URL';


function Contact() {
const [name ,setName]=useState();
const [email ,setEmail]=useState();
const [contact ,setContact]=useState();
const [message ,setMessage]=useState();
const [output ,setOutput]=useState();

const handleSubmit=()=>{
  const userDetails={"name":name,"email":email,"contact":contact,"message":message}
 // console.log(userDetails);

 axios.post(__userapiurl+'save',userDetails).then(()=>{
  setName("");
  setEmail("");
  setContact("")
  setMessage("");
  setOutput("We receive your information we'll connect you soon......")
 }).catch(()=>{
  setOutput("Try Again Something Went Wrong")
 })
  
}

  return (
    <>
     
  <main className="main">

    <section id="contact" class="contact section">   
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a href="">arpitaseth192@gmail.com</a></p>
      </div>


      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-5">

            <div class="info-wrap">
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Indore</p>
                </div>
              </div>

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 799 934 3606</p>
                </div>
              </div>

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>arpitaseth192@gmail.com</p>
                </div>
              </div>

              </div>
          </div>

          <div class="col-lg-7">
            <form  data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                
                  <input type="text" name="name" id="name-field" placeholder=' Name 'class="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div class="col-md-6">
                  
                  <input type="email" placeholder=' Email Address'class="form-control" name="email" id="email-field" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>

                <div class="col-md-12">
                  
                  <input type="text" placeholder='Contact '  class="form-control" name="subject" id="subject-field" value={contact}  onChange={(e)=>{setContact(e.target.value)}}/>
                </div>

                <div class="col-md-12">
             
                  <textarea class="form-control" placeholder='Tell me about the  project' name="message" rows="10" id="message-field" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>

                <div class="col-md-12 text-center">
                 <h5>{output}</h5>

                  <button type="button" className='btn w-50 btn-primary' onClick={handleSubmit}>Send </button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>
  {/* <h2>DEVELOPMENT SKILLS</h2>
                            <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks</p>
                            
                            <div class="icons-container">
                                <img src="/assets/img/details-icon-photoshop.png" alt="alternative"/>
                                <img src="/assets/img/details-icon-illustrator.png" alt="alternative"/>
                                <img src="/assets/img/details-icon-html.png" alt="alternative"/>
                                <img src="/assets/img/details-icon-css.png" alt="alternative"/>
                                <img src="/assets/img/details-icon-bootstrap.png" alt="alternative"/>
                                <img src="/assets/img/details-icon-javascript.png" alt="alternative"/>
                            </div>  */}
    </section>   
    </main>
    
     </>
  )
}

export default Contact;
