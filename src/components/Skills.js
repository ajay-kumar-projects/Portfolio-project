import React from 'react';
import './Skills.css';


const Skills = () => {
  return (
    <div>
      <div className='skillbody'>
         <h1  class="animate__animated animate__lightSpeedInLeft animate__repeat-3 ">SKILLS</h1>
         <h3 className='vs'>I enjoyed diving into and learning new things.Here's a list of technologies We've worked with</h3>
         <div className="skill">
         <a class="hvr-pulse"><img  data-aos="fade-down"  src="https://c4.wallpaperflare.com/wallpaper/286/982/555/internet-html5-html-web-wallpaper-preview.jpg" alt="" /></a>
         <a class="hvr-grow"><img data-aos="zoom-in-up" src="https://res.cloudinary.com/practicaldev/image/fetch/s--cqZIl0gD--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/elytski1o23ybosxmors.jpg" alt="" /></a>
         <a class="hvr-pulse"><img data-aos="slide-down" src="https://wallpaperaccess.com/full/1555163.jpg" alt="" /></a> <br/>
          <a class="hvr-grow"><img data-aos="slide-up"src="./reactlogo1.jpeg" alt=""  /></a>
          <a class="hvr-pulse"><img data-aos="fade-up" src="https://wallpapercave.com/wp/wp12220868.jpg" alt=""  /></a>
          <a class="hvr-grow"><img data-aos="fade-down" src="./pythonlogo.jpeg" alt="" /></a>
          <a class="hvr-pulse"> <img data-aos="fade-down" src="./java.jpeg" alt="" /></a>
          <a class="hvr-grow"><img data-aos="zoom-in-left" src="./ps.jpeg" alt=""  /> </a>
          <a class="hvr-pulse"><img data-aos="zoom-in-right" src="./logo.jpeg" alt=""  /></a>
         {/* <button>HTML</button>
         <button>Css</button>
         <button>Js</button>
         <br />
         <button>React</button>
         <button>Node</button>
         <button>Frame</button> 
         skill animate__animated animate__zoomInDown*/}
         </div>  
       </div>
    </div>
  )
}

export default Skills;
