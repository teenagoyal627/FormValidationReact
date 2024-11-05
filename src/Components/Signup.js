import React, { useState } from "react";

const Signup = () => {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    console.log(typeof fd);
    const acquistionData = fd.getAll("acquisition");
    console.log(typeof fd.entries());
    const arrayData = Array.from(fd.entries());
    console.log(arrayData);
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquistionData;
    if (data.password !== data["confirm-password"]) {
      setPasswordAreNotEqual(true);
    }
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started</p>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />

          <div className="control-error">
            {passwordAreNotEqual && <p>Password must match.</p>}
          </div>
        </div>
      </div>
      <hr />
      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describe your role</label>
        <select name="role" id="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input type="checkbox" id="google" name="acquistion" value="google" />
          <label htmlFor="google">Google</label>
        </div>
        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
};

export default Signup;
