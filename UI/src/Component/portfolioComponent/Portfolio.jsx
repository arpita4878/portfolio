import './Portfolio.css'
import { Link } from 'react-router-dom';



function Portfolio() {
  return (
    <>
     
     <main className="main">

 <section id="portfolio" class="portfolio section light-background">

      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development and Some Books.</p>
      </div>{/* End Section Title */}

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-books">Books</li>
          </ul>{/* End Portfolio Filters */}

          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="assets/img/shipping_War.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Shipping War</h4>
                  <p>It is an logistics and freight management application for consignment handling. </p>
                  <a href="assets/img/shipping_War.jpg" title="Shipping War" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}


              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="assets/img/portfolioo.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Portfolio</h4>
                  <p>It's My Portfolio...</p>
                  <a href="assets/img/portfolioo.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

        
           

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="assets/img/meal_bridge.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Meal Bridge</h4>
                  <p>It is an application where restaurants and bakeries can post excess food, and verified NGOs/individuals can claim pickups.</p>
                  <a href="assets/img/meal_bridge-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}


             <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img src="assets/img/granth_img.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Granth Magazine</h4>
                  <p>It is an Current Affair Magazine by Desire To Learn.</p>
                  <a href="assets/img/granth_img.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>

            </div>{/* End Portfolio Item */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img src="assets/img/img001.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Game Changer Magazine</h4>
                  <p>It is an Question Bank Magazine by Desire To Learn.</p>
                  <a href="assets/img/img001.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

          

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img src="assets/img/granth_01.png" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Granth Magazine</h4>
                  <p>It is an Current Affair Magazine by Desire To Learn</p>
                  <a href="assets/img/granth_01.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                </div>
              </div>
            </div>{/* End Portfolio Item */}

          </div>{/* End Portfolio Container */}

        </div>

      </div>

    </section>{/* /Portfolio Section */}

     </main> 
    </>
  )
}

export default Portfolio;
