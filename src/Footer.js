import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="back">
        <a href="#">Back to Top</a>
      </div>
      <div className="footer_1">
        <section>
          <h4 className="foot_header">Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
            <li>Amazon Science</li>
          </ul>
        </section>
        <section>
          <h4 className="foot_header">Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </section>
        <section>
          <h4 className="foot_header">Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Advertise your products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </section>
        <section>
          <h4 className="foot_header">Let Us Help You</h4>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Center</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
