import './Service.css'


function Service() {
  return (
    <>
       <main className="main">

    {/* Services Section */}
    <section id="services" class="services section">

      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Web design and development have been my bread and butter . During my internship time I've discovered that I can help startups and companies with the following services.</p>
      </div>{/* End Section Title */}

      <div class="container">

        <div class="row gy-4">

       <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
  <div class="icon flex-shrink-0"><i class="bi bi-lightbulb"></i></div>
  <div>
    <h4 class="title">Innovative Solution Design</h4>
    <p class="description">
      I craft tailored tech solutions that align with your vision and goals, blending creativity with practicality to solve complex challenges and drive meaningful impact.
    </p>
  </div>
</div>

          {/* End Service Item */}

         <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
  <div class="icon flex-shrink-0"><i class="bi bi-bug"></i></div>
  <div>
    <h4 class="title">Code Optimization & Debugging</h4>
    <p class="description">
      I improve existing codebases by identifying bugs, optimizing performance, and enhancing reliability. My goal is to make your applications run smoother, faster, and error-free.
    </p>
  </div>
</div>
{/* End Service Item */}

        <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
  <div class="icon flex-shrink-0"><i class="bi bi-code-slash"></i></div>
  <div>
    <h4 class="title">
      MERN Stack Development
    </h4>
    <p class="description">
      I build fast, scalable, and modern web applications using the MERN stack. From backend APIs to dynamic user interfaces, I deliver end-to-end solutions tailored to your business needs.
    </p>
  </div>
</div>



          

        
        
          

        </div>

      </div>

    </section>{/* /Services Section */}



       </main>
  


   
    </>
  )
}

export default Service;
