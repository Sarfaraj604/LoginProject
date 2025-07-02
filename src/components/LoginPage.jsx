import React from "react";
import "../App.css";
function LoginPage() {
  return (
    <div className="login-component">
      <div className="text-area">
        <div className="vertical-line"></div>
        <div className="text-container">
          <h1>Responsive</h1>
          <h1>Registration</h1>
          <h1>Form</h1>
        </div>
      </div>
      <div className="form-area">
        <form className="login-form">
          <h2>Registration Form</h2>
          <div className="input-container">
            <div>
              <label htmlFor="name"> Full Name </label> <br />
              <input
                type="text"
                placeholder="Enter full name"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="email"> Email Address </label>
              <br />
              <input
                type="password"
                placeholder="Enter email address"
                className="input-field"
              />
            </div>
            <div className="join">
              <div>
                <label htmlFor="number"> Mobile Number </label>
                <br />
                <input
                  type="number"
                  placeholder="enter mobile number"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="date"> Birth Date </label>
                <br />
                <input type="date" placeholder="" className="input-field" />
              </div>
            </div>
            <div>
              <label htmlFor="gender"> Gender </label>
              <br />
              <div className="radio-container">
                <label htmlFor="">
                  <input type="radio" /> Male{" "}
                </label>
                <label htmlFor="">
                  <input type="radio" /> Female{" "}
                </label>
                <label htmlFor="">
                  <input type="radio" /> Prefer not to say{" "}
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter your address"
                className="input-field"
              ></input>

              <div className="join">
                <select name="Country" id="country" className="input-field">
                  <option value="" disabled hidden>
                    Country
                  </option>
                  <option value="country" style={{fontSize: "16px", color: 'darkgray'}}>Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                </select>
                <input
                  type="postal-code"
                  placeholder="Enter postal code"
                  className="input-field"
                />
              </div>
            </div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
