import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const handleSignIn = () => {
    // Perform any sign-in logic here (e.g., authenticate user)

    // Show an alert message indicating successful sign-in
    window.alert('Signed in successfully !!!!');
  };

  return (
    <>
      <div className='leftDiv2'>
        <div className='leftDiv2-1'>
          <h1 className='head2-0'>Sign In to </h1>
          <h1 className='head2-1'>Your Account</h1>
          <br/>
          <input className='form1' type='email' placeholder='Email'/>
          <input className='form2' type='password' placeholder='Password'/>
          <a className='forgot'>forgot password?</a>
          {/* Add onClick event handler to trigger sign-in alert */}
          <Link to='/' className='btn3' onClick={handleSignIn}>SignIn</Link>
        </div>
      </div>
      <div className='rightDiv3'>
        <div className='rightDiv3-1'>
          <h1 className='head3'>HELLO FRIEND !</h1>
          <p className='para2-0'>Enter Your Personal Details And</p>
          <p className='para2-1'>Start Your Journey With Us</p>
          {/* Link to sign-up page */}
          <Link to="/sign-up" className='btn4'>SignUp</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
