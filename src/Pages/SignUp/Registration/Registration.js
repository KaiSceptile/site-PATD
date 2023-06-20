import './Registration.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Registration(){
	return(
		<form className='registration'>
			<div className='reg-title'>
				<h3>Sign Up</h3>
			</div>
			<div className='field'>
				<p>Username:</p>
				<input type='text' name='username'/>
			</div>
			<div className='field'>
				<p>Email:</p>
				<input type='email' name='email'/>
			</div>
			<div className='field'>
				<p>Password:</p>
				<input type='text' name='password'/>
			</div>
			<div className='field'>
				<p>Reenter password:</p>
				<input type='text' name='second-password'/>
			</div>
			<button type='submit'>Submit</button>
			<Link to="/login"><button className='log-in'>Log In</button>
			</Link>
		</form>);
}

export default Registration;