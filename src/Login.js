import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

// import { useNavigate } from 'react-router-dom';
function Login() {
  // const navigate = useNavigate();
  // const Goto = (route) => {
  //   navigate(route);
  // };
  return (
    <>
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
                <div>
                  <Link  className="noStyleLink" to="/home">
                    <button className="primaryBtn" id="btnLogin">
                      <img src="login.png" height={20} />
                      &nbsp;Sign In
                    </button>
                  </Link>
                  <div className="or" style={{ display:"flex",  flex :"1"}}>
                   <hr style={{width:"45%"}}/>&nbsp;<p class="or">or</p>&nbsp;<hr style={{width:"45%"}}/>
                  </div>
                  <Link  to="/register" className="noStyleLink">
                    <button className="primaryBtn" id="btnRegister">
                      <img src="add-user.png" height={20} />
                      &nbsp; Sign Up
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
