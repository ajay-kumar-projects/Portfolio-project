import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

function Navbar() {

  
  return (
   
    <>
    <div className="prenav pt-2">
      <h3 class="text-dark ">Get in touch : </h3>
      <a  href="https://github.com/login">  <i class="bi bi-github"></i>     </a> 
      <a href="https://www.linkedin.com/login">  <i class="bi bi-linkedin"></i>   </a>
      <a href="https://twitter.com/i/flow/login">  <i class="bi bi-twitter"></i>    </a> 
      <a href="https://www.instagram.com/?hl=en">  <i class="bi bi-instagram"></i>  </a> 
      <a href="https://www.facebook.com/">   <i className="bi bi-facebook"></i>   </a>
      <a href="https://www.google.com/">  <i class="bi bi-google"></i>      </a> 
    
    </div>
   
  
      <ul className="nav">
     
       
      {/* /* <form action="" className='searchBar'>
        <input type="Search" placeholder='Search' />
        <button type='submit'> <SearchIcon/></button>
       </form> */ }


       <img src="./logo11.jpg" alt="" />
        <li><NavLink className='li'  to="/" data-aos="fade-up" >Home</NavLink></li>
        <li><NavLink className='li' to="/About" data-aos="fade-down">About</NavLink></li>
        <li><NavLink className='li' to="/Projects" data-aos="fade-up">Projects</NavLink></li>
        
        <li><NavLink className='li' to="/Joke" data-aos="fade-down">Joke's</NavLink></li>
        
        <li><NavLink className='li' to="/OurTeam" data-aos="fade-down">OurTeam</NavLink></li>
        

        <li><NavLink className='li' to="/ContactUs" data-aos="fade-up">Contactus</NavLink></li>
        <li><NavLink className='lis' to="/Login" data-aos="fade-up">Login/Signup</NavLink></li>

        


        <div class="dropdown">
      <button class="dropbtn"><MenuIcon/></button>
      <div class="dropdown-content">
      {/* <Link className='drpli'  to="/Home">Home</Link> */}
      <Link className='drpli' to="/About">About</Link>
      <Link className='drpli' to="/projects">Projects</Link>
      <Link className='drpli' to="/Skills">Skills</Link>
      <Link className='drpli' to="/Joke">Joke's</Link>
      <Link className='drpli' to="/ContactUs">Contactus</Link>
      {/* <Link className='drpli' to="/">Terms & Condition</Link> */}
  </div>
  </div>
{/* </div> */}

      </ul>
       
    </>
  );
}

export default Navbar;

