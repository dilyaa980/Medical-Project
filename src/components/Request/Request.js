import React from "react";
import "./Request.scss";
const Request = () => {
  return (
    <div>
      <div className="container">
        <div className="Request_page">
          <h1>Отправить запрос</h1>
          <div className="Request_content">
            <div>
              <h5 className="request_title">Ваше Имя</h5>
              <input placeholder=" Ваше Имя..." type="search" id=""></input>
            </div>
            <div>
              <h5 className="request_title">Email</h5>
              <input placeholder=" Email..." type="search" id=""></input>
            </div>
            <div>
              <h5 className="request_title">Телефон</h5>
              <input placeholder="Телефон..." type="search" id=""></input>
            </div>
          </div>
          <div>
            <h5 className="request_title">Сообщение</h5>
            <input
              className="message_request"
              placeholder=""
              type="search"
              id=""
            ></input>
          </div>
          {/* <h6 className="agreement">Согласен с условия и правилами сайта</h6> */}
          <input
            style={{ width: "15px", height: "15px", marginRight: "10px" }}
            type="checkbox"
          />
          <span className="agreement">
            Согласен с условия и правилами сайта
          </span>

          <div className="button_request_four">
            <button className="send">Отправить запрос</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
