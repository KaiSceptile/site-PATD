import footer from "../../pics/footer.jpg";
import symbol from "../../pics/TRIANGLE_LOGO.png";
import facebook from "../../pics/facebook.png";
import twitter from "../../pics/twitter.png";
import tiktok from "../../pics/tiktok.jpg";
import youtube from "../../pics/youtube.png";
import instagram from "../../pics/instagram.png";
import fbrlogo from "../../pics/fbrlogo.png";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <img src={footer} className="footer-background" />
      <div className="footer-container">
        <img src={symbol} className="symbol" />
        <div className="socials">
          <img src={facebook} className="social" />
          <img src={twitter} className="social" />
          <img src={tiktok} className="social" />
          <img src={youtube} className="social" />
          <img src={instagram} className="social" />
        </div>
        <img src={fbrlogo} className="fbr-logo" />
        <p>© 2023 PANIC! AT THE DISCO</p>
        <p className="terms">PRIVACY | TERMS | COOKIES POLICY</p>
      </div>
    </footer>
  );
}

export default Footer;
