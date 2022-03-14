import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer_content">
          <div>
            <img className="logo_image " src="./image/logo.png"></img>
          </div>
          <div className="contacts">
            <h5>Контакты</h5>
            <h5>Тел.: +7 (701) 081-6040</h5>
            <h5>Email: info@smartmedservice.com</h5>
          </div>
          <div>
            <img className="logo_image" src="./image/footer.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer