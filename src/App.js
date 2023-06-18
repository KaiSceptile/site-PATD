import './App.css';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import SideBar from "./Sidebar/Sidebar";
import Main from "./Main/Main.js";
import Authorization from './Authorization/Authorization';
function App() {
  return (
    <div className="App">
      <Header/>
      <Authorization/>
      <div className='content'>
      <SideBar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
