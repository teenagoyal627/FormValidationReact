import React from "react";
import { isEmail, isNotEmpty, hasMinLength } from "./Util/Validation";
import UseInput from "./Hook/UseInput";
import Input from "./Input";
const Login = () => {
  
  
    const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = UseInput("", (value) => {return isEmail(value) && isNotEmpty(value)});

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = UseInput("", (value) => {
    hasMinLength(value, 6);
  });

  //   we can also manage the inputs using ref..
  // const email=useRef()
  // const password=useRef()
  // after initialize here we simply set the ref value as a email or password in the input filed of the input tag
  // and then for see the email and password log the email.current.value and password.current.value
  // when we use ref there is no need to manage state and the onchange prop on the input filed
  // but in this for clear the states we use email.current.value=''
  // so that we use states instead of refs and also in ref we need to describe the ref for every input fileds

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    // const enteredValue=email.current.value
    // const enteredpassword=password.current.value
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailHasError && 'Please Enter a valid email'}
          type="email"
          name="email"
          onBlur={handleEmailBlur} //it is basically used to check that user leave the input filed or not
          value={emailValue}
          onChange={handleEmailChange}

        />

        <Input
          label="Password"
          id="password"
          error={passwordHasError && 'Please enter minimum 6 digit password.'}
          type="password"
          name="password"
          onBlur={handlePasswordBlur} //it is basically used to check that user leave the input filed or not
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};

export default Login;
