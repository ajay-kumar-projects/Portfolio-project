import React from "react";
// import "./Signin.css";
import "./Login.css";

const Signin = () => {
  return (
    <div className="logBody">
      <div className="loG">
        
        {/* <div className="l1">
          <img src="./img1.jpeg" alt="no img" className="img-fluid" />
        </div> */}

        <div className="formBody">
          <h1 className="text-dark">Sign Up</h1>
          <form action="">
            <label htmlFor="" style={{paddingRight:"230px"}} >FirstName</label>
            <input style={{width:"320px"}}
              className="form-control"
              type="text"
              name=""
              id=""
              placeholder="FirstName"
              required
            />

            <label htmlFor="" style={{paddingRight:"230px"}}>LastName</label>
            <input
              className="form-control"
              type="text"
              name=""
              id=""
              placeholder="LastName"
              required
            />

            <label htmlFor="" style={{paddingRight:"175px"}}>Phone number</label>
            <input
              className="form-control "
              type="number"
              placeholder="Phone number"
            />

            <label htmlFor="" style={{paddingRight:"245px"}}>E-mail</label>
            <input
              className="form-control"
              type="email"
              placeholder="abc@gmail.com"
              required
            />

            <label htmlFor="" style={{paddingRight:"210px"}}>password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Create a Strong Password"
            />

            {/* <li className="box1">
            <label htmlFor="">Re-enter password</label>
            <input type="password" placeholder="Confirm password" />
          </li> */}

            <button className="btn btn-warning p-2 mt-3 w-50">Signin</button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Signin;
