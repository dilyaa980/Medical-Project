import React from "react";
import "./Option.scss";
import {Link} from "react-router-dom";
const Option = () => {
  return (
    <div className="container">
      
      <div className="Menu-Clinics ">
        <div className="cardone">
         
          <Link to="/Sinchon"><h6>Синчон Северанс</h6> </Link>
          <h5 className="card_subtitle_one">Severance Hospital</h5>
          <h5 className="card_subtitle_two">
            <img className="pin_img " src="./image/pin.png"></img>
            Сеул,Южная Корея
          </h5>
          <img className="star_img " src="./image/starone.png"></img>
          
        </div>
        <div className="cardtwo">
          <h6> Медицинский центр Самсунг</h6>
          <h5 className="card_subtitle_one">Samsung Medical Center</h5>
          <h5 className="card_subtitle_two">
            <img className="pin_img " src="./image/pin.png"></img>
            Сеул, Южная Корея
          </h5>
          <img className="star_img " src="./image/startwo.png"></img>
          
        </div>
        <div className="cardthree">
          <h6> Кангнам Северанс</h6>
          <h5 className="card_subtitle_one">Gangnam Severance Hospital</h5>
          <h5 className="card_subtitle_two">
            <img className="pin_img " src="./image/pin.png"></img>
            Сеул, Южная Корея
          </h5>
          <img className="star_img " src="./image/starone.png"></img>
          
        </div>
        <div className="cardfour">
          <h6>
            {" "}
            Оздоровительный <br></br> Центр «Чаум»
          </h6>
          <h5 className="card_subtitle_one">Chaum Centerl</h5>
          <h5 className="card_subtitle_two">
            <img className="pin_img " src="./image/pin.png"></img>
            Сеул, Южная Корея
          </h5>
          <img className="star_img " src="./image/starone.png"></img>
          
        </div>
      </div>
    </div>
  );
};

export default Option;
