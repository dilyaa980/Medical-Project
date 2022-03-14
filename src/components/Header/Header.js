import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="headerContent">
          <h1>Здоровье без границ</h1>
          <p>Поиск по клиникам,докторам и болезням</p>
          <div className="Practice-area">
            <h3>Направление:</h3>
            {/* <input placeholder=" Ключевое слово..." type="search" id=""></input> */}

            <select>
              <option>Ключевое слово...</option>
              

              <option>Ортопедия</option>
              <option>Оториноларингология </option>
              <option>Офтальмология</option>
              <option>Педиатрия</option>
              <option>Пульмонология</option>
              <option>Проктология</option>
              <option>Реабилитация</option>
              <option>Стоматология</option>
              <option>Ревматология</option>
              <option>Трансплантология</option>
              <option>Урология</option>
              <option>Флебология</option>
              <option>Хирургия</option>
              <option>Эндокринология</option>
            </select>
          </div>
          <div className="Select-country">
            <h4>Город:</h4>

            {/* <input placeholder=" Ключевое слово..." type="search" id=""></input> */}
            <select>
              <option>Ключевое слово...</option>
              <option>Андижанская область</option>
              <option>Бухарская область</option>
              <option>Джизакская область</option>
              <option>Кашкадарьинская область</option>
              <option>Навоийская область</option>
              <option>Наманганская область</option>
              <option>Самаркандская область</option>
              <option>Сурхандарьинская область</option>
              <option>Сырдарьинская область</option>
              <option>Ташкентская область</option>
              <option>Ферганская область</option>
              <option>Хорезмская область</option>
              <option>Республика Каракалпакстан</option>
              <option>Город Ташкент</option>
            </select>
          </div>
          <div className="buttons_search">
            <button className="btn-search">Найти</button>
          </div>
          <h2>-Поиск по Имени(ФИО)-</h2>
          <div className="Doctor">
            <h5>Доктор:</h5>
            {/* <input
              placeholder=" Ключевое слово... "
              type="search"
              id=""
            ></input> */}
            <select>
              <option>Ключевое слово...</option>
              <option>text2</option>
              <option>text3</option>
              <option>text4</option>
            </select>
          </div>
          <div className="buttons_search">
            <button className="btn-search">Найти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
