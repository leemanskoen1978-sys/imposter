import React, { useState } from 'react';
import './PlayerSetup.css';

export default function NameSetup({ playerCount, onNamesConfirmed }) {
  const [names, setNames] = useState(Array.from({ length: playerCount }, () => ''));

  const handleChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  const allFilled = names.every((n) => n.trim().length > 0);

  return (
    <div className="player-setup screen">
      <h2>👥 Spelersnamen</h2>
      <p>Vul de namen van alle {playerCount} spelers in.</p>

      <div className="name-list">
        {names.map((name, index) => (
          <div key={index} className="name-row">
            <span className="player-count">Speler {index + 1}</span>
            <input
              type="text"
              className="name-input"
              value={name}
              placeholder={`Naam speler ${index + 1}`}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button
          className="button button-primary"
          disabled={!allFilled}
          onClick={() => onNamesConfirmed(names)}
        >
          START MET DEZE NAMEN
        </button>
      </div>
    </div>
  );
}

