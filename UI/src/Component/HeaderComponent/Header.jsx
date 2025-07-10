import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

  <header id="header" class="header dark-background d-flex flex-column">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="profile-img">
      <img src="assets/img/img01.jpg" alt="" class="img-fluid rounded-circle"/>
    </div>

    <a  class="logo d-flex align-items-center justify-content-center">
     
      <h1 class="sitename">Arpita Seth</h1>
    </a>

    <div class="social-links text-center">
      <a href="" target='_blank' class="twitter"><i class="bi bi-twitter-x"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bi bi-github"></i></a>
      <a href="www.linkedin.com/in/arpita-seth-3ba54a325" target='_blank' class="linkedin"><i class="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul style={{ padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '5px' ,marginLeft:"20px"}}class="active"><Link to='/'><i class="bi bi-house navicon"></i>Home</Link></li>
         <li style={{ marginBottom: '5px',marginLeft:"20px" }}class="active"><a href="/resume.pdf" download > <i class="bi bi-download navicon"></i>Download CV</a></li>
        <li style={{ marginBottom: '5px',marginLeft:"20px" }}class="active"><Link to='/about'><i class="bi bi-person navicon"></i> About</Link></li>
        <li style={{ marginBottom: '5px',marginLeft:"20px" }}class="active"><Link to='/resume'><i class="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
        <li style={{ marginBottom: '5px',marginLeft:"20px" }}class="active"><Link to='/portfolio'><i class="bi bi-images navicon"></i> Portfolio</Link></li>
        <li style={{ marginBottom: '5px',marginLeft:"20px" }}class="active"><Link to='/services'><i class="bi bi-hdd-stack navicon"></i> Services</Link></li>
        <li style={{ marginBottom: '5px',marginLeft:"20px" }}class="active"><Link to='/contact'><i class="bi bi-envelope navicon"></i> Contact</Link></li>
      </ul>
    </nav>

  </header>



   
    </>
  )
}

export default Header;
