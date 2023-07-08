import React from "react";
import "./About.css";
import Skills from "./Skills";
import "animate.css";
function About() {
  return (
    <>
      <div className="bg">
        <h1 class="animate__animated animate__lightSpeedInLeft ">About Us</h1>
        <div className="about" data-aos="fade-up">
          <img
            width="400px"
            height="350px"
            src="https://www.productdossier.com/wp-content/uploads/2022/02/5013256-scaled.jpg"
          />

          <div>
            <p data-aos="fade-down" data-aos-duration="2000">
              Welcome to our project, where laughter meets creativity! We are a
              team of enthusiastic interns from B.V.Raju College, passionate
              about blending technology with humor. Our mission is to bring joy
              and laughter to people's lives by designing a unique and
              interactive portfolio that will keep you entertained with a click
              of a button.
            </p>
            <br /> <br />
            <p>
              {" "}
              At the heart of our project lies the "Jokes Button." We understand
              that life can sometimes be stressful, and we believe that a good
              joke has the power to brighten even the gloomiest of days. With
              our portfolio, you can enjoy an endless supply of humor, ready to
              put a smile on your face whenever you need it most..
            </p>
          </div>
        </div>

        <div
          className="about2"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-duration="2000"
        >
          <div>
            <p data-aos="fade-left" data-aos-duration="2000">
              Our team of talented interns has worked tirelessly to curate an
              extensive collection of jokes that cater to a wide range of tastes
              and preferences. From puns and one-liners to witty anecdotes and
              hilarious stories, our joke bank has something for everyone. With
              a simple click of the "New Joke" button, you'll be presented with
              a fresh dose of laughter, guaranteed to tickle your funny bone
            </p>

            <p>
              {" "}
              But this project isn't just about delivering jokes; it's about
              showcasing our technical skills and creative abilities. We have
              leveraged our knowledge of web development, user experience
              design, and programming to create an engaging and user-friendly
              interface. Our goal is to ensure that your experience with our
              portfolio is as enjoyable as possible, allowing you to immerse
              yourself in a world of laughter and entertainment.
            </p>
          </div>
          <img
            width="400px"
            height="350px"
            src="https://blog.planview.com/wp-content/uploads/2019/04/5-Key-Strategies-to-Application-Portfolio-Management.jpg"
          />
        </div>
      </div>

      <Skills />

    </>
  );
}

export default About;
