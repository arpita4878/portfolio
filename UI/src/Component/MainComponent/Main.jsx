import './Main.css'


function Main() {

  const downloadButton = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.setAttribute('download', 'Arpita_Seth_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  



  return (
    <>
   <main className="main">

     <section id="hero" className="hero section dark-background">

      <img src="assets/img/img_bg.jpg" alt="" data-aos="fade-in" className="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2 >ARPITA SETH</h2>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer">Full Stack Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      <br />
      <button class="btn btn-primary w-40  "  onClick={downloadButton}>Download CV</button>
      </div>

    </section>
</main>
   
    </>
  )
}

export default Main;
