import React from 'react';
import './Project.css';
import 'animate.css';
import AOS from 'aos';

const Projects = () => {
  return (
    <>
    
    <div className='probg'>
      
      <h1 class="animate__animated animate__rotateInUpLeft ">Projects</h1>
      <p>These projects demonstrate my expertise with practical examples of some of my work,including brief description and links to code repositories amd live demos. They showcase my ability to tackle intricate challenges,adapt to various technologies,and efficiently oversee projects.</p>
      
      <div className='cardbody'>


       <div class="card" style={{width: "25rem"}} data-aos="fade-up-left"  data-aos-duration="1500" >
         <img src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Portfolio</h5>
           <p class="card-text text-dark">Creating a portfolio is an essential aspect of showcasing your work, skills, and accomplishments to potential clients, employers, or collaborators. Whether you're an artist, designer, writer, programmer, or any professional, a well-curated portfolio can make a significant impact on your career.</p>
           <a href="#" class="btn btn-primary"> Project  Link  </a>
         </div>
       </div>

       <div class="card" style={{width: "25rem"}} data-aos="fade-up-right"  data-aos-duration="1500">
         <img src="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Movie Search App</h5>
           <p class="card-text text-dark">A movie search app is a digital tool that allows users to easily find information about movies, including details about the plot, cast, crew, release date, ratings, reviews, and more. Such apps are popular among movie enthusiasts who want quick access to movie-related information and entertainment.</p>
           <a href="#" class="btn btn-primary">Project  Link  </a>
         </div>
       </div>

       <div class="card" style={{width: "25rem"}} data-aos="fade-up-right"  data-aos-duration="1500">
         <img src="https://www.shutterstock.com/image-vector/quiz-logo-speech-bubble-symbols-260nw-1212438316.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Quiz App</h5>
           <p class="card-text text-dark">A quiz app is a mobile application that allows users to test their knowledge and engage in fun and interactive quizzes on various topics. These apps provide a platform for users to challenge themselves, compete with others, and learn new information</p>
           <a href="#" class="btn btn-primary">Project  Link </a>
         </div>
       </div>

       <div class="card" style={{width: "25rem"}} data-aos="fade-up-left"  data-aos-duration="1500">
         <img src="https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">E-commerce App</h5>
           <p class="card-text text-dark">E-commerce, also known as electronic commerce, refers to the buying and selling of goods and services over the internet. An e-commerce app is a mobile application that allows users to access an online platform to browse products, make purchases, and carry out various transactions.</p>
           <a href="#" class="btn btn-primary">Project  Link </a>
         </div>
       </div>
       <div class="card" style={{width: "25rem"}} data-aos="fade-up-right"  data-aos-duration="1500" >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLyIwnHTjkJ7mdKyGwZuybCVL-M1n20yI3Q&usqp=CAU" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Emotion Tracker</h5>
           <p class="card-text text-dark">An emotion tracker is a tool or application designed to monitor and track emotions experienced by individuals. These trackers use various methods to collect data on emotions, such as self-reporting, physiological measurements, or facial recognition technology.</p>
           <a href="#" class="btn btn-primary">Project  Link </a>
         </div>
       </div>

       <div class="card" style={{width: "25rem"}} data-aos="fade-up-right"  data-aos-duration="1500" >
         <img src=" https://t4.ftcdn.net/jpg/05/37/40/05/360_F_537400577_VTFLGgudY1lP7DPWXqooVuVWeM5mC68Y.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Voice comand App</h5>
           <p class="card-text text-dark">A voice command app, also known as a voice assistant or virtual assistant app, allows users to interact with their mobile devices or smart home devices using voice commands. These apps utilize natural language processing and artificial intelligence technologies to understand and respond to user voice inputs</p>
           <a href="#" class="btn btn-primary">Project  Link </a>
         </div>
       </div>
       <div class="card" style={{width: "25rem"}} data-aos="fade-up-left"  data-aos-duration="1500" >
         <img src="  https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">Video Caller</h5>
           <p class="card-text text-dark">A video caller app, also known as a video calling or video chat app, allows users to make real-time video calls and communicate with others using their mobile devices or computers. These apps use internet connectivity and video streaming technologies to enable face-to-face conversations, no matter the distance between the participants.</p>
           <a href="#" class="btn btn-primary">Project  Link </a>
         </div>
       </div>
       
       </div>
    </div> 
 
    </>

  );
}

export default Projects;
