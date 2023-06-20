import News from './News/News';
import Music from './Music/Music';
import Videos from './Videos/Videos';
import SideBar from '../Sidebar/Sidebar';
import React from 'react';

function Main(){
	return(
		<div>
			<SideBar/>
			<main>
				<News/>
				<Music/>
				<Videos/>
			</main>
		</div>
	);
}

export default Main;