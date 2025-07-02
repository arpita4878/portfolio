import About from '../AboutComponent/About';
import Contact from '../ContactComponent/Contact';
import Footer from '../FooterComponent/Footer';
import Header from '../HeaderComponent/Header';
import Main from '../MainComponent/Main';
import Portfolio from '../portfolioComponent/Portfolio';
import Resume from '../ResumeComponent/Resume';
import Service from '../ServiceComponent/Service';
import Skills from '../SkillsComponent/Skills';
import './Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';


function Home() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);


  return (
    <>
     
   
    <Main />
    <About />
    <Skills />
    <Resume />
    <Portfolio />
    <Service />
    <Contact/>
    <Footer />


    


   
    </>
  )
}

export default Home;
