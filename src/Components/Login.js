import { Link } from "react-router-dom";
import React from "react";
import { callAPI } from "../Api";

function Login() {
  const singinUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userInfo = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await callAPI("POST", "user/login", userInfo);

    if(response.message) {
      alert(response.message);
    } else {
      localStorage.setItem("username", response.email);
      console.log("user found", response);
      window.location.href = "/home";
    }
  };
  
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
              <form onSubmit={singinUser}>
                <div className="form-floating mb-2">
                  <input
                    type="email"
                    className="form-control"
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
                    id="password"
                    name="password"
                    placeholder="password"
                  />
                  <label for="password">Confirm Password:</label>
                </div>
                <a href="#" style={{ float: "right" }}>
                  Forget Password
                </a>
                <br></br>
                <div>
                  <button
                    type="submit"
                    className="primaryBtn"
                    id="btnLogin"
                    style={{ width: "100%" }}
                  >
                    <img src="login.png" height={20} />
                    &nbsp;Sign In
                  </button>
                  <div className="or" style={{ display: "flex", flex: "1" }}>
                    <hr style={{ width: "45%" }} />
                    &nbsp;<p className="or">or</p>&nbsp;
                    <hr style={{ width: "45%" }} />
                  </div>
                  <Link className="noStyleLink">
                    <button type="button" className="signupBtn">
                      <i
                        className="fa fa-google"
                        style={{ color: "blueviolet" }}
                      ></i>{"  "}
                      Sign In with Google
                    </button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/register" className="noStyleLink">
                    <button className="signupBtn" id="btnRegister">
                      <img src="add-user.png" height={20} />
                      &nbsp;Sign Up
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
