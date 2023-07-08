import React from "react";
import "./Home.css";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import Skills from "./Skills.js";
import ContactUS from "./ContactUs";
import About from "./About";
import Aos from "aos";

function Home() {
  return (
    <>
      <div className="parent">
        <div className="exmp">
          <h2 class="animate__animated animate__lightSpeedInLeft ">
            Welcome to
          </h2>
          <h1>My Portfolio.!!!</h1>
          <p>
            I am a passionate student pursuing Bsc final year, with a keen
            intrest in Mathematics & Computer Science. This website serves as a
            showcase of my projects and achievements,highlighting my skills.
          </p>
          <div id="img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk8GFwTIaLBXPZgdAcBsGqI-NaJlq9xiNYQ&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="icons">
          <a href="https://github.com/login">
            {" "}
            <i class="bi bi-github"></i>{" "}
          </a>
          <a href="https://www.linkedin.com/login">
            {" "}
            <i class="bi bi-linkedin"></i>{" "}
          </a>
          <a href="https://twitter.com/i/flow/login">
            {" "}
            <i class="bi bi-twitter"></i>{" "}
          </a>
          <a href="https://www.instagram.com/?hl=en">
            {" "}
            <i class="bi bi-instagram"></i>{" "}
          </a>
          <a href="https://www.facebook.com/">
            {" "}
            <i className="bi bi-facebook"></i>{" "}
          </a>
          <a href="https://www.google.com/">
            {" "}
            <i class="bi bi-google"></i>{" "}
          </a>
        </div>

        <h1>Our Services</h1>

        <div className="boxs">
          <div className="team1 " data-aos="flip-up" data-aos-duration="4000">
            <h3 class="bi bi-briefcase hvr-grow"></h3>
            <h2>Web Design</h2>
            <p>
              Our Team created this application with the help of five members.
            </p>
          </div>

          <div
            className="team1 hvr-grow"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <h3 class="bi bi-card-checklist"></h3>
            <h2>Web Development</h2>
            <p>
              Customers are made by ours only Designed the UI path of the
              website and after that video calling response
            </p>
          </div>

          <div
            className="team1 hvr-grow"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <h3 class="bi bi-camera"></h3>
            <h2>PhotoGraphy</h2>
            <p>
              First created one loginpage $ register page and after one
              Welcomepage and one homepage & aboutpage & contactpage created
              this UI part
            </p>
          </div>

          <div
            className="team1 hvr-grow"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <h3 class="bi bi-binoculars"></h3>
            <h2>Responsive Design</h2>
            <p>
              First created one loginpage $ register page and after one
              Welcomepage and one homepage & aboutpage & contactpage created
              this UI part
            </p>
          </div>

          <div
            className="team1 hvr-grow"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <h3 class="bi bi-sun"></h3>
            <h2>Graphic Design</h2>
            <p>
              First created one loginpage $ register page and after one
              Welcomepage and one homepage & aboutpage & contactpage created
              this UI part
            </p>
          </div>
          <div
            className="team1 hvr-grow"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
            <h3 class="bi bi-bar-chart-line"></h3>
            <h2>Marketing Services</h2>
            <p>
              First created one loginpage $ register page and after one
              Welcomepage and one homepage & aboutpage & contactpage created
              this UI part
            </p>
          </div>
     


        <div className="div">
          <h1>Frequently asked questions...</h1>

          <div
            className="head"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <h2>Why is having a portfolio project important?</h2>
            <p>A portfolio project is important because it allows you to
              demonstrate your abilities and expertise to potential employers,
              clients, or collaborators. It provides tangible evidence of your
              skills and serves as a visual representation of your past work,
              which can significantly enhance your professional credibility.
              
            </p>
          </div>

          <div
            className="head"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h2>How should I organize my portfolio project?</h2>

            <p>
              You should organize your portfolio project in a clear and
              intuitive manner. Consider creating separate sections or
              categories based on project type, industry, or skill set. You can
              also include a brief introduction, an about me section, and links
              to your resume, contact information, and social media profiles.
            </p>
          </div>

          <div
            className="head"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h2>How frequently should I update my portfolio project?</h2>
            <p>
              It's important to update your portfolio project regularly,
              especially when you complete new projects or gain new skills. Aim
              to update it at least every 6-12 months, or whenever you have
              significant additions or improvements to showcase. Keeping your
              portfolio project up to date ensures that it accurately reflects
              your current abilities and achievements.
            </p>
          </div>

          <div
            className="head"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h2>Do I need an API key to use a joke maker API?</h2>
            <p>
              Many joke maker APIs require an API key for authentication and
              usage tracking purposes. API keys help ensure that the API is
              being used responsibly and allow developers to monitor and control
              access to the service. You typically need to sign up for an
              account with the API provider to obtain an API key.
            </p>
          </div>

          <div
            className="head"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h2>Can I customize the jokes generated by a joke maker API?</h2>
            <p className="hlo">
              The level of customization available in joke maker APIs can vary.
              Some APIs provide parameters that allow you to specify the joke
              type, category, language, or length. Additionally, you may have
              the option to contribute your own jokes to the API's database,
              expanding the range of jokes available for generation.
            </p>
          </div>

          <div
            className="head"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h2>Can I use a joke maker project for commercial purposes?</h2>
            <p>
              The usage rights and commercial viability of joke maker projects
              may vary. Some projects may have open-source licenses that allow
              commercial usage, while others may have restrictions or require
              proper attribution. It's important to review the licensing terms
              and understand the usage rights before utilizing a joke maker
              project for commercial purposes.
            </p>
          </div>
          
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;

{
  /* <div class="container">

  <div class="first">
    <h1 class="animate__animated animate__bounceInLeft"> Welcome...! </h1>
    <br/>
    <br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  quidem dolorem debitis cumque in a eligendi deleniti natus, aliquam accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe tempore incidunt animi mollitia neque provident temporibus? Mollitia, cumque libero eius sed aliquam iure quos debitis neque eveniet enim ipsa!</p>
    </div>
    
    <div>
      
      <img src='./homeBg.jpeg' alt=""/>

    </div>
</div> */
}

{
  /* <h1>Welcome..!!!!</h1> */
}
