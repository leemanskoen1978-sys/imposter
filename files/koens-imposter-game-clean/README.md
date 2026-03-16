# 🎭 Koen's Imposter Game

Een dynamisch en leuk spel voor vrienden op je telefoon! Wie is de oplichter?

## 🎮 Hoe werkt het?

1. **Start het spel** - Kies het aantal spelers (3-8)
2. **Telefoon gaat rond** - Elke speler ziet zijn woord (behalve de imposter die "????" ziet)
3. **Twee rondes hints** - Alle spelers geven om de beurt een hintwijs
4. **Mondeling stemmen** - Wie is de imposter? Stemmers kiezen samen
5. **Reveal** - Ontdek wie de imposter was!

### Speelmechaniek

- **Imposter**: Ziet "????" en weet niet wat het woord is. Moet andere spelers overtuigen dat hij het wel weet
- **Normale spelers**: Zien het woord en moeten hints geven die ermee verband houden
- **Hints**: Elke speler geeft in ronde 1 en 2 één woord/hintwijs
- **Stemming**: Mondeling - geen app-stemming nodig

## 🚀 Setup & Installatie

### Vereisten
- Node.js 16+ en npm

### Stappen

```bash
# Clone de repo
git clone https://github.com/yourusername/koens-imposter-game.git
cd koens-imposter-game

# Dependencies installeren
npm install

# Dev server starten (localhost:5173)
npm run dev

# Production build maken
npm run build

# Preview van build
npm run preview
```

## 📱 Op je iPhone gebruiken

### Optie 1: Localhost (WiFi)
1. Start dev server: `npm run dev`
2. Vind je IP adres: `ipconfig getifaddr en0` (Mac) of `ipconfig` (Windows)
3. Open op iPhone in Safari: `http://YOUR_IP:5173`
4. Tap share → "Voeg toe aan startscherm"
5. Speel als echte app!

### Optie 2: Deploy naar Netlify (gratis)
1. Maak Netlify account aan (netlify.com)
2. Connect je GitHub repo
3. Netlify bouwt en host het automatisch
4. Deel de link met vrienden!

### Optie 3: Deploy naar Vercel (gratis)
1. Maak Vercel account aan (vercel.com)
2. Connect je GitHub repo
3. Deploy - klaar!

## 📝 Woorden aanpassen

De woordenlijst zit in `src/words.js`. Je kan deze aanpassen en opnieuw deployen:

```javascript
export const WORDS = [
  "Banaan",
  "Astronaut",
  "Jouw eigen woord",
  // ... voeg meer toe
];
```

**Tip**: Zorg dat je minstens 100 woorden hebt!

## 🎨 Design Aanpassen

- **Kleuren**: `src/App.css` en `src/components/*.css`
- **Animaties**: In CSS onder `@keyframes`
- **Layout**: React componenten in `src/components/`

## 🗂️ Project Structuur

```
koens-imposter-game/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx
│   │   ├── PlayerSetup.jsx
│   │   ├── GameScreen.jsx
│   │   └── ResultScreen.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── words.js
├── public/
│   ├── manifest.json (PWA)
│   └── sw.js (Service Worker)
├── index.html
├── vite.config.js
└── package.json
```

## 🔧 Technologie

- **React 18** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling met animaties
- **PWA** - Installeerbaar op iPhone

## 🐛 Troubleshooting

### App laadt niet op iPhone
- Zorg dat je op dezelfde WiFi zit als je computer
- Probeer de cache leeg te maken (Safari → Settings → Advanced → Website Data)
- Versuiker cookies en cachegegevens

### Woorden laden niet
- Check `src/words.js` of het bestand bestaat
- Zorg dat woorden tussen aanhalingstekens staan

### Service Worker werkt niet
- Open DevTools (F12) en check Console
- Service Workers werken alleen over HTTPS of localhost

## 📞 Support

Voor bugs of vragen: open een issue op GitHub!

## 📄 Licentie

MIT - Vrij te gebruiken!

---

Veel plezier met het spel! 🎉

**Made with ❤️ by Koen**
