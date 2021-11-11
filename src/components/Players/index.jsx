import React from "react";
import "./styles.css";

function index({ escolhidos, randomizar }) {
  return (
    <div className="game">
      <div className="cards">
        {escolhidos.map((e, index) => (
          <div className="card" key={index}>
            <img src={e.image} alt=""></img>
            <div>
              {e.name}, {e.gender}
            </div>
            <p>{e.house}</p>
          </div>
        ))}
      </div>  
      <button className="tentarNov" onClick={randomizar}>
        Tentar novamente
      </button>
    </div>
  );
}

export default index;
