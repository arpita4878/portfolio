import './Portfolio.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Shipping War',
      type: 'app',
      description: '',
      image: 'assets/img/shipping_WAR.png',
      link: 'https://tinyurl.com/S16G22'
    },
    {
      id: 2,
      title: 'Portfolio',
      type: 'app',
      description: "It's My Portfolio...",
      image: 'assets/img/PORTFOLIO.png',
      link: 'https://tinyurl.com/AS1622'
    },
    {
      id: 3,
      title: 'Meal Bridge',
      type: 'app',
      description: 'Restaurants post excess food; NGOs claim pickups.',
      image: 'assets/img/meal_bridge.jpg',
      zoom: 'assets/img/meal_bridge-2.jpg'
    },
    {
      id: 4,
      title: 'Granth Magazine',
      type: 'books',
      description: 'Current Affairs Magazine by Desire To Learn.',
      image: 'assets/img/granth_img.jpg',
      zoom: 'assets/img/granth_img.jpg'
    },
    {
      id: 5,
      title: 'Game Changer Magazine',
      type: 'books',
      description: 'Question Bank by Desire To Learn.',
      image: 'assets/img/img001.jpg',
      zoom: 'assets/img/img001.jpg'
    },
    {
      id: 6,
      title: 'Granth Magazine 01',
      type: 'books',
      description: 'Current Affairs Edition',
      image: 'assets/img/granth_01.png',
      zoom: 'assets/img/granth_01.jpg'
    }
  ];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === filter);

  return (
    <main className="main">
      <section id="portfolio" className="portfolio section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Listed below are some of the most representative projects I've worked on.
            They range from basic web design to advanced web applications and educational publications.
          </p>
        </div>

        <div className="container">
          <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
            <button className={filter === 'app' ? 'active' : ''} onClick={() => setFilter('app')}>Apps</button>
            <button className={filter === 'books' ? 'active' : ''} onClick={() => setFilter('books')}>Books</button>
          </div>

          <div className="row gy-4 portfolio-grid" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map(item => (
              <div className="col-lg-4 col-md-6 portfolio-item" key={item.id}>
                <div className="portfolio-card">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    {item.description && <p>{item.description}</p>}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preview-link"
                      >
                        <i className="bi bi-link"></i>
                      </a>
                    )}
                    {item.zoom && (
                      <a
                        href={item.zoom}
                        data-gallery="portfolio-gallery"
                        className="preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
