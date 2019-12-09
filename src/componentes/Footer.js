import React, { Component } from "react";
import Scroll from "./Scroll";

export default class Footer extends Component {
  render() {
    return (
      <div className="text-center p-5 text-white">
        <h5>Marcelo Vasquez &reg; / ReactJS / Single Page Application</h5>
        <Scroll
          hacia="banner"
          clase="btn btn-info col-1 mt-2"
          texto="Volver arriba"
        />
      </div>
    );
  }
}
