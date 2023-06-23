import "./News.css";
import flyer from "../../../../pics/flyer.jpg";
import React from "react";

function News() {
  return (
    <section className="info-container-news">
      <h2 id="news">NEWS</h2>
      <h4 className="news-data">NOVEMBER 14, 2022</h4>
      <h3 className="news-title">
        EVERYBODY NEEDS A PLACE TO GO: AN EVENING WITH PANIC! AT THE DISCO
      </h3>
      <img src={flyer} className="news-pic" />
      <p className="news-text">
        Are you having Viva Las Vengeance Tour withdrawal or...?
        <br />
        Relive allllll the magic and join us for Everybody Needs A Place To Go:
        An Evening with Panic! At The Disco, a worldwide stream of the Chicago
        show happening on December 7th & 8th (check out timing below). 🙌🏼👌🏼 We
        wanted to make this work for everyone so digital tickets are only $5 -
        for a limited time, so get ’em while ya can!
        <br />
        North + South America (East) - Dec 7, 8pm EST
        <br />
        North + South America (West) - Dec 7, 8pm PST
        <br />
        Asia + Australia + New Zealand - Dec 8, 7pm Tokyo / 9pm Sydney
        <br />
        UK + Europe + Africa - Dec 8, 7pm London
        <br />
        <br />
        Pssst, there’s also some limited edition pieces of merch available to
        purchase now once you grab your ticket... don’t miss out 😉
      </p>

      <button className="news-button">Read more news...</button>
    </section>
  );
}

export default News;
