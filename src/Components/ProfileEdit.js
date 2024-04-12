import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { useNavigate } from 'react-router-dom';
function Login() {
  // const navigate = useNavigate();
  // const Goto = (route) => {
  //   navigate(route);
  // };
  return (
    <>
      <div className="mainDiv">
        <Form className="card divCard" style={{ padding: "5%" }}>
          <h1 style={{ marginBottom: "3%", color: "red" }}>
            Edit Your Profile
          </h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={"fenillad087@gmail.com"}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <div className="form-floating mb-2">
                <input
                  type="tel"
                  className="form-control"
                  id="lblMobile"
                  name="contactNumber"
                  value={"5485772393"}
                  placeholder="Enter  your mobile number"
                />
                <label for="lblMobile">Mobile Number:</label>
              </div>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="lblShippingAddress"
                value={"21 highbrook st"}
                name="shippingAddress"
                placeholder="Enter  your shipping address"
              />
              <label for="lblShippingAddress">Primary Shipping address</label>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="lblShippingAddress"
                name="shippingAddress"
                placeholder="Enter  your shipping address"
              />
              <label for="lblShippingAddress">
                {" "}
                Secondary Shipping address
              </label>
            </div>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={"kitchener"}
                  name="city"
                  placeholder="City"
                />
                <label for="city">city</label>
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                defaultValue="Choose state"
                style={{ height: "58px" }}
              >
                <option>ontario</option>
                <option>alberta</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="zipcode"
                  value={"N1B 4H7"}
                  name="zipcode"
                  placeholder="zipcode"
                />
                <label for="zipcode">city</label>
              </div>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I accept terms and conditons for updating profile"
            />
          </Form.Group>
          <div style={{ float: "right" }}>
            <button className="btn btn-outline-danger" type="submit">
              Cancel
            </button>&nbsp;&nbsp;
            <button className="btn btn-info" type="submit">
              Update Profile
            </button>

          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
