import React, { Component } from "react";

export default class Contacto extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <img
            src="https://image.flaticon.com/icons/svg/126/126516.svg"
            width="30"
            height="30"
            alt="Contacto"
            className="mr-2"
          />
          <h1>Contacto</h1>
        </div>{" "}
        <form>
          <div className="form-group col-12">
            <input
              className="form-control"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="form-group col-12">
            <input
              className="form-control"
              placeholder="Ingresa tu correo"
              type="email"
              required
            />
          </div>
          <div className="form-group col-12">
            <textarea
              className="form-control "
              placeholder="Tu mensaje"
              required
            />
          </div>
          <div className="text-center">
            <button className="btn btn-success col-6">Enviar mensaje</button>
          </div>
        </form>
      </div>
    );
  }
}
