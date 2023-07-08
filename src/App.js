import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import ContactUS from "./components/ContactUs.js";
import Joke from "./components/Joke.js";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import Signin from "./components/Signin.js"
import OurTeam from "./components/OurTeam";

function App(){
     return(

        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Skills" element={<Skills/>}/>
                <Route path="/ContactUs" element={<ContactUS/>}/>
                <Route path="/Joke" element={<Joke/>}/>
                <Route path="/OurTeam" element={<OurTeam/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signin" element={<Signin/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
     )
}export default App;
