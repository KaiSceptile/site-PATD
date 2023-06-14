import logo from './pics/panic_logo.png';
import flyer from './pics/flyer.jpg';
import fbrlogo from './pics/fbrlogo.png';
import footer from './pics/footer.jpg';
import symbol from './pics/TRIANGLE_LOGO.png';
import instagram from './pics/instagram.png';
import youtube from './pics/youtube.png';
import twitter from './pics/twitter.png';
import tiktok from './pics/tiktok.jpg';
import facebook from './pics/facebook.png';
import backgroundForNav from './pics/back-nav1.jpg';
import cover from './pics/cover.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <SideBar/>
        <Main/>

      <Footer/>
    </div>
  );
}

function Header(){
  return(
    <header>
        <div className="header-container">
            <img src={backgroundForNav} className="nav-background"/>
            <div className="nav-container">
                <img src={logo} className="logo" alt="logo" />
                <ul className="nav">
                    <li className="navElement"><a href="#news">News</a></li>
                    <li className="navElement"><a href="#music">Music</a></li>
                    <li className="navElement"><a href="#videos">Videos</a></li>
                    <li className="navElement">Store</li>
                    <li className="navElement">Sign Up</li>
                </ul>
            </div>


        </div>
    </header>
  )
}

function Footer(){
    return (
        <footer>
            <img src={footer} className="footer-background"/>
            <div className="footer-container">
                <img src={symbol} className="symbol"/>
                <div className="socials">
                    <img src={facebook} className="social"/>
                    <img src={twitter} className="social"/>
                    <img src={tiktok} className="social"/>
                    <img src={youtube} className="social"/>
                    <img src={instagram} className="social"/>
                </div>
                <img src={fbrlogo} className="fbr-logo"/>
                <p>
                © 2023 PANIC! AT THE DISCO
                    <br/>
                PRIVACY | TERMS | COOKIES POLICY
                </p>
            </div>
        </footer>
    )
}

function SideBar(){
    return(
        <aside className="sidebar">
            <h3>Highest Hope Foundation</h3>
            <button className="donation">Donate!</button>
            <p className="sidebar-text">All donations are tax-deductible through Highest Hopes 501(c)(3) fiscal sponsor, the Entertainment Industry Foundation (EIF). EIF is a Charity Navigator 4 Star Charity and meets all 20 BBB Charity Standards.</p>
        </aside>
    )
}
function Main(){
    return(
        <main>
            <News/>
            <Music/>
            <Videos/>
        </main>
    )
}

function News(){
    return(
        <section className='info-container'>
        <h2 id="news">NEWS</h2>

            <h4 className="news-data">NOVEMBER 14, 2022</h4>
            <h3 className="news-title">EVERYBODY NEEDS A PLACE TO GO: AN EVENING WITH PANIC! AT THE DISCO</h3>
            <img src={flyer} className="news-pic"/>
            <p className="news-text">Are you having Viva Las Vengeance Tour withdrawal or...?
                <br/>
                Relive allllll the magic and join us for Everybody Needs A Place To Go: An Evening with Panic! At The Disco, a worldwide stream of the Chicago show happening on December 7th & 8th (check out timing below). 🙌🏼👌🏼 We wanted to make this work for everyone so digital tickets are only $5 - for a limited time, so get 'em while ya can!
                <br/>
                North + South America (East) - Dec 7, 8pm EST<br/>
                North + South America (West) - Dec 7, 8pm PST<br/>
                Asia + Australia + New Zealand - Dec 8, 7pm Tokyo / 9pm Sydney<br/>
                UK + Europe + Africa - Dec 8, 7pm London<br/>
                <br/>
                Pssst, there’s also some limited edition pieces of merch available to purchase now once you grab your ticket... don't miss out 😉</p>

            <button className="news-button">Read more news...</button>
        </section>
    )
}
function Music(){
    return(
        <section className="info-container">
            <h2 id="music">MUSIC</h2>
            <h3 className="music-title">TOO WEIRD TO LIVE, TOO RARE TO DIE</h3>
            <img src={cover} className="cover"/>
            <p className="album-info">
                With this album, Panic! At the Disco shows that what happens in Vegas, doesn’t always stay in Vegas.
<br/>
                Too Weird to Live, Too Rare to Die is the fourth Panic! At the Disco studio album, released in October 2013 with Decaydance (Fall Out Boy) and Fueled By Ramen (All Time Low, Twenty One Pilots). The album looks back on the band’s Vegas roots through a more mature, yet still critical, perspective than that of past albums. Too Weird to Live is a concept album of sorts that tells Urie’s story of growing up to eventually leave the Vegas lifestyle behind, of finding true love in a city “famous for being in love with you for only one night” (Sputnik). The album’s title comes from Hunter S. Thompson’s “Fear and Loathing In Las Vegas.”
            </p>
            <button className="music-button">Listen...</button>
        </section>
    )
}

function Videos(){
    return(
        <section className="info-container">
            <h2 id="videos">VIDEOS</h2>
            <iframe width="560" height="400" src="https://www.youtube.com/embed/tGE381tbQa8"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            <button className="video-button">More...</button>
        </section>
    )
}
export default App;
