import "./News.css";
import flyer from "../../../../pics/flyer.jpg";
import React, { useEffect } from "react";

function News() {
  const [data, setData] = React.useState({});
  const fetchData = async () => {
    try {
      const response = await fetch("/news-main");
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="info-container-news">
      <h2 id="news">NEWS</h2>
      <h4 className="news-data">{data.date}</h4>
      <h3 className="news-title">{data.title}</h3>
      <img src={data.img} className="news-pic" />
      <p className="news-text">{data.content}</p>
      <button className="news-button">Read more news...</button>
    </section>
  );
}

export default News;
