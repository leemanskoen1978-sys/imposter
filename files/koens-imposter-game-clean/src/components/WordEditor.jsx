import React, { useState } from 'react';
import './PlayerSetup.css';

export default function WordEditor({ words, onSave, onReset, onBack }) {
  const [text, setText] = useState(words.join('\n'));

  const handleSave = () => {
    const list = text
      .split('\n')
      .map((w) => w.trim())
      .filter(Boolean);

    if (list.length > 0) {
      onSave(list);
    }
  };

  return (
    <div className="player-setup screen">
      <h2>📝 Woordenlijst</h2>
      <p>Eén woord per regel. Lege regels worden genegeerd.</p>

      <textarea
        className="name-input"
        style={{ width: '100%', minHeight: 260, resize: 'vertical' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="action-buttons">
        <button className="button button-primary" onClick={handleSave}>
          OPSLAAN
        </button>
        <button className="button button-secondary" onClick={onReset}>
          TERUG NAAR STANDAARD
        </button>
        <button className="button button-secondary" onClick={onBack}>
          TERUG
        </button>
      </div>
    </div>
  );
}

