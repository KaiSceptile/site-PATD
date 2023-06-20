import './Authorization.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Authorization(){
	return(
		<form className='authorization'>
			<div className='auth-title'>
				<h3>Log In</h3>
			</div>
			<div className='field'>
				<p>Username:</p>
				<input type='text' name='username'/>
			</div>
			<div className='field'>
				<p>Password:</p>
				<input type='text' name='password'/>
			</div>
			<a>Forgot password?</a>
			<button type='submit'>Submit</button>
			<Link to="/signup"><button className='sign-up'>Sign Up</button>
			</Link>
		</form>);
}

export default Authorization;