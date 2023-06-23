import React from 'react';
import Header from '../../Entities/Header/Header';
import Footer from '../../Entities/Footer/Footer';
import TourTable from './TourTable/TourTable';
import SideBar from '../../Entities/Sidebar/Sidebar';

function Tour(){
	return(
		<>
			<Header/>
			<SideBar/>
			<TourTable/>
			<Footer/>
		</>
	);
}

export default Tour;