import './App.css';

function App() {
  return (
    
    <div className="container">
      <div className="card divCard">
      <div>
       <center><h1 className='title'>Create an Account!!</h1></center>
      </div>
      <div>
        <form>
          <label for >Email:</label><br/>
          <input type="text" className='form-control'  id=" floatingEmaillbl" placeholder='Enter  your email'/><br />

          <label>Create Password:</label><br/>
          <input type="password" className='form-control' placeholder='Create strong password'/><br />

          <label>Confirm Password:</label><br/>
          <input type="password"  className='form-control' id='confirmPass' placeholder='Confirm password'/><br />

          <label>Mobile Number:</label><br/>
          <input type="text"  className='form-control' placeholder='Enter  your mobile number'/><br />

          <label>Shipping address:</label><br/>
          <input type="text"  className='form-control' placeholder='Enter  your shipping address'/><br />

          <div className='acceptTerms'>
            <input className='form-check-input' type='checkbox'/>&nbsp;&nbsp;I agree to the terms and conditions of this website.<br/>
          </div><br></br>
          <div className='row btn-wrapper'>
            <button onClick={(e) => alert("Account Created")} className='btn btn-outline-info' id='btnRegister'>Sign Up</button> 
            <button onClick={(e) => alert("Account Created")} className='btn btn-outline-primary' id='btnLogin'>Sign In</button>
          </div>
          
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;