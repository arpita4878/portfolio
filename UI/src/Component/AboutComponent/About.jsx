import './About.css';

function About() {
  return (
    <>
      <main className="main">
        <section id="about" className="about section dark-background">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Me</h2>
              <p className="subtitle">
                I'm a curious mind with a love for coding and a passion for problem-solving. As a dedicated developer, I find joy not just in writing code—but in debugging it too. Outside the screen, I'm an avid reader and a chess enthusiast, drawn to strategy, logic, and lifelong learning. Whether it’s building smarter software or improving my chess endgame, I enjoy challenges that push me to grow.
              </p>
            </div>

            <div className="row about-content align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <img src="assets/img/about.jpg" className="img-fluid rounded" alt="Arpita" />
              </div>

              <div className="col-lg-7 content" data-aos="fade-left">
                <div className="intro">
                  <h2>Hi there, I'm Arpita</h2>
                  <p>
                    I love creating beautiful and efficient websites. I enjoy guiding clients through the full process — from concept to design, development, and launch.
                  </p>
                </div>

                <div className="row info">
                  <div className="col-md-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 Mar 2002</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 799 934 3606</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <a href="https://arpitaportfolio-ten.vercel.app/" target="_blank" rel="noopener noreferrer">arpitaportfolio-ten.vercel.app</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>arpitaseth192@gmail.com</span></li>
                    </ul>
                  </div>
                </div>

                <div className="why-work mt-4" data-aos="fade-up">
                  <h3>Why Work With Me?</h3>
                  <p>
                    I’m a great communicator and invest the time needed to deeply understand your goals and bring your vision to life with clean, effective code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
