function Card({
  character,
  characters,
  setCharacters,
  setCurrentScore,
  clicked,
  setClicked,
  setBestScore,
  currentScore,
  setIsOver,
}) {
  const shuffledchars = characters.sort(() => 0.5 - Math.random());

  function handleClick(e) {
    const clickedName = e.target.closest("div").id;

    if (!clicked.includes(clickedName)) {
      setClicked((prev) => [...prev, clickedName]);
      setCurrentScore((prev) => prev + 1);
    } else {
      console.log("Already clicked:", clickedName);
      console.log("game over");
      setBestScore(currentScore);
      setClicked([]);
      setCurrentScore(0);
      setIsOver(true);
    }

    setCharacters(shuffledchars);
  }

  return (
    <div className="card" onClick={(e) => handleClick(e)} id={character.name}>
      <img src={character.image} alt={character.name} />
      <span>{character.name}</span>
    </div>
  );
}

export default Card;
