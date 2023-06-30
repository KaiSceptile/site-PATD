import SideBar from "../../Entities/Sidebar/Sidebar";
import React, { useEffect } from "react";
import NewsContent from "./NewsContent/NewsContent";
import "./NewsPage.css";
import Header from "../../Entities/Header/Header";
import Footer from "../../Entities/Footer/Footer";

function NewsPage() {
  const [state, setState] = React.useState(1);
  const [pages, setPages] = React.useState(0);
  const [data, setData] = React.useState();
  const newsPerPage = 3;
  const fetchData = async () => {
    try {
      const response = await fetch("/news-page/" + state, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: newsPerPage,
        }),
      });
      const json = await response.json();
      console.log(json);
      setData(json.res);
      setPages(json.all);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [state]);

  function getTotalPages() {
    if (pages % newsPerPage == 0) return pages / newsPerPage;
    if (pages % newsPerPage != 0) return Math.ceil(pages / newsPerPage);
  }
  const next = () => {
    if (state != getTotalPages()) setState(state + 1);
  };
  const previous = () => {
    if (state != 1) setState(state - 1);
  };
  const first = () => {
    setState(1);
  };
  const last = () => {
    setState(getTotalPages());
  };
  return (
    <>
      <Header />
      <SideBar />
      <main className="news-container">
        <h2>News</h2>
        {data &&
          data.map((element) => {
            return <NewsContent new={element} />;
          })}
        <div className="button-navigation">
          <button onClick={first}>{"<<"}</button>
          <button onClick={previous}>{"<"}</button>
          <button>{state}</button>
          <button onClick={next}>{">"}</button>
          <button onClick={last}>{">>"}</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NewsPage;
