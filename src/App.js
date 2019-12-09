import React, { Component } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import Acerca from "./componentes/Acerca";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Navbar />
          <Banner
            titulo="Bienvenido a mi primera SPA"
            subtitulo="Averigua mas acerca de la pagina en la seccion 'Acerca de'"
            subtitulo2="Ademas puedes contactarte con nosotros en la seccion 'Contacto'"
          />
        </div>
        <div className="acercade">
          <Acerca />
        </div>
        <hr width="80%" />
        <div className="contacto">
          <Contacto />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
