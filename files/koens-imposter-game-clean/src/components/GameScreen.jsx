import React, { useState, useEffect } from 'react';
import './GameScreen.css';

export default function GameScreen({
  playerIndex,
  playerCount,
  playerName,
  word,
  isImposter,
  onNext,
}) {
  const [showWord, setShowWord] = useState(false);

  // Elke keer als de telefoon naar een nieuwe speler gaat,
  // begint het scherm opnieuw met een verborgen woord.
  useEffect(() => {
    setShowWord(false);
  }, [playerIndex]);

  const handleWordReveal = () => {
    setShowWord(true);
  };

  const handleNextPlayer = () => {
    // Verberg het woord voordat de telefoon wordt doorgegeven
    setShowWord(false);
    onNext();
  };

  return (
    <div className="game-screen screen">
      <div className="phase word-reveal">
        <h2>{playerName || `Speler ${playerIndex + 1}`}</h2>
        {!showWord && (
          <p className="player-intro">
            Alleen jij mag nu kijken.
            <br />
            Volg de stappen hieronder.
          </p>
        )}
        <div className={`word-box ${showWord ? 'revealed' : ''}`}>
          {showWord ? (
            <div className="word-content">
              {isImposter ? (
                <div className="imposter-view">
                  <p className="question-mark">????</p>
                  <p className="imposter-msg">Je bent de IMPOSTER! 🎭</p>
                  <p className="imposter-hint">
                    Je ziet het woord niet.<br />
                    Probeer niet ontmaskerd te worden!
                  </p>
                </div>
              ) : (
                <p className="word-text">{word}</p>
              )}
            </div>
          ) : (
            <div className="reveal-instruction">
              <p className="reveal-title">Stap 1</p>
              <p>Houd het scherm dicht bij je en zorg dat niemand meekijkt.</p>
              <p className="small">Druk daarna op de grote gele knop hieronder.</p>
            </div>
          )}
        </div>

        {!showWord && (
          <button
            className="button button-primary reveal-btn"
            onClick={handleWordReveal}
          >
            MIJN KAART BEKIJKEN
          </button>
        )}

        {showWord && (
          <button
            className="button button-secondary"
            onClick={handleNextPlayer}
          >
            TELEFOON DOORGEVEN AAN VOLGENDE
          </button>
        )}

        <p className="subtitle">
          Er zijn {playerCount} spelers. Eén van hen is de imposter.
        </p>
      </div>
    </div>
  );
}
