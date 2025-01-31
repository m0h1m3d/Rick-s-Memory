function GameOver({setIsOver}) {
  return (
    <div className="gameOver">
      {/* <span>Game Over</span> */}
      <button onClick={()=> setIsOver(false)}>Restart Game</button>
    </div>
  );
}

export default GameOver;
