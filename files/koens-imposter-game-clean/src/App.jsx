import React, { useState, useEffect } from 'react';
import './App.css';
import { WORDS } from './words';
import StartScreen from './components/StartScreen';
import PlayerSetup from './components/PlayerSetup';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const [gameState, setGameState] = useState('start'); // start, setup, game, result
  const [playerCount, setPlayerCount] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [imposterIndex, setImposterIndex] = useState(-1);
  const [round, setRound] = useState(0); // 0 or 1
  const [gameHistory, setGameHistory] = useState([]);

  const handleStartGame = () => {
    setGameState('setup');
  };

  const handlePlayerCountSelected = (count) => {
    setPlayerCount(count);
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    const randomImposter = Math.floor(Math.random() * count);
    setImposterIndex(randomImposter);
    setCurrentPlayerIndex(0);
    setRound(0);
    setGameState('game');
  };

  const handlePlayerNext = () => {
    if (currentPlayerIndex < playerCount - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      // All players have given clues in this round
      if (round === 0) {
        setRound(1);
        setCurrentPlayerIndex(0);
      } else {
        // Both rounds done, show result screen
        setGameState('result');
      }
    }
  };

  const handlePlayAgain = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    const randomImposter = Math.floor(Math.random() * playerCount);
    setImposterIndex(randomImposter);
    setCurrentPlayerIndex(0);
    setRound(0);
    setGameState('game');
  };

  const handleBackToStart = () => {
    setGameState('start');
    setPlayerCount(0);
    setCurrentPlayerIndex(0);
    setCurrentWord('');
    setImposterIndex(-1);
    setRound(0);
  };

  return (
    <div className="app">
      {gameState === 'start' && <StartScreen onStart={handleStartGame} />}
      {gameState === 'setup' && <PlayerSetup onCountSelected={handlePlayerCountSelected} />}
      {gameState === 'game' && (
        <GameScreen
          playerIndex={currentPlayerIndex}
          playerCount={playerCount}
          word={currentWord}
          isImposter={currentPlayerIndex === imposterIndex}
          round={round}
          onNext={handlePlayerNext}
        />
      )}
      {gameState === 'result' && (
        <ResultScreen
          word={currentWord}
          imposterIndex={imposterIndex}
          playerCount={playerCount}
          onPlayAgain={handlePlayAgain}
          onBackToStart={handleBackToStart}
        />
      )}
    </div>
  );
}
