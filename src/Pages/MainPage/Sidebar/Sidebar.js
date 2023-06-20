import './Sidebar.css';
import React from 'react';

function SideBar(){
	return(
		<aside className="sidebar">
			<div className="sidebar-cont">
				<h3>Highest Hope Foundation</h3>
				<button className="donation">Donate!</button>
				<p className="sidebar-text">All donations are tax-deductible through Highest Hopes 501(c)(3) fiscal sponsor, the Entertainment Industry Foundation (EIF). EIF is a Charity Navigator 4 Star Charity and meets all 20 BBB Charity Standards.</p>
			</div>
		</aside>
	);
}

export default SideBar;