import SideBar from '../../Entities/Sidebar/Sidebar';
import React from 'react';
import NewsContent from './NewsContent/NewsContent';
import './NewsPage.css';
import Header from '../../Entities/Header/Header';
import Footer from '../../Entities/Footer/Footer';

function NewsPage(){
	return(
		<>
			<Header/>
			<SideBar/>
			<main className='news-container'>
				<h2>News</h2>
				<NewsContent/>
				<NewsContent/>
				<NewsContent/>
				<div className='button-navigation'>
					<button>{'<<'}</button>
					<button>{'<'}</button>
					<button>1</button>
					<button>{'>'}</button>
					<button>{'>>'}</button>
				</div>
			</main>
			<Footer/>
		</>
	);
}

export default NewsPage;