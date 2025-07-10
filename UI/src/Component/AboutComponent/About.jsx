import './About.css'


function About() {
  return (
    <>
     
    <main className="main">
     <section id="about" className="about section">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
        <p className="subtitle">Let me introduce myself...</p>
        
      </div>
       <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
           <img src="assets/img/about.jpg" className="img-fluid" alt="" /> 
          </div>   
          <div className="col-lg-8 content">
             <div class="text-container first">
                        <h2>Hi there I'm Arpita,</h2>
                         <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch.</p> 
                        <p></p>
                    </div>
             <div className="row">
              <div className="col-lg-6">
                <br />
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 Mar 2002</span></li>
                 
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 799 934 3606</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <br />
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>arpitaseth192@gmail.com</span></li>
                  
                </ul>
              </div>
            </div> 
            <br />
            <div class="text-container">
                            <h2>Why Work With Us?</h2>
                            <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well.</p>
                           
                       
                        </div>
            
          </div>
        </div>

      </div>

    </section>
</main>



   
    </>
  )
}

export default About;
