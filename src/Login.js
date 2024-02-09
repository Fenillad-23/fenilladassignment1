import "./App.css";

import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Redirect to the desired route
    navigate('/register');
  };
  return (<>
    <div className="mainDiv">
      <div className="card divCard">
        <div>
          <center>
            <h1 className="title">Sign In!!</h1>
          </center>
        </div>
        <div className="row">
          <div className="col md-1 mt-5 ml-25">
            <img src="TRENDBAZAR.png" height="90%" width="90%" />
          </div>

          <div className="col md-9" id="inputForm">
            <form>
              <div class="form-floating mb-2">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPass"
                  name="confirmPass"
                  placeholder="Confirm password"
                />
                <label for="confirmPass">Confirm Password:</label>
              </div>
              <br></br>
              <div className="row btn-wrapper">
                <button 
                  // onClick={(e) => alert("Account Created")}
                  className="primaryBtn"
                  id="btnLogin"
                >
                  <img src="login.png" height={20} />
                  &nbsp; Sign In
                </button>
                <button className="primaryBtn" id="btnRegister" onClick={handleButtonClick}>
                  <img src="add-user.png" height={20} />&nbsp;
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Login;
