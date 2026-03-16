import React from 'react';
import './StartScreen.css';

export default function StartScreen({ onStartWithNames, onStartWithoutNames, onEditWords }) {
  return (
    <div className="start-screen screen">
      <h1>🎭 IMPOSTER</h1>
      <p className="tagline">Wie is de oplichter?</p>
      
      <div className="info-box">
        <p>📱 Een spel voor vrienden op je telefoon</p>
        <p>🎯 Één speler weet niet wat het woord is</p>
        <p>💬 Geef hints en ontmask de imposter!</p>
      </div>

      <button
        className="button button-primary button-start"
        onClick={onStartWithNames}
      >
        SPELEN MET NAMEN
      </button>

      <button
        className="button button-secondary button-start"
        onClick={onStartWithoutNames}
      >
        SPELEN ZONDER NAMEN
      </button>

      <button
        className="button button-secondary button-start"
        onClick={onEditWords}
      >
        WOORDENLIJST AANPASSEN
      </button>

      <p className="subtitle">Zorg dat de telefoon goed wordt doorgegeven! 📲</p>
    </div>
  );
}
