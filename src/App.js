import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card divCard">
        <div>
          <center>
            <h1 className="title">Create an Account!!</h1>
          </center>
        </div>
        <div>
          <form >
            <div class="form-floating mb-2">
              <input type="email " class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating mb-2">
                <input type="password" className="form-control" id="floatingPass" placeholder="Create strong password"/>
                <label for="floatingPass">Create Password:</label>
            </div>

           <div className="form-floating mb-2"> 
                <input type="password" className="form-control" id="confirmPass"  placeholder="Confirm password" />
                <label for="confirmPass">Confirm Password:</label>
           </div>
            <div className="form-floating mb-2">
              <input type="tel" className="form-control" id="lblMobile" placeholder="Enter  your mobile number"/>
              <label for="lblMobile">Mobile Number:</label>
            </div>
            
            
          <div className="form-floating mb-2"> <input type="text" className="form-control" id="lblShippingAddress" placeholder="Enter  your shipping address"/>
            <label for="lblShippingAddress">Shipping address:</label>
          </div>
           
          <div className="acceptTerms">
              <input className="form-check-input" type="checkbox" />
              &nbsp;&nbsp;I agree to the terms and conditions of this website.
              <br />
            </div>
            <br></br>
            <div className="row btn-wrapper">
              <button
                onClick={(e) => alert("Account Created")}
                className="btn btn-outline-info"
                id="btnRegister"
              >
                Sign Up
              </button>
              <button
                onClick={(e) => alert("Account Created")}
                className="btn btn-outline-primary"
                id="btnLogin"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
