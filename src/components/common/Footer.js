import React from 'react';

export default function Footer() {
  return(
    <div className="footer">
      <img className="footer-main" src='/assets/images/Footer-main.png'/>
      <img className="footer-gradient" src='/assets/images/Footer-gradient.png'/>
      <div className="footer-links">
        <a href="#">Contact</a>
        <a href="#">Donate</a>
        <a href="#">About us</a>
        <a href="#">Download our app</a>
        <a href="#"><img className="twitter" src="/assets/images/008-twitter.png" /></a>
        <a href="#"><img className="instagram" src="/assets/images/029-instagram.png" /></a>
        <a href="#"><img className="facebook" src="/assets/images/036-facebook.png" /></a>
      </div>
    </div>
  );
}
