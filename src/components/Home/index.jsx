import React from "react";

function index({randomizar}) {
  return (
    <div className="home">
      <h1>Torneio tribruxo</h1>
      <h2>Clique no botao pra encontrar os feiticeiros!</h2>
      <button onClick={randomizar}>Comecar!</button>
    </div>
  );
}

export default index;
