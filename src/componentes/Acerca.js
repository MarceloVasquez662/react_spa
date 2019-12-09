import React, { Component } from "react";
import LogoAcerca from "../imagenes/Acerca.svg";
import Card from "./Card";

export default class Acerca extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <img
            src={LogoAcerca}
            alt="Acerca de la pagina"
            width="30"
            height="30"
            className="mr-2"
          />
          <h1>Acerca de la pagina</h1>
        </div>
        <div className="row justify-content-center">
          <Card
            titulo="Primera pagina estatica creada con ReactJS"
            cuerpo="Luego de revisar lo mas importante de React, se aplica en esta pagina, dejando fuera algunas caracteristicas como React Router o el consumo de APIs. "
            imagen="https://image.flaticon.com/icons/svg/969/969958.svg"
          />
          <Card
            titulo="Los iconos utilizados pertenecen a Flaticon.es"
            cuerpo="No son de mi autoria, por lo que se pueden encontrar todos en su pagina. "
            imagen="https://image.flaticon.com/icons/svg/1443/1443367.svg"
          />
          <Card
            titulo="Componentes como estructura"
            cuerpo="La base son los componentes. Es por esto que la estructuracion se basa en estos. "
            imagen="https://image.flaticon.com/icons/svg/915/915492.svg"
          />
        </div>
      </div>
    );
  }
}
