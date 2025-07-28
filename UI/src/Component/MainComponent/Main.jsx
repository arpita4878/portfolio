import './Main.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const downloadButton = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.setAttribute('download', 'Arpita_Seth_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <div className="hero-overlay"></div>
        <img src="assets/img/img_bg.jpg" alt="Background" className="hero-bg" />

        <div className="container hero-content" data-aos="fade-up">
          <h1 className="hero-title">ARPITA SETH</h1>
          <p className="hero-subtitle">
            I'm a <span className="typed-text">Full Stack Developer</span>
          </p>

          <button className="btn btn-primary download-btn" onClick={downloadButton}>
            Download CV
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
