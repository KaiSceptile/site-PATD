import './Music.css';
import cover from "../../pics/cover.png";

function Music(){
    return(
        <section className="info-container-music">
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

export default Music;