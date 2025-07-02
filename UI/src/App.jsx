import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom';

import Home from './Component/HomeComponent/Home';
import About from './Component/AboutComponent/About';
import Header from './Component/HeaderComponent/Header';
import Contact from './Component/ContactComponent/Contact';
import Service from './Component/ServiceComponent/Service';
import Resume from './Component/ResumeComponent/Resume';
import Portfolio from './Component/portfolioComponent/Portfolio';


function App() {


  return (
    <>

<div className="index-page">

  <Header/>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/contact' element={<Contact />}></Route>
  <Route path='/services' element={<Service />}></Route>
  <Route path='/resume' element={<Resume />}></Route>
  <Route path='/portfolio' element={<Portfolio />}></Route>
</Routes>





  
 

</div>
    </>
  )
}

export default App;
