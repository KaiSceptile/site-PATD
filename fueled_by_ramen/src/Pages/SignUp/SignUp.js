import Footer from '../../Entities/Footer/Footer';
import Header from '../../Entities/Header/Header';
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