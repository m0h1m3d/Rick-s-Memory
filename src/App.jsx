import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import GameOver from "./components/GameOver";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }

    getCharacters();
  }, []);

  return (
    <div className="container">
      {isOver && <div className="overlay"></div>}
      <h1>Rick&apos;s Memory</h1>
      <div className="cardContainer">
        <div className="score">
          <span>Score: {currentScore}</span> <br />
          <span>Highscore: {bestScore}</span>
        </div>
        <div className="cards">
          {characters.map((character, index) => {
            if (index > 3) return null;
            return (
              <Card
                characters={characters}
                setCharacters={setCharacters}
                character={character}
                key={character.id}
                setCurrentScore={setCurrentScore}
                clicked={clicked}
                setClicked={setClicked}
                setBestScore={setBestScore}
                currentScore={currentScore}
                setIsOver={setIsOver}
              />
            );
          })}
        </div>
      </div>

      {isOver && <GameOver setIsOver={setIsOver}/>}
    </div>
  );
}

export default App;
