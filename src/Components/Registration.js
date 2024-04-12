import { Link } from "react-router-dom";
function Registration() {

  const createUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userInfo = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPass"),
      contactNumber: formData.get("contactNumber"),
      shippingAddress: formData.get("shippingAddress"),
      terms: formData.get("terms"),
    };
    if (userInfo.email === "" || userInfo.password === "" || userInfo.contactNumber === "" || userInfo.confirmPassword === "" || userInfo.terms != 'on') {
      alert("Please fill out all fields");
    } else {
      // alert("all fields filled successfully!"+userInfo.email);
      if (userInfo.password !== userInfo.confirmPassword) {
        return alert('Passwords do not match')
      } else {
        window.location.href = "/home";
      }

    }

  };
  return (

    <div className="mainDiv">
      <div className="card divCard">
        <div>
          <center>
            <h1 className="title">Create an Account!!</h1>
          </center>
        </div>
        <div className="row">
          <div className="col md-1 mt-5 ml-25">
            <img src="TRENDBAZAR.png" height="90%" width="90%" />
          </div>

          <div className="col md-9" id="inputForm">
            <form id="form" onSubmit={createUser}>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="floatingInput"
                  placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="floatingPass"
                  placeholder="Create strong password" />
                <label for="floatingPass">Create Password:</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPass"
                  name="confirmPass"
                  placeholder="Confirm password" />
                <label for="confirmPass">Confirm Password:</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="tel"
                  className="form-control"
                  id="lblMobile"
                  name="contactNumber"
                  placeholder="Enter  your mobile number" />
                <label for="lblMobile">Mobile Number:</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="lblShippingAddress"
                  name="shippingAddress"
                  placeholder="Enter  your shipping address" />
                <label for="lblShippingAddress">Shipping address:</label>
              </div>

              <div className="acceptTerms">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terms" />
                &nbsp;&nbsp;I agree to the terms and conditions of this website.
                <br />
              </div>
              <br></br>
              <div className="row btn-wrapper">
                <button
                  type="submit"

                  className="primaryBtn"
                  id="btnRegister">
                  <img src="add-user.png" height={20} />&nbsp;&nbsp;
                  Sign Up
                </button>
                <Link className="noStyleLink" to="/login">
                  <button className="primaryBtn" id="btnLogin">
                    <img src="login.png" height={20} />
                    &nbsp;Sign In
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
