import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='Username'></input>
        <input required type='email' placeholder='email'></input>
        <input required type='password' placeholder='Password'></input>
        <button>Login</button>
        <p id='registerError'>This is an error</p>
        <span>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register