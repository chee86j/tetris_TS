import React from "react";
import { Pause, Play } from "lucide-react";
import Timer from "./Timer";

type GameInfoProps = {
  level: number;
  score: number;
  totalLinesCleared: number;
  isPaused: boolean;
  isPlaying: boolean;
  resumeGame: () => void;
  pauseGame: () => void;
  startGame: () => void;
  toggleTheme: () => void;
};

const GameInfo: React.FC<GameInfoProps> = ({
  level,
  score,
  totalLinesCleared,
  isPaused,
  isPlaying,
  resumeGame,
  pauseGame,
  startGame,
  toggleTheme,
}) => {
  return (
    <div className="game-info">
      <div className="score">
        <div>Level:</div>
        <div className="value">{level}</div>
        Score:
        <div className="value">{score}</div>
        <div>Lines:</div>
        <div className="value">{totalLinesCleared}</div>
        <Timer isPaused={isPaused} />
      </div>

      <div className="custom">
        {isPlaying && isPaused && (
          <button onClick={resumeGame}>
            <Play size={18} strokeWidth={2} />
          </button>
        )}
        {isPlaying && !isPaused && (
          <button onClick={pauseGame}>
            <Pause size={18} strokeWidth={2} />
          </button>
        )}
        {isPlaying && !isPaused && (
          <button onClick={startGame}>New Game</button>
        )}
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </div>
  );
};

export default GameInfo;
