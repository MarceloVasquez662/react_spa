import React from "react";

function Card(props) {
  return (
    <article className="m-3 p-3 text-center">
      <div className="imagenCard">
        <img
          src={props.imagen}
          alt="React"
          width="30%"
          height="30%"
          className="mx-auto"
        />
      </div>
      <div className="textoCard">
        <h5>{props.titulo}</h5>
        <p>{props.cuerpo}</p>
      </div>
    </article>
  );
}

export default Card;
