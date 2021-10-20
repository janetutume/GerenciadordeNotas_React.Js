import React, { Component } from "react";
import CardNotas from "../CardNotas";
import "./style.css";
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNotas/>
              <h2>hacktoberfest is the best</h2>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;