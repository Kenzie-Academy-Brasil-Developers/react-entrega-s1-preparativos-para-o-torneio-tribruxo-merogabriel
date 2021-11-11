import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import Players from "./components/Players";
import Home from "./components/Home";

function App() {
  const [home, setHome] = useState(true);
  const [participantes, setParticipantes] = useState([]);
  const [escolhidos, setEscolhidos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) =>
        setParticipantes(response.filter((e) => e.image !== ""))
      )
      .catch((err) => console.log(err));
  }, []);

  function randomizar() {
    let players = participantes
    const p1 = participantes[Math.floor(Math.random() * (11 - 0 + 1) + 0)];
    const p2 = participantes[Math.floor(Math.random() * (11 - 0 + 1) + 0)];
    const p3 = participantes[Math.floor(Math.random() * (11 - 0 + 1) + 0)];

    setEscolhidos([...escolhidos, players]);
  }

  return (
    <div className="App">
      {home ? (
        <Home randomizar={randomizar}></Home>
      ) : (
        <Players escolhidos={escolhidos} randomizar={randomizar}></Players>
      )}
    </div>
  );
}

export default App;
