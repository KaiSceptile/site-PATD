import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Registration from './Registration/Registration';
import React from 'react';

function SignUp(){
	return(
		<div>
			<Header/>
			<Registration/>
			<Footer/>
		</div>
	);
}

export default SignUp;