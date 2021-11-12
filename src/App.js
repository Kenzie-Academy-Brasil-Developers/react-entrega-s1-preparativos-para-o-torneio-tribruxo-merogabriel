import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import Players from "./components/Players";
import Home from "./components/Home";

function App() {
  const [home, setHome] = useState(true);
  const [participantes, setParticipantes] = useState([]);
  const [escolhidos, setEscolhidos] = useState([]);

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) =>
        setParticipantes(response.filter((e) => e.image !== ""))
      )
      .catch((err) => console.log(err));
  }, []);

  function randomizar() {
    let players = participantes;
    const p1 = players[Math.floor(Math.random() * (players.length - 1))];
    players = players.filter((e) => e.house !== p1.house && e.name !== p1.name);
    const p2 = players[Math.floor(Math.random() * (players.length - 1))];
    players = players.filter((e) => e.house !== p2.house && e.name !== p2.name);
    const p3 = players[Math.floor(Math.random() * (players.length - 1))];
    setEscolhidos([p1, p2, p3]);
    setHome(false);
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
