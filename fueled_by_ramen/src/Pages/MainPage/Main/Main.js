import News from "./News/News";
import Music from "./Music/Music";
import Videos from "./Videos/Videos";
import SideBar from "../../../Entities/Sidebar/Sidebar";
import React from "react";

function Main() {
  return (
    <>
      <SideBar />
      <main>
        <News />
        <Music />
        <Videos />
      </main>
    </>
  );
}

export default Main;
