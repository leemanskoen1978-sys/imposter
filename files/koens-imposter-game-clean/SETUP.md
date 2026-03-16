# 🎭 KOEN'S IMPOSTER GAME - SETUP GUIDE

## ✅ Je app is klaar!

Hier's wat je hebt:
- ✨ Volledig React app met Vite
- 🎮 4 speelschermen (Start, Setup, Game, Result)
- 📱 PWA - installeerbaar op iPhone
- 🎨 Donker design met goud accenten + animaties
- 📝 100 Nederlandse woorden
- 🔄 Alles offline werkend

---

## 📋 CHECKLIST

### Wat je nodig hebt
- [ ] Node.js 16+ (download van https://nodejs.org)
- [ ] Git (voor GitHub)
- [ ] Een GitHub account (gratis op https://github.com)
- [ ] Je iPhone (voor testen)

### Stap 1: Repository aanmaken op GitHub

1. Ga naar https://github.com/new
2. **Repository name**: `koens-imposter-game`
3. Kies **Public** (zodat vrienden het kunnen zien)
4. Zet **✓ Add a README file**
5. Klik "Create repository"

### Stap 2: Project lokaal instellen

```bash
# Clone je nieuwe repo
git clone https://github.com/YOUR_USERNAME/koens-imposter-game.git
cd koens-imposter-game

# Installeer dependencies
npm install

# Start dev server
npm run dev
```

Je ziet:
```
  ➜  Local:   http://localhost:5173/
```

**Open in je browser: http://localhost:5173** 🎉

### Stap 3: Op je iPhone testen

**Optie A: WiFi (snelste)**

1. Vind je IP:
   - **Mac**: `ipconfig getifaddr en0`
   - **Windows**: `ipconfig` (zoek IPv4)
   
2. Op je iPhone in Safari: `http://YOUR_IP:5173`
   (bijv. `http://192.168.1.100:5173`)

3. Share → "Voeg toe aan startscherm" → Toevoegen

**Klaar!** Je hebt een echte app op je iPhone! 📲

**Optie B: Deploy naar Netlify (gratis + online)**

1. Push naar GitHub:
   ```bash
   git add .
   git commit -m "First commit"
   git push
   ```

2. Ga naar https://netlify.com → Inloggen met GitHub

3. "New site from Git" → Kies je repo

4. Netlify bouwt en deploy automatisch!

5. Je krijgt een URL: `https://koens-imposter-game.netlify.app`

---

## 🎮 GAME TESTÉN

### Lokaal (je computer)

```bash
npm run dev
```

→ Ga naar http://localhost:5173 in je browser

### Op iPhone (WiFi)

1. Zorg dev server draait (`npm run dev`)
2. Get IP adres van je Mac/Windows
3. Open `http://YOUR_IP:5173` in Safari
4. Voeg toe aan startscherm

### Online (Netlify)

1. Deploy naar Netlify (zie stap hierboven)
2. Deel de link: `https://koens-imposter-game.netlify.app`
3. Iedereen kan direct spelen!

---

## 📝 WOORDEN AANPASSEN

Open: **src/words.js**

```javascript
export const WORDS = [
  "Banaan",
  "Appel",
  "Astronaut",
  // Voeg je eigen woorden toe:
  "Mijn woord 1",
  "Mijn woord 2",
];
```

Sla op → Browser refreshed automatisch!

**Tip**: Zorg dat je minstens 100 woorden hebt. Mix:
- 🍎 Fruit/groente
- 🦁 Dieren
- 👨‍⚕️ Beroepen
- 🌍 Plaatsen
- 🎮 Activiteiten
- 🏠 Voorwerpen

---

## 🎨 DESIGN AANPASSEN

### Kleuren veranderen

**src/App.css**:
```css
/* Verander #ffd700 naar je favoriete kleur */
background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
```

### Animaties aanpassen

In elk `.css` bestand:
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);  /* Verhoog dit getal voor grotere beweging */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Titel/layout veranderen

**src/components/StartScreen.jsx**:
```jsx
<h1>🎭 JOUW SPEL NAAM</h1>
<p className="tagline">Jouw tagline hier</p>
```

---

## 📱 IPHONE APP ICON AANPASSEN

**public/manifest.json**:

```json
"icons": [
  {
    "src": "data:image/svg+xml,<svg>...**🎭**...</svg>",
    // Verander 🎭 naar je emoji
  }
]
```

---

## 🚀 DEPLOYEN NAAR NETLIFY (STAP-VOOR-STAP)

### 1. Push alles naar GitHub

```bash
cd /path/to/koens-imposter-game
git add .
git commit -m "Initial commit - ready to deploy"
git push origin main
```

### 2. Ga naar Netlify

1. https://netlify.com
2. Login met GitHub
3. "New site from Git"
4. Kies "GitHub"
5. Kies je repo: `koens-imposter-game`

### 3. Build settings

Netlify vult dit automatisch in:
- Build command: `npm run build`
- Publish directory: `dist`

Klik "Deploy site" → Wachten... → Done! 🎉

### 4. Je app is online!

URL: `https://your-site-name.netlify.app`

Deel met vrienden - ze kunnen direct spelen!

---

## 🐛 TROUBLESHOOTING

### "npm command not found"
- Installeer Node.js: https://nodejs.org
- Restart je terminal

### "App laadt niet op iPhone"
- Check WiFi: iPhone en computer op dezelfde WiFi?
- IP adres kloppen?
- Dev server draait? (`npm run dev`)
- Probeer Safari cache leeg: Settings → Safari → Website Data → Alles verwijderen

### "Woorden tonen niet"
- Check `src/words.js` - syntax correct?
- Zet woorden tussen aanhalingstekens
- Refresh pagina (Cmd+R op Mac, Ctrl+R op Windows)

### "PWA installeert niet op iPhone"
- Service Worker werkt alleen over HTTPS of localhost
- For production (Netlify), moet HTTPS zijn ✓
- Probeer manifest.json nog eens in te laden

### "Kan niet naar GitHub pushen"
- Check username: `git config user.name`
- Zorg dat SSH keys geconfigureerd zijn
- Of gebruik HTTPS clone URL

---

## 📁 PROJECT STRUCTUUR

```
koens-imposter-game/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx       ← Startscherm
│   │   ├── PlayerSetup.jsx       ← Speler selectie
│   │   ├── GameScreen.jsx        ← Spelscherm
│   │   ├── ResultScreen.jsx      ← Reveal scherm
│   │   └── *.css                 ← Styling per component
│   ├── App.jsx                   ← Hoofd component
│   ├── App.css                   ← Globale styles
│   ├── main.jsx                  ← Entry point
│   ├── words.js                  ← 🎯 WOORDEN AANPASSEN HIER
│   └── index.css
├── public/
│   ├── manifest.json             ← PWA metadata
│   └── sw.js                     ← Service Worker
├── index.html                    ← HTML template
├── vite.config.js               ← Vite config
├── package.json                 ← Dependencies
└── README.md                    ← Documentatie
```

---

## 🔧 HANDIGE COMMANDS

```bash
# Start development server
npm run dev

# Build voor production
npm run build

# Preview build lokaal
npm run preview

# Push naar GitHub
git add .
git commit -m "Jouw message"
git push origin main

# Woorden updaten + pushen
# 1. Edit src/words.js
# 2. git add src/words.js
# 3. git commit -m "Update woorden"
# 4. git push
# 5. Wacht tot Netlify deployt (1-2 min)
```

---

## 📚 LEREN MEER

### React
- https://react.dev/learn

### Vite
- https://vitejs.dev

### CSS animaties
- https://web.dev/css-animations/

### PWA
- https://web.dev/progressive-web-apps/

---

## 🎉 JE BENT KLAAR!

**Volgende stappen:**

1. ✅ Clone GitHub repo
2. ✅ Installeer met `npm install`
3. ✅ Test met `npm run dev`
4. ✅ Test op iPhone via WiFi
5. ✅ Deploy naar Netlify
6. ✅ Deel de link!

---

**Veel plezier! 🎭**

Vragen? Check GitHub Issues of contacteer Koen!
