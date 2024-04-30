import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="#">Product 1</a>
            </li>
            <li>
              <a href="#">Product 2</a>
            </li>
            <li>
              <a href="#">Product 3</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright">
        <p>Copyright © 2023<span style={{color:"#4caf50", fontWeight:"bold"}}> Redux toolkit store.</span> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
