import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // Import your CSS file

function SignUp() {
  const handleSignUp = () => {
    // Perform any signup logic here (e.g., send signup data to server)

    // Show an alert message indicating successful signup
    window.alert('Your sign-up was successful !!!!');
  };

  return (
    <>
      <div className='leftDiv'>
        <div className='leftDiv1'>
          <h1 className='head1'>Welcome Back!</h1>
          <p className='para1'>To keep connected with us please </p>
          <p className='para2'>login with your personal info</p>
          {/* Link to sign-in page */}
          <Link to="/sign-in" className='btn'>SIGN IN</Link>
        </div>
      </div>
      <div className='rightDiv'>
        <div className='rightDiv1'>
          <h1 className='head2'>Create An Account</h1>
          <input className='form1' type='text' placeholder='Name'/>
          <br/>
          <input className='form2' type='email' placeholder='Email'/>
          <br/>
          <input className='form3' type='password' placeholder='Password'/>
          <br/>
          {/* Add onClick event handler to trigger signup alert */}
          <Link to='/' className='btn1' onClick={handleSignUp}>SIGNUP</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
