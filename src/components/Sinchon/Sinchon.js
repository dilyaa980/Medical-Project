import "./Sinchon.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sinchon = () => {
  const [option, setOption] = useState("about");
  return (
    <div className="container">
      <div className="Sinchon">
        <div className="Sinchon_content">
          <h4 className="sinchon_name"> Синчон Северанс</h4>
          <h5 className="sinchon_subtitle">Severance Hospital</h5>
          <h6 className="sinchon_city">
            <img className="sinchon_pin " src="./image/pin.png"></img>Сеул,
            Южная Корея
          </h6>
          <h6 className="sinchon_location">
            0-1 Yonsei-ro, Sinchon-dong, Seodaemun-gu
          </h6>
          <h6 className="sinchon_location">
            <img className="star_img " src="./image/starone.png"></img> 5
            Отзывов
          </h6>
          <div className="sinchon_sections">
            <h6 className="options" onClick={() => setOption("about")}>
              О больнице
            </h6>
            <h6 className="options" onClick={() => setOption("prices")}>
              Цены
            </h6>
            <h6 className="options" onClick={() => setOption("doctors")}>
              Доктора
            </h6>
            <h6 className="options" onClick={() => setOption("feedback")}>
              Отзывы
            </h6>
          </div>
        </div>
        <div className="Sinchon_img">
          <img className="" src="./image/Sinchon.png"></img>
        </div>
      </div>

      {option === "about" && (
        <div>
          <div className="Sinchon_descr">
            <div className="Sinchon_descr_text">
              Больница Северанс системы здравоохранения Университета Йонсей -
              это больница, расположенная в Синчон-дон, округ Содаемун, Южная
              Корея. Это одна из старейших и крупнейших университетских клиник в
              Южной Корее. Он имеет 3700 коек, приблизительно 3 000 000
              амбулаторных больных и 1 000 000 стационарных больных в год.
              <br></br>
              <br></br>
              <h5>История</h5>
              <br></br>
              Первое медицинское учреждение западного направления в Корее было
              основано в 1885 году американским доктором-миссионером Алленом
              (Dr. Horace. N. Allen).<br></br>
              <br></br>
              При основании учреждение называлось «Кванхевон», затем его
              переименовали в «Чечжунвон», впоследствии медицинское учреждение
              превратилось в больницу «Северанс» и, наконец, сегодня - это
              Система Здравоохранения при университете «Ёнсе».<br></br>
              <br></br>
              «С любовью Божьей освободить человечество от болезней и страданий»
              - с таким девизом на протяжении 125 лет клиника несла служение
              людям. С верой, пронесенной через 125 лет существования, клиника
              выходя за пределы Восточной Азии, готова внести свой вклад в
              глобальное развитие медицинского обслуживания.
            </div>
            <div className="Sinchon_img_two">
              <img className="" src="./image/Sinchonbuild2.png"></img>
              <img className="img_three" src="./image/Sinchonbuild3.png"></img>
              <Link to="/Request">
                <button className="Send_request">Отправить запрос</button>
              </Link>
              
            </div>
          </div>
          <div className="Sinchon_desc_two">
            <br></br>
            <br></br>
            Первое медицинское учреждение западного направления в Корее было
            основано в 1885 году американским доктором-миссионером Алленом (Dr.
            Horace. N. Allen).<br></br>
            <br></br> При основании учреждение называлось «Кванхевон», затем его
            переименовали в «Чечжунвон», впоследствии медицинское учреждение
            превратилось в больницу «Северанс» и, наконец, сегодня - это Система
            Здравоохранения при университете «Ёнсе».<br></br>
            <br></br> «С любовью Божьей освободить человечество от болезней и
            страданий» - с таким девизом на протяжении 125 лет клиника несла
            служение людям. С верой, пронесенной через 125 лет существования,
            клиника выходя за пределы Восточной Азии, готова внести свой вклад в
            глобальное развитие медицинского обслуживания. Система
            Здравоохранения при университете «Ёнсе» включает в себя сеть
            лечебных учреждений: расположенные в районе «Синчон» непосредственно
            клиника «Северанс», пять узкоспециализированных медицинских центра,
            международный лечебно-диагностический центр для иностранных граждан,
            тренировочный центр «Да Винчи», Стоматологическая клиника, а также
            расположенные в районе Каннам клиника «Каннам Северанс», включающая
            три узкоспециализированных медицинских центра и две районные
            клиники. Хорошо налаженная сеть лечебных учреждений и
            высококачественное обслуживание каждого специализированного
            учреждения в отдельности – преимущество Системы Здравоохранения при
            университете «Ёнсе» и залог её надёжности.
            <br></br>
            <div className="Sinchon_desc_three">
              <br></br>
              <h5>О клинике</h5>
              <br></br>
              Клиника оснащена всевозможными приспособлениями для того, чтобы
              любой посетитель почувствовал себя здесь уютно и комфортно.
            </div>
          </div>
          <div className="Sinchon_desc_four">
            <div className="card_desc">
              <h5 className="card_title">Общественное питание</h5>
              <p className="card-text">
                В клинике расположены рестораны корейской, китайской, японской и
                европейской кухни, пицерия, кафе, снэк-бар.Возможна сервисная
                доставка.
              </p>
            </div>
            <div className="card_desc">
              <h5 className="card_title">Обзорная комната отдыха</h5>
              <p className="card-text">
                На 20-м этаже главного здания расположена обзорная комната
                отдыха, из которой открывается вид на реку Ханган и самое
                высокое 63-этажное здание в Корее. Здесь также можно выпить
                чашку горячего кофе или прохладительного напитка в обстановке
                уюта и комфорта.
              </p>
            </div>
            <div className="card_desc">
              <h5 className="card_title">Шопинг</h5>
              <p className="card-text">
                В окресностях больницы находятся большие универмаги и торговые
                центры (универмаг «Хёнде», «Греид - Март» и др.) Клиника
                находится вблизи крупного университетского городка, в одном из
                крупнейших районов города, поэтому, посетив здешние магазины, Вы
                обеспечите себе хороший шопинговый тур.
              </p>
            </div>
            <div className="card_desc">
              <h5 className="card_title">Банки</h5>
              <p className="card-text">
                На территории клиники расположены отделение банка и банкоматы,
                которые работают круглые сутки. Также можно воспользоваться
                банковским обслуживанием через интернет.
              </p>
            </div>
          </div>
        </div>
      )}
      {option === "prices" && (
        <div>
          <h6 className="price_title">
            <img className="sign_img " src="./image/sign.png"></img>Аллергология
          </h6>
          <div className="Sinchon_desc_price">
            <div className="card_desc_price">
              <div className="card-options">
                <p className="Card-name"> • Рак груди </p>
                <p className="Card-name">• Рак простаты </p>
                <p className="Card-name">•Рак легких </p>
                <p className="Card-name">• Рак груди </p>
                <p className="Card-name">• Рак простаты </p>
                <p className="Card-name">•Рак легких</p>
              </div>
              <div className="card-prices">
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000</p>
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000 </p>
              </div>
            </div>
            <div className="card_desc_price">
              <div className="card-options">
                <p className="Card-name">• Меланома</p>
                <p className="Card-name">• Рак желудка </p>
                <p className="Card-name">• Рак поджелудочной железы </p>
                <p className="Card-name">• Меланома </p>
                <p className="Card-name"> • Рак желудка</p>
                <p className="Card-name">• Рак поджелудочной железы</p>
              </div>
              <div className="card-prices">
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000</p>
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000 </p>
              </div>
            </div>
          </div>
          <div>
            <h6 className="price_title">
              {" "}
              <img className="sign_img " src="./image/singtwo.png"></img>Check
              Up
            </h6>
          </div>
          <div className="Sinchon_desc_price_two">
            <div className="card_desc_price">
              <div className="card-options">
                <p className="Card-name"> • Рак груди </p>
                <p className="Card-name">• Рак простаты </p>
                <p className="Card-name">•Рак легких </p>
                <p className="Card-name">• Рак груди </p>
                <p className="Card-name">• Рак простаты </p>
                <p className="Card-name">•Рак легких</p>
              </div>
              <div className="card-prices">
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000</p>
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000 </p>
              </div>
            </div>
            <div className="card_desc_price">
              <div className="card-options">
                <p className="Card-name"> • Рак груди </p>
                <p className="Card-name">• Рак простаты </p>
                <p className="Card-name">•Рак легких </p>
                <p className="Card-name">• Рак груди </p>
                <p className="Card-name">• Рак простаты </p>
                <p className="Card-name">•Рак легких</p>
              </div>
              <div className="card-prices">
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000</p>
                <p className="Card-name"> $1000 </p>
                <p className="Card-name">$1500</p>
                <p className="Card-name">$2000 </p>
              </div>
            </div>
          </div>
          <Link to="/Request">
          <div className="button_request_three">
            <button className="send">Отправить запрос</button>
          </div></Link>
        </div>
      )}
      {option === "doctors" && (
        <div>
          <div className="Sinchon_doctor_desc">
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
            <div className="doctor_desc">
              <div className="doctor_name">
                <div>
                  <img className="doc_img " src="./image/doctormask.png"></img>
                </div>
                <div>
                  <h5 className="doc">Sung Hoon Noh</h5>
                  <h5 className="direction">Oncosurgeon</h5>
                </div>
              </div>
              <p className="doc-text">Director of the Yonsei Cancer Center</p>
              {/* <h6 className="hospital">Severance Hospital</h6> */}
            </div>
          </div>
          <Link to="/Request">
          <div className="button_request_three">
            <button className="send">Отправить запрос</button>
          </div></Link>
        </div>
      )}
      {option === "feedback" && (
        <div>
          <div className="Sinchon_desc_four">
            <div className="card_desc">
              <h5 className="card_title_feedback">Akmaral:</h5>
              <img className="pin_img " src="./image/stargroup.png"></img>
              <p className="card-text">
                Клиника очень фешенебельная и мед персонал профессиональный и
                внимательный. Роза и Асель проделали огромную работу до приезда
                , отвечали быстро и чётко на все мои вопросы, а Айгерим
                постоянно была рядом на протяжении всего пребывания
              </p>
            </div>
            <div className="card_desc">
              <h5 className="card_title_feedback">Akmaral:</h5>
              <img className="pin_img " src="./image/stargroup.png"></img>
              <p className="card-text">
                Клиника очень фешенебельная и мед персонал профессиональный и
                внимательный. Роза и Асель проделали огромную работу до приезда
                , отвечали быстро и чётко на все мои вопросы, а Айгерим
                постоянно была рядом на протяжении всего пребывания
              </p>
            </div>
            <div className="card_desc">
              <h5 className="card_title_feedback">Akmaral:</h5>
              <img className="pin_img " src="./image/stargroup.png"></img>
              <p className="card-text">
                Клиника очень фешенебельная и мед персонал профессиональный и
                внимательный. Роза и Асель проделали огромную работу до приезда
                , отвечали быстро и чётко на все мои вопросы, а Айгерим
                постоянно была рядом на протяжении всего пребывания
              </p>
            </div>
            <div className="card_desc">
              <h5 className="card_title_feedback">Akmaral:</h5>
              <img className="pin_img " src="./image/stargroup.png"></img>
              <p className="card-text">
                Клиника очень фешенебельная и мед персонал профессиональный и
                внимательный. Роза и Асель проделали огромную работу до приезда
                , отвечали быстро и чётко на все мои вопросы, а Айгерим
                постоянно была рядом на протяжении всего пребывания
              </p>
            </div>
          </div>
          <Link to="/Request">
          <div className="button_request">
            <button className="send">Отправить запрос</button>
          </div></Link>
        </div>
      )}
    </div>
  );
};

export default Sinchon;
