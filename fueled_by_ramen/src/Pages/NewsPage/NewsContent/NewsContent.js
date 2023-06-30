import flyer from '../../../pics/flyer.jpg';
import React from 'react';
import './NewsContent.css';

function NewsContent(props){
  const new_info=props.new;
	return(
		<section className='container-new'>
			<h4 className="news-data">{new_info.date}</h4>
			<h3 className="news-title">{new_info.title}</h3>
			<img src={new_info.img} className="news-pic"/>
			<p className="news-text">{new_info.content}</p></section>
	);
}

export default NewsContent;