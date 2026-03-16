import React from 'react';
import './ResultScreen.css';

export default function ResultScreen({
  word,
  imposterIndex,
  playerCount,
  onPlayAgain,
  onBackToStart,
}) {
  return (
    <div className="result-screen screen">
      <h1>🎬 RONDE VOORBIJ!</h1>

      <div className="result-content">
        <div className="result-box word-reveal-box">
          <p className="label">Het woord was:</p>
          <p className="revealed-word">{word}</p>
        </div>

        <div className="result-box imposter-reveal-box">
          <p className="label">De IMPOSTER was:</p>
          <p className="imposter-number">SPELER {imposterIndex + 1}</p>
        </div>

        <div className="stats-box">
          <p>👥 <strong>{playerCount}</strong> spelers speelden</p>
          <p>🎯 <strong>1</strong> imposter onthult</p>
          <p>💬 <strong>2</strong> rondes hinten</p>
        </div>
      </div>

      <div className="action-buttons">
        <button className="button button-primary" onClick={onPlayAgain}>
          VOLGENDE RONDE
        </button>
        <button className="button button-secondary" onClick={onBackToStart}>
          TERUG NAAR START
        </button>
      </div>

      <p className="subtitle">Goed gedaan! Klaar voor nog een potje? 🎉</p>
    </div>
  );
}
