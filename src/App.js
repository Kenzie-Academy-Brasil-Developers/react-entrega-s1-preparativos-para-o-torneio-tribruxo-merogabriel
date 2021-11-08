import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import Players from "./components/Players";
import Home from "./components/Home";
import Game from "./components/Game";

function App() {
  const [home, setHome] = useState(true);
  const [participantes, setParticipantes] = useState([]);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [escolhidos, setEscolhidos] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
      .then((response) => response.json())
      .then((response) => setParticipantes(response))
      .catch((err) => console.log(err));
  }, []);

  function randomizar() {
    setParticipantes(participantes.filter(elm => elm.img !== ""))
    let ran1 = Math.floor(Math.random() * 25);
    let ran2 = Math.floor(Math.random() * 25);
    let ran3 = Math.floor(Math.random() * 25);

    setPlayer1(participantes[ran1]);
    setPlayer2(participantes[ran2]);
    setPlayer3(participantes[ran3]);
    setEscolhidos([player1, player2, player3]);
    if (home) {
      setHome(false)
    }
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
