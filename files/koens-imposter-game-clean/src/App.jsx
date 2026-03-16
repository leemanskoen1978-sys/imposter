import React, { useState, useEffect } from 'react';
import './App.css';
import { WORDS as DEFAULT_WORDS } from './words';
import StartScreen from './components/StartScreen';
import PlayerSetup from './components/PlayerSetup';
import NameSetup from './components/NameSetup';
import GameScreen from './components/GameScreen';
import DiscussionScreen from './components/DiscussionScreen';
import ResultScreen from './components/ResultScreen';
import WordEditor from './components/WordEditor';

export default function App() {
  // start = beginscherm,
  // setup = # spelers kiezen,
  // names = namen invullen (optioneel),
  // game = elke speler ziet zijn kaart (woord of IMPOSTER),
  // wordSettings = woordenlijst aanpassen,
  // discussion = iedereen overlegt zonder oplossing,
  // result = overzicht met woord + wie imposter was
  const [gameState, setGameState] = useState('start');
  const [playerCount, setPlayerCount] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [imposterIndex, setImposterIndex] = useState(-1);
  const [words, setWords] = useState(DEFAULT_WORDS);
  const [useNames, setUseNames] = useState(false);
  const [playerNames, setPlayerNames] = useState([]);
  const [turnOrder, setTurnOrder] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('imposterWords');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWords(parsed);
        }
      } catch {
        // ignore invalid stored data
      }
    }
  }, []);

  const updateWords = (newWords) => {
    setWords(newWords);
    localStorage.setItem('imposterWords', JSON.stringify(newWords));
  };

  const handleStartWithNames = () => {
    setUseNames(true);
    setGameState('setup');
  };

  const handleStartWithoutNames = () => {
    setUseNames(false);
    setGameState('setup');
  };

  const handlePlayerCountSelected = (count) => {
    setPlayerCount(count);
    if (useNames) {
      // Eerst namen vragen
      setGameState('names');
    } else {
      // Direct spelen met generieke spelers
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(randomWord);
      const randomImposter = Math.floor(Math.random() * count);
      setImposterIndex(randomImposter);
      setTurnOrder([...Array(count).keys()]);
      setCurrentPlayerIndex(0);
      setGameState('game');
    }
  };

  const handleNamesConfirmed = (names) => {
    setPlayerNames(names);
    const count = names.length;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    const randomImposter = Math.floor(Math.random() * count);
    setImposterIndex(randomImposter);
    // Willekeurige volgorde per potje
    const indices = [...Array(count).keys()];
    for (let i = indices.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setTurnOrder(indices);
    setCurrentPlayerIndex(0);
    setGameState('game');
  };

  const handlePlayerNext = () => {
    if (currentPlayerIndex < playerCount - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      // Alle spelers hebben hun kaart gezien: ga naar bespreek-scherm
      setGameState('discussion');
    }
  };

  const handleShowResult = () => {
    setGameState('result');
  };

  const handlePlayAgain = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    const randomImposter = Math.floor(Math.random() * playerCount);
    setImposterIndex(randomImposter);
    if (useNames && playerNames.length === playerCount) {
      // Nieuwe willekeurige volgorde bij elke ronde
      const indices = [...Array(playerCount).keys()];
      for (let i = indices.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setTurnOrder(indices);
    } else {
      setTurnOrder([...Array(playerCount).keys()]);
    }
    setCurrentPlayerIndex(0);
    setGameState('game');
  };

  const handleBackToStart = () => {
    setGameState('start');
    setPlayerCount(0);
    setCurrentPlayerIndex(0);
    setCurrentWord('');
    setImposterIndex(-1);
    setUseNames(false);
    setPlayerNames([]);
    setTurnOrder([]);
  };

  const handleEditWords = () => {
    setGameState('wordSettings');
  };

  return (
    <div className="app">
      {gameState === 'start' && (
        <StartScreen
          onStartWithNames={handleStartWithNames}
          onStartWithoutNames={handleStartWithoutNames}
          onEditWords={handleEditWords}
        />
      )}
      {gameState === 'setup' && <PlayerSetup onCountSelected={handlePlayerCountSelected} />}
      {gameState === 'names' && (
        <NameSetup playerCount={playerCount} onNamesConfirmed={handleNamesConfirmed} />
      )}
      {gameState === 'wordSettings' && (
        <WordEditor
          words={words}
          onSave={(list) => {
            updateWords(list);
            setGameState('start');
          }}
          onReset={() => updateWords(DEFAULT_WORDS)}
          onBack={() => setGameState('start')}
        />
      )}
      {gameState === 'game' && (
        <GameScreen
          playerIndex={currentPlayerIndex}
          playerCount={playerCount}
          playerName={
            useNames && turnOrder.length
              ? playerNames[turnOrder[currentPlayerIndex]]
              : null
          }
          word={currentWord}
          isImposter={
            (useNames && turnOrder.length
              ? turnOrder[currentPlayerIndex]
              : currentPlayerIndex) === imposterIndex
          }
          onNext={handlePlayerNext}
        />
      )}
      {gameState === 'discussion' && (
        <DiscussionScreen
          playerCount={playerCount}
          onReveal={handleShowResult}
        />
      )}
      {gameState === 'result' && (
        <ResultScreen
          word={currentWord}
          imposterIndex={imposterIndex}
          imposterName={useNames && playerNames.length ? playerNames[imposterIndex] : null}
          playerCount={playerCount}
          onPlayAgain={handlePlayAgain}
          onBackToStart={handleBackToStart}
        />
      )}
    </div>
  );
}
