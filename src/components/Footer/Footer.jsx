import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-section">
          <span className="footer-header">Company</span>
          <span>About</span>
          <span>Jobs</span>
          <span>For the record</span>
        </div>
        <div className="footer-section">
          <span className="footer-header">Communities</span>
          <span>For Artists</span>
          <span>Developers</span>
          <span>Advertising</span>
          <span>Investors</span>
          <span>Ventors</span>
        </div>
        <div className="social-media">
          <div>
            <span>
              {/* <InstagramIcon/> */}
              <AiOutlineInstagram size={25} />
            </span>
            <span>
              <AiOutlineTwitter size={25} />
            </span>
            <span>
              <BsFacebook size={25} />
            </span>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <span className="footer-header">Useful links</span>
        <span>Support</span>
        <span>Free Mobile App</span>
      </div>
      <hr />
      <div className="footer-lower">
        <span>Legal</span>
        <span>Privacy Center</span>
        <span>Privacy Policy</span>
        <span>Cookies</span>
        <span>About Ads</span>
        <span>Accessbility</span>
        <span className="copyright">@2023 Spotify AB</span>
      </div>
    </div>
  );
}
