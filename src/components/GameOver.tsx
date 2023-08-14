import React from "react";

interface GameOverProps {
  score: number;
  startGame: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, startGame }) => {
  return (
    <div className="game-over">
      Game Over
      <p className="earnedScore">Your Score: {score}</p>
      <button onClick={startGame}>Start New Game</button>
    </div>
  );
};

export default GameOver;