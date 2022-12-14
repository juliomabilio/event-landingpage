import React from "react";
import "./style.css";
import { StaticImage } from "gatsby-plugin-image";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div>
          <StaticImage
            src="../../images/logo.png"
            placeholder="blurred"
            alt="imagem do apresentador"
            className="logo"
          />
        </div>
        <div className="conteudo-main">
          <h1>
            AONOG/<span>AOPF</span>
          </h1>
          <div className="date">
            <span>
              {" "}
              <AiOutlineCalendar /> 8 & 9 Dezembro 2022
            </span>
            <span>
              {" "}
              <GoLocation /> Hotel Palmeiras
            </span>
          </div>

          <p>
            É um evento anual que visa congregar todos os players e
            participantes das TICs através de Conferência & Workshop .
          </p>
          <button className="btn">
            <a href="https://events.ao.nog.community/event/1/registrations/1/">
              CADASTRA-SE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
