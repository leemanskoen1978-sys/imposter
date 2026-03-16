import React, { useState } from 'react';
import './PlayerSetup.css';

export default function PlayerSetup({ onCountSelected }) {
  const [selectedCount, setSelectedCount] = useState(null);

  const playerOptions = [3, 4, 5, 6, 7, 8];

  return (
    <div className="player-setup screen">
      <h2>🎮 Hoeveel spelers?</h2>
      <p>Kies het aantal deelnemers aan het spel</p>

      <div className="player-grid">
        {playerOptions.map((count) => (
          <button
            key={count}
            className={`player-option ${selectedCount === count ? 'selected' : ''}`}
            onClick={() => setSelectedCount(count)}
          >
            <span className="player-icon">👥</span>
            <span className="player-count">{count}</span>
          </button>
        ))}
      </div>

      {selectedCount && (
        <div className="action-buttons">
          <button
            className="button button-primary"
            onClick={() => onCountSelected(selectedCount)}
          >
            SPEL STARTEN MET {selectedCount} SPELERS
          </button>
        </div>
      )}

      <p className="subtitle">
        Tip: Met 4-6 spelers is het spel het meest leuk! 🎉
      </p>
    </div>
  );
}
