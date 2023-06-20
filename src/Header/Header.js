import backgroundForNav from '../pics/back-nav1.jpg';
import logo from '../pics/panic_logo.png';
import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header(){
	const navigate = useNavigate();
	return(
		<header>
			<div className="header-container">
				<img src={backgroundForNav} className="nav-background"/>
				<div className="nav-container">
					<img onClick={() => navigate('/', { replace: false })} 
						src={logo} className="logo" alt="logo" />
					<ul className="nav">
						<li className="navElement"><a href="#news">News</a></li>
						<li className="navElement"><a href="#music">Music</a></li>
						<li className="navElement"><a href="#videos">Videos</a></li>
						<li className="navElement">Store</li>
						<li className="navElement"><Link to="/signup">Sign Up</Link></li>
					</ul>
				</div>
			</div>
		</header>
	);
}
export default Header;