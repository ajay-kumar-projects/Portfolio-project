import React, { useEffect, useState } from 'react'
import './Joke.css';
import 'animate.css';


export default function Joke() {
    const [joke,setJoke]=useState([]);

    const getJokes =async() =>{
      const res= await fetch("https://api.chucknorris.io/jokes/random");
      const data=  await res.json();
      setJoke(data);
    }
    useEffect(()=>{
      
         getJokes();
         
      } ,[]);

      

  return (
    <>
    <div className='jokebg'>
    <div className='jokeBox'>
      <h1 class="animate__animated animate__flipInX animate__repeat-2 " >GET NEW JOKE...!!!!</h1>
      
      <p class="animate__animated animate__fadeInLeftBig ">{joke.value}</p>
          
      <button onClick={getJokes} type="button" class="btn btn-outline-dark p-2">New Joke</button>
      <img src="https://unsplash.com" alt="" />

    </div>

    
    
</div>



</>
  )
}


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Joke = () => {
//   const [joke, setJoke] = useState("");

//   useEffect(() => {
//     fetchJoke();

//     const timer = setInterval(fetchJoke, 24 * 60 * 60 * 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const fetchJoke = () => {
//     axios
//       .get("https://icanhazdadjoke.com/", {
//         headers: {
//           Accept: "application/json",
//         },
//       })
//       .then((response) => {
//         setJoke(response.data.joke);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Joke of the Day</h1>
//       <p>{joke}</p>
//     </div>
//   );
// };

// export default Joke;





