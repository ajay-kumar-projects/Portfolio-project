import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    
        <footer> 
            <div className='foot'>
              <div className='port'>
              <img src="./logo11.jpg" alt="" />
                <li>This portfolio was created with love and laughter by the B.V.Raju College Internship Project Team.</li>
              </div>
        
         <div>
             <h1>Company</h1>
             <ul>
                 <li>Projects</li>
                  <li>Blog</li>
                  <li>Skills</li>
                  <li>Learn Design</li>
                    <li>Free Templetes</li>
                    
             </ul>
        </div>

      <div>
        <h1>Done By</h1>
        <ul>
            <li>Ajay</li>
            <li>Vijay</li>
            <li>Sravani</li>
            <li>Jayasri</li>
            <li>Kusuma</li>
        </ul>
      </div>

      <div>
        <h1>Address</h1>
        <ul>
            <li>D.no 12-2-4</li>
            <li>Vishnupur</li>
            <li>Bhimavaram</li>
            <li>West Godavari</li>
        </ul>
      </div>
      <div>
        <h1>Follow Us On</h1>
        <ul>
            <li>  <i class="bi bi-envelope"></i> <a href="">Email</a>       </li>
            <li>  <i class="bi bi-twitter"></i>  <a href=""> Twitter</a>    </li>
            <li>  <i class="bi bi-instagram"></i> <a href=""> Instagram</a> </li>
            <li>  <i class="bi bi-facebook"></i>  <a href=""> Facebook</a>  </li>
            <li>  <i class="bi bi-whatsapp"></i> <a href="">What's app</a>  </li>
            
        </ul>
       
      </div>
      </div>
      <h5 class="text-bg-dark last">| © 2023 B.V.Raju College. All rights reserved. | Privacy Policy | Terms of Service</h5>

        </footer>
    
  );
}

export default Footer;





