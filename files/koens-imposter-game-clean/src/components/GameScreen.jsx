import React, { useState, useEffect } from 'react';
import './GameScreen.css';

export default function GameScreen({
  playerIndex,
  playerCount,
  word,
  isImposter,
  round,
  onNext,
}) {
  const [showWord, setShowWord] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [gamePhase, setGamePhase] = useState('intro'); // intro, word, ready, clue, wait

  useEffect(() => {
    if (gamePhase === 'intro' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gamePhase === 'intro' && countdown === 0) {
      setGamePhase('word');
    }
  }, [countdown, gamePhase]);

  const handleWordSeen = () => {
    setGamePhase('ready');
  };

  const handleReadyToContinue = () => {
    setGamePhase('clue');
  };

  const handleClueSaid = () => {
    setGamePhase('wait');
  };

  return (
    <div className="game-screen screen">
      {gamePhase === 'intro' && (
        <div className="phase intro">
          <h2>Speler {playerIndex + 1}</h2>
          <div className="countdown-circle">
            <span className="countdown-number">{countdown}</span>
          </div>
          <p>Zet je telefoon tegen je oor en wacht tot {countdown === 0 ? '0' : countdown}</p>
        </div>
      )}

      {gamePhase === 'word' && (
        <div className="phase word-reveal">
          <h2>Jouw woord:</h2>
          <div className={`word-box ${showWord ? 'revealed' : ''}`}>
            {showWord ? (
              <div className="word-content">
                {isImposter ? (
                  <div className="imposter-view">
                    <p className="question-mark">????</p>
                    <p className="imposter-msg">Je bent de IMPOSTER! 🎭</p>
                    <p className="imposter-hint">
                      Je weet niet wat het woord is.<br />
                      Zorg dat de anderen je niet ontmaskeren!
                    </p>
                  </div>
                ) : (
                  <p className="word-text">{word}</p>
                )}
              </div>
            ) : (
              <div className="reveal-instruction">
                <p>👆 Tap om je woord te zien</p>
                <p className="small">Zorg dat niemand meekijkt!</p>
              </div>
            )}
          </div>

          {!showWord && (
            <button
              className="button button-primary reveal-btn"
              onClick={handleWordSeen}
            >
              WOORD TONEN
            </button>
          )}

          {showWord && (
            <button
              className="button button-secondary"
              onClick={handleReadyToContinue}
            >
              BEGREPEN!
            </button>
          )}
        </div>
      )}

      {gamePhase === 'ready' && (
        <div className="phase ready">
          <h2>✋ Zet je telefoon weg</h2>
          <p>Speel samen!</p>
          <div className="game-info">
            <p>
              <strong>Ronde {round + 1} van 2</strong>
            </p>
            <p className="instruction">
              {isImposter
                ? 'Je bent de imposter. Zeg iets dat met het woord te maken heeft!'
                : 'Zeg één woord/hinwijs dat met het woord te maken heeft.'}
            </p>
          </div>
          <button className="button button-primary" onClick={handleClueSaid}>
            IK HEB MIJN HINT GEGEVEN
          </button>
        </div>
      )}

      {gamePhase === 'clue' && (
        <div className="phase wait-other">
          <div className="waiting-indicator">
            <div className="spinner"></div>
            <h2>Volgende speler...</h2>
            <p>
              Geef je telefoon door aan Speler {playerIndex + 2} (van {playerCount})
            </p>
          </div>
          <button
            className="button button-secondary button-small"
            onClick={onNext}
          >
            VOLGENDE
          </button>
        </div>
      )}
    </div>
  );
}
