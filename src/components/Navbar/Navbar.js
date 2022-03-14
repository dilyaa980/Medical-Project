import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function showNav() {
    if (open === false) {
      setOpen(true);
    } else if (open === true) {
      setOpen(false);
    }
  }

  return (
    <div className="container">
      <div className="Navbar">
        {/* <nav /> */}
        <img src="image/logo@3x.png" alt="" />

        <ul className={`li link ${open === true ? "show" : ""}`}>
          <li>
            <Link to="/"> О Компании</Link>
          </li>
          <li>
            <Link to="/">Лечение</Link>
          </li>
          <li>
            <Link to="/">Check Up</Link>
          </li>
          <li>
            <Link to="/"> Восточная медицина </Link>
          </li>
          <li>
            <Link to="/">Медицина будущего</Link>
          </li>
          <li>
            <Link to="/">Акции</Link>
          </li>
          <li>
            <Link to="/"> Контакты</Link>
          </li>
          {/* <button>Войти</button> */}
        </ul>
        <div className="Navbar_Button">
          <button className="btn-login">Войти</button>
          <div className="Navbar_Button_two">
            <button className="btn-login-two">
              <img className="btn-img" src="./image/Group.png"></img>Войти
            </button>
            {open ? (
              <img onClick={() => setOpen(false)} src="./image/X.png" />
            ) : (
              <img
                onClick={showNav}
                className="navbar-img"
                src="./image/hamburger.png"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
