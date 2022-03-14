import React from "react";
import "./Directions.scss";
import { Link } from "react-router-dom";

const Directions = () => {
  return (
    <div className="container">
      <div className="Directions">
        <div className="box">
          <div className="card-title">
            <img className="icon_img " src="./image/sign.png"></img>Онкология
          </div>
          <div className="subdirections">
            <p>• Рак груди </p>
            <p>• Рак простаты </p>
            <p>• Рак легких</p>
            <p>• Меланома</p>
            <p>• Рак желудка</p>
            <p> • Рак поджелудочной железы</p>
          </div>
          <Link to="/List">
          <div className="Button_show">
            <button className="btn-show">Показать весь список</button>
          </div></Link>
        </div>
        <div className="box">
          <div className="card-title">
            {" "}
            <img className="icon_img " src="./image/2.png"></img>Check Up
          </div>
          <div className="subdirections">
            <p>• Мужская </p>
            <p> • Женская </p>
            <p> • Детская </p>
            <p>• Специализированная</p>
          </div>{" "}
          <div className="Button_show">
            <button className="btn-show">Показать весь список</button>
          </div>
        </div>
        <div className="box">
          <div className="card-title">
            <img className="icon_img  " src="./image/3.png"></img>Красота
          </div>
          <div className="subdirections">
            <p>• Увеличение груди</p> <p>• Абдоминопластика </p>
            <p>• Anti age </p> <p>• Блефаропластика</p>
          </div>
          <div className="Button_show">
            <button className="btn-show">Показать весь список</button>
          </div>
        </div>
        <div className="box">
          <div className="card-title">
            <img className="icon_img " src="./image/4.png"></img>Медицина
            будущего{" "}
          </div>
          <div className="subdirections">
            <p>• Лечение стволовыми</p>
            <p>• ДНК тест </p>
            <p>• Определение рака по моче</p>
          </div>
          <div className="Button_show">
            <button className="btn-show">Показать весь список</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
