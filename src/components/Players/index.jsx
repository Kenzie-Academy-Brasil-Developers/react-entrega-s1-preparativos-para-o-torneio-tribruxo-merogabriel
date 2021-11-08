import React from "react";

function index({ escolhidos, randomizar }) {
  return (
    <div className="game">
      <div className="cards">
        {escolhidos.map((e, index) => (
          <div className="card">
            <img src={e.image} alt=""></img>
            <div>
              {e.name}, {e.gender}
            </div>
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
