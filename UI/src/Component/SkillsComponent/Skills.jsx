import './Skills.css'


function Skills() {
  return (
    <>
     
     <main className="main">

     {/* {/* Skills Section  */}
    <section id="skills" class="skills section light-background">

    
      <div class="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>I’m a Creative director based on New York, who loves clean, simple & unique design. I also enjoy crafting</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row skills-content skills-animation">

          <div class="col-lg-6">

          <div class="progress">
              <span class="skill"><span>C/C++ </span> <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "75%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="progress">
              <span class="skill"><span>HTML</span> <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>CSS</span> <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>JavaScript</span> <i class="val">72%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "72%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            

            <div class="progress">
              <span class="skill"><span>Mongo DB</span> <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "75%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>Express</span> <i class="val">70%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "70%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>Node JS</span> <i class="val">70%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "70%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>React </span> <i class="val">55%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{"width": "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
    {/* Skills Section  */}

</main>

   
    </>
  )
}

export default Skills;
