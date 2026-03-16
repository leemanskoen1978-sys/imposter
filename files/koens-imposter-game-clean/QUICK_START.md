# 🚀 QUICK START GUIDE

## 1. Project klonen en installeren

```bash
git clone https://github.com/yourusername/koens-imposter-game.git
cd koens-imposter-game
npm install
```

## 2. Dev server starten

```bash
npm run dev
```

Je ziet iets als:
```
  VITE v4.3.0  ready in 323 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

## 3. Op je computer testen

Open je browser en ga naar: **http://localhost:5173/**

## 4. Op je iPhone testen (WiFi)

### Stap 1: Vind je computer IP adres

**Mac:**
```bash
ipconfig getifaddr en0
```

**Windows:**
```bash
ipconfig
```

Zoek naar "IPv4 Address" (iets als `192.168.1.100`)

### Stap 2: Open op iPhone

1. Zorg dat je iPhone op dezelfde WiFi zit als je computer
2. Open Safari op je iPhone
3. Ga naar: `http://YOUR_IP:5173` (bijv. `http://192.168.1.100:5173`)

### Stap 3: Voeg toe als app

1. Tap het share knopje (rechtsboven) 📤
2. Scroll naar beneden en tap "Voeg toe aan startscherm"
3. Geef het een naam (of houd "Imposter Game")
4. Tap "Toevoegen"

**Klaar!** De app verschijnt nu op je homescreen! 🎉

## 5. Woorden aanpassen

Open `src/words.js` en voeg je eigen woorden toe:

```javascript
export const WORDS = [
  "Banaan",
  "Mijn eerste woord",
  "Mijn tweede woord",
  // ... meer
];
```

Sla op → browser refreshed automatisch!

## 6. Deployen naar Netlify (gratis + online)

### Stap 1: Push naar GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Stap 2: Deploy op Netlify

1. Ga naar https://netlify.com
2. Log in met GitHub
3. Klik "New site from Git"
4. Select "GitHub" en kies je repo
5. Netlify bouwt en deployed automatisch!
6. Je krijgt een URL zoals: `https://koens-imposter-game.netlify.app`

### Stap 3: Deel de link!

Stuur de link naar je vrienden - ze kunnen direct spelen! 📱

---

## 🆘 Problemen?

**App laadt niet op iPhone?**
- Check dat je op dezelfde WiFi zit
- Probeer `npm run dev` opnieuw te starten
- Ververs Safari (swipe down en los)

**Woorden tonen niet?**
- Check `src/words.js` - zet woorden tussen aanhalingstekens
- Refresh de pagina

**Wil je offline spelen?**
- App installer Service Worker (manifest.json + sw.js)
- Moet over HTTPS of localhost werken

---

**Veel succes! 🎭**
