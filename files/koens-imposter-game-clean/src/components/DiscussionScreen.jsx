import React from 'react';
import './DiscussionScreen.css';

export default function DiscussionScreen({ playerCount, onReveal }) {
  return (
    <div className="discussion-screen screen">
      <h2>🕵️ Wie is de imposter?</h2>
      <p>
        Alle {playerCount} spelers hebben hun woord gezien.
        Bespreek nu samen wie jullie denken dat de imposter is.
      </p>
      <p className="discussion-tip">
        Als iedereen een verdachte heeft aangewezen, druk dan op de knop
        hieronder om de oplossing te tonen.
      </p>
      <button className="button button-primary" onClick={onReveal}>
        TOON OPLOSSING
      </button>
    </div>
  );
}

