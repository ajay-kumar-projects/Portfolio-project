import React from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div className="logBody">

      <div className="loG">

        {/* <div className="l1">
          <img src="./img1.jpeg" alt="no img" className="img-fluid" />
        </div> */}

        <div className="formBody">
          <h1>LOGIN</h1>
          <form action="">
            <label htmlFor="">Name</label>
           <div className="name"> <input className="form-control" type="text" name="" id="" placeholder="Name" required /> <h2 class="bi bi-person"></h2> </div> 
            <label htmlFor="">Password</label>
            <div className="name"> <input className="form-control" type="password" name="" id="" placeholder="Password" required/> <h2 class="bi bi-shield-lock"></h2> </div> 
            <input type="checkbox" name="" id="" className="mt-3" />Remember Me <br />
            <button className="btn btn-warning p-1 mt-3 mb-2 w-50 fs-5">Login</button>
            <h6><b> you don't have login account then you <Link to="/signin" className='tag'>SignUp </Link></b></h6>
            <h5>Or Login With</h5>
            <div className="gf">
            <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1710777005%3A1687169558675177&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneF9RpVAZ37mMEaxZmbqtNFYp_3U76DhPVpoaJHLEK4qA2VXlcVOVWcxSQ2Uw5op35Ec1-3ygw&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button className="btn btn-outline-danger mt-2"> <i class="bi bi-google px-1"></i> Google </button></a>
            <a href="https://www.facebook.com/"> <button className="btn btn-outline-primary mt-2"> <i class="bi bi-facebook fb px-1"></i> Facebook </button></a>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <div className='logbody'>
    
    <div className='pv'>
    
    <div className='form'>
    <h2 className='vs'>LOGIN </h2>
    
        <input className='form2 text-center' placeholder='Enter Username' type="text" required /> 
        <input className='form2 text-center' placeholder='Enter Password' type="password" required />
        <h5 className='text-danger '>Forgot password?</h5>
        <button className='btn p-2'>Login</button>

        <a href=""><button className='form2'> <i class="bi bi-google go"></i> <b> Login with Google</b></button></a>
        <a href="https://www.facebook.com/"><button className='form2'><i class="bi bi-facebook fb"></i><b>Login with Facebook</b></button></a>
        <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1710777005%3A1687169558675177&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneF9RpVAZ37mMEaxZmbqtNFYp_3U76DhPVpoaJHLEK4qA2VXlcVOVWcxSQ2Uw5op35Ec1-3ygw&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button className='form2'><i class="bi bi-envelope-fill en "></i><b>Login with E-mail</b></button></a>
     
        <h6><b> you don't have login account then you <Link to="/signin" className='tag'>SignUp</Link></b></h6>
    </div>
    </div>



    </div>
     */
}
