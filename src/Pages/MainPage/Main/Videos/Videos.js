import './Videos.css';
import React from 'react';

function Videos(){
	return(
		<section className="info-container">
			<h2 id="videos">VIDEOS</h2>
			<iframe className="video-char" src="https://www.youtube.com/embed/tGE381tbQa8"
				title="YouTube video player" frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
			<button className="video-button">More...</button>
		</section>
	);
}
export default Videos;