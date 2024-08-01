import React, {useState, useEffect} from "react";
import Pizzas from "../shared/Pizzas";

const Listagem = () => {

    const ItensLista = () => Pizzas.map(
        pizza => 
        <li style={{listStyle: 'none'}}>
           <img src={pizza.imagem} 
           alt={pizza.nome}
           style={{
            width: "150",
            height: "100px",
            borderRadius: "8px",
            margin: "0px",
            }}
            /> 
        </li>
    )
    return (
        <>
          <h2>Pizzas ITB</h2>
          <ItensLista/>
        </>
    )
}

export default Listagem