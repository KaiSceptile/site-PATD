import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Authorization from './Authorization/Authorization';
import React from 'react';

function LogIn(){
	return(
		<div>
			<Header/>
			<Authorization/>
			<Footer/>
		</div>
	);
}

export default LogIn;