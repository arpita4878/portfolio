import "./Resume.css";

function Resume() {
  return (
    <main className="resume">
      <section className="resume__container">
        <div className="resume__header">
          <h2>Resume</h2>
          <p>
            I’m looking forward to contributing to an organization with
            challenging roles, technical growth, and collaborative opportunities
            to apply my skills beyond academics.
          </p>
        </div>

        <div className="resume__grid">
          {/* LEFT COLUMN */}
          <div className="resume__column resume__left">
            <div className="resume__section">
              <h3>About Me</h3>
              <div className="resume__item">
                <h4>Arpita Seth</h4>
                <ul>
                  <li>📍 Indore</li>
                 <li>
  <i className="bi bi-telephone"></i> <a href="tel:+917999343606">+91 799 934 3606</a>
</li>
<li>
  <i className="bi bi-envelope"></i> <a href="mailto:arpitaseth192@gmail.com">arpitaseth192@gmail.com</a>
</li>

                </ul>
              </div>
            </div>

            <div className="resume__section">
              <h3>Education</h3>

              <div className="resume__item">
                <h4>BSc in Computer Science</h4>
                <span>2019 - 2022</span>
                <p>Mata Jija Bai Govt Girls PG College (DAVV)</p>
                <p>
                  Built solid knowledge in DSA, OS, C/C++, and SQL during
                  COVID-driven virtual learning.
                </p>
              </div>

              <div className="resume__item">
                <h4>Intermediate (PCM)</h4>
                <span>2018 - 2019</span>
                <p>Adarsh Bal Vinay Mandir, Indore</p>
                <p>
                  Strong foundation in Math & Computer Science. Sparked my
                  interest in coding and logic.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume__column resume__right">
            <div className="resume__section">
              <h3>Experience</h3>

              <div className="resume__item">
                <h4>MERN Stack Intern</h4>
                <span>6 Months – Ypsilon IT Solutions</span>
                <p>
                  Built full-stack features and collaborated on real projects
                  like “Shipping War.”
                </p>
                <ul>
                  <li>Worked on React + Node.js projects</li>
                  <li>Implemented REST APIs and backend logic</li>
                  <li>Improved UI and data flow</li>
                </ul>
              </div>

              <div className="resume__item">
                <h4>Sales Executive</h4>
                <span>3 Months – Honest Technology</span>
                <ul>
                  <li>
                    Built strong client relationships in the fintech space
                  </li>
                  <li>Understood customer needs and proposed solutions</li>
                </ul>
              </div>

              <div className="resume__item">
                <h4>Intern – App Support</h4>
                <span>6 Months – Desire To Learn</span>
                <ul>
                  <li>Maintained & updated educational platform</li>
                  <li>Debugged errors and optimized features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;
