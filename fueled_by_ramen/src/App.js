/* eslint-disable linebreak-style */
import "./const.css";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Tour from "./Pages/Tour/Tour";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./Pages/NewsPage/NewsPage";

function App() {
  const [data, setData] = React.useState(0);
  const url = "/express_backend";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setData(json.express);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>{data}</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
