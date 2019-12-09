import React, { Component } from "react";
import Scroll from "./Scroll";

export default class Banner extends Component {
  render() {
    return (
      <div className="textoBanner">
        <div className="hps">
          <h1>{this.props.titulo}</h1>
          <p>
            {this.props.subtitulo} <br /> {this.props.subtitulo2}{" "}
          </p>
        </div>
        <Scroll
          hacia="acercade"
          clase="btn btn-success mr-2 col-4 mb-5"
          texto="Acerca de la pagina"
        />
        <Scroll
          hacia="contacto"
          clase="btn btn-info col-4 mb-5"
          texto="Contactanos"
        />
      </div>
    );
  }
}
