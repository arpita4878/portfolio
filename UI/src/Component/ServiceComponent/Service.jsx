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
            <div class="icon flex-shrink-0"><i class="bi bi-gem"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">DESIGN</a></h4>
              <p class="description">Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth.</p>
            </div>
          </div>
          {/* End Service Item */}

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="icon flex-shrink-0"><i class="bi bi-code"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">DEVELOPMENT</a></h4>
              <p class="description">I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
            </div>
          </div>{/* End Service Item */}

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="icon flex-shrink-0"><i class="bi bi-tv"></i></div>
            <div>
              <h4 class="title"><a href="service-details.html" class="stretched-link">BASIC SEO</a></h4>
              <p class="description">i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
            </div>
          </div>{/* End Service Item */}

          

        
        
          

        </div>

      </div>

    </section>{/* /Services Section */}



       </main>
  


   
    </>
  )
}

export default Service;
