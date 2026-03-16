import React from 'react';
import './StartScreen.css';

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen screen">
      <h1>🎭 IMPOSTER</h1>
      <p className="tagline">Wie is de oplichter?</p>
      
      <div className="info-box">
        <p>📱 Een spel voor vrienden op je telefoon</p>
        <p>🎯 Één speler weet niet wat het woord is</p>
        <p>💬 Geef hints en ontmask de imposter!</p>
      </div>

      <button className="button button-primary button-start" onClick={onStart}>
        SPEL STARTEN
      </button>

      <p className="subtitle">Zorg dat de telefoon goed wordt doorgegeven! 📲</p>
    </div>
  );
}
