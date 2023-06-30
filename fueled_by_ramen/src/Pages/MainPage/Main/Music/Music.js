import "./Music.css";
import React, { Fragment, useEffect } from "react";
import allInfo from "./music.json";

function Music() {
  const [state, setState] = React.useState(0);
  const [data,setData]=React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('/music');
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);
  const decState = () => {
    if (state != 0) {
      setState(state - 1);
    }
  };
  const incState = () => {
    if (state != data.length - 1) {
      setState(state + 1);
    }
  };

  return (
    <section className="music">
      <button className="music-slide" onClick={decState}>
        {"<"}
      </button>
      <div className="albums">
        {data && data.map((slide, index) => {
          return (
            <Fragment key={index}>
              <div className={index === state ? "slide active" : "slide"}>
                {index === state && (
                  <div
                    style={{ backgroundColor: slide.back }}
                    className="info-container-music"
                  >
                    <h2 id="music">MUSIC</h2>
                    <h3 className="music-title">{slide.name}</h3>
                    <img src={slide.cover} className="cover" />
                    <p className="album-info">{slide.info}</p>
                    <button className="music-button">Listen...</button>
                  </div>
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
      <button className="music-slide right" onClick={incState}>
        {">"}
      </button>
    </section>
  );
}

export default Music;
