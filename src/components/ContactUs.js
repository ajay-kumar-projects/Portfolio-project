import React, { useState } from "react";
import "./ContactUs.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import Footer from "./Footer";

function ContactUS() {
  const [formData,setformData]=useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch('/send-email',{
      method:"post",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(formData),
    })
    .then ((response)=>response.json())
    .then((data)=>console.log((data)))
    .catch((error)=>console.log('Ferror:-',error))
  };
  return (
    <>
    <div className="contbg">
      <div >
       
        <div id="cont">
          <h1>CONTACT US </h1>

          <h4>
            Our team is dedicated to providing prompt and helpful assistance, so
            please don't hesitate to contact us. Whether you have feedback about
            our project, want to share a joke, or need any kind of support, we
            are here to assist you.
          </h4>
        </div>

        <div class="container">
          <div class="content">
            <div class="left-side">
              <div class="address details">
                <div class="topic">
                  <LocationOnTwoToneIcon />
                  Address
                </div>
                <div class="text-one">bhimavaram</div>
                <div class="text-two">west godavari</div>
              </div>

              <div class="phone details">
                <div class="topic">
                  {" "}
                  <PhoneIcon />
                  Phone
                </div>
                <div class="text-one">+0098 9893 5647</div>
                <div class="text-two">+0096 3434 5678</div>
              </div>

              <div class="email details">
                <div class="topic">
                  <EmailTwoToneIcon />
                  Email
                </div>
                <div class="text-one">codinglab@gmail.com</div>
                <div class="text-two">info.codinglab@gmail.com</div>
              </div>
            </div>

            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              <p>
                If you have any work from me or any types of quries related to
                my tutorial, you can send me message from here. It's my pleasure
                to help you.
              </p>

              <form action="" onSubmit={handleSubmit}>
                <div class="input-box">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    class="form-control"
                  />
                </div>

                <div class="input-box">
                  <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email} 
                    onChange={handleChange}
                    />
                </div>

                <div class="input-box message-box">
                  <input
                    type="text-area"
                    name="message"
                    id="message"
                    placeholder="Type Here....."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ textAlign: "start" }}
                  />
                </div>

                <div class="button">
                  <button type="submit" class="btn btn-warning p-3 ">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436.28503722500847!2d81.52508821868746!3d16.569540604223178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd48c73a7de9%3A0x864b3f76a5310e9a!2sB%20V%20raju%20college!5e0!3m2!1sen!2sin!4v1687440365619!5m2!1sen!2sin"
        width="98%"
        height="450"
        style={{ border: "0", borderRadius: "10px", margin: "10px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* <div className='container'>
      <h1>Contact</h1>
    <p>we would love to respond to your queries and help you succeed.Feel free to get in touch with us.</p>  
    <div class="contact-box">
      <div class="contact-left">
      <h3>Sent your req</h3>
      <form>
        <div class="input-row">
          <div class="input-group">
            <lable>Name</lable>
            <input type="text" placeholder="ajay"/>

          </div>
          <div class="input-group">
            <lable>Phone</lable> 
            <input type="text" placeholder="+1 412 520 3231"/>
          </div>

        </div>
        <div class="input-row">
          <div class="input-group">
            <lable>Email</lable>
            <input type="email" 
            placeholder="jhonamendogmgmail.com"/>

          </div>
        </div>
      </form>

      </div>
      <div class="contact-right"></div>
      <h3>Reach Us</h3>
     
    </div>
  </div> */}
  </div>
    </>
  );
}

export default ContactUS;
