import React, { Fragment } from 'react';
import './TourTable.css';

function TourTable(){
	const count=20;
	let info=[{'id': -1, 'date':'Date', 'location':'Location', 'place':'place'}],
		date='9/8/22',location='Austin, TX',place='@ Moody Center';
	for (let i=0; i<count; i++){
		let infoRow={'id': i, 'date':date, 'location':location, 'place':place};
		info.push(infoRow);
	}
	return(
		<>
			<h2 className="tour-title">Tour</h2>
			<div className="tour-table">
				{info.map(infoElem=>(
					<Fragment key={infoElem.id}>
						<div className='tour-date'>{infoElem.date}</div>
						<div className='tour-location'>{infoElem.location}</div>
						<div className='tour-place'>{infoElem.place}</div>
					</Fragment>
				))}
			</div>
		</>
	);
}

export default TourTable;