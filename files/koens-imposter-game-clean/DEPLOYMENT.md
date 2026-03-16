# 🚀 GitHub & Deployment Guide

## Stap 1: Zet je project op GitHub

```bash
# Zorg dat je in de project folder bent
cd koens-imposter-game

# Initialize Git (als je dat nog niet hebt gedaan)
git init

# Voeg alle files toe
git add .

# Eerste commit
git commit -m "Initial commit: Koen's Imposter Game"

# Voeg je GitHub repo als remote toe
# (vervang USERNAME en REPO met jouw gegevens)
git remote add origin https://github.com/USERNAME/koens-imposter-game.git

# Push naar GitHub
git branch -M main
git push -u origin main
```

## Stap 2: Deploy op Netlify (Gratis!)

### Automatisch via GitHub (aanbevolen)

1. Ga naar [netlify.com](https://netlify.com)
2. Klik "Sign up" → "GitHub" 
3. Autoriseer Netlify met je GitHub account
4. Klik "New site from Git"
5. Kies je `koens-imposter-game` repository
6. Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Klik "Deploy" → klaar! 🎉

Je krijgt automatisch een URL als:
```
https://your-site-name.netlify.app
```

### Deploy Updates

Als je wijzigingen maakt:

```bash
# Maak je aanpassingen (bijv. woorden toevoegen)
# Edit src/words.js

# Commit en push
git add src/words.js
git commit -m "Add more words"
git push origin main
```

Netlify ziet automatisch dat je iets pushed en rebuildt + deployed je site! 🚀

## Stap 3: Op je iPhone gebruiken

Nu je site live staat op Netlify:

1. Open de Netlify link op je iPhone
2. Klik het share knopje (rechtsboven)
3. "Voeg toe aan homescreen"
4. Nu heb je een app op je homescreen! 📱

## Alternatief: Vercel (ook gratis)

1. Ga naar [vercel.com](https://vercel.com)
2. Klik "Import Project"
3. Paste je GitHub repo URL
4. Klik Import → klaar!

Vercel werkt bijna hetzelfde als Netlify.

## Lokale Development

```bash
# Als je lokaal wilt testen
npm run dev

# Op je iPhone via WiFi:
# Op je Mac/PC waar de dev server draait:
# Terminal toont: http://192.168.x.x:5173
# (of iets vergelijkbaars)

# Open dit op je iPhone in Safari
# → game werkt via je lokale netwerk
```

## Woorden Update (na deployment)

Stel je wilt woorden toevoegen:

```bash
# Edit src/words.js
nano src/words.js  # of je favoriete editor

# Voeg woorden toe aan de array

# Commit en push
git add src/words.js
git commit -m "Add new words"
git push origin main

# Netlify/Vercel bouwt automatisch opnieuw
# Jouw website is in ~2 minuten geupdate! ✨
```

## Pro Tips

### 1. Betere project naam op Netlify
In Netlify dashboard → Site settings → Site details → Change site name
```
koens-imposter-game (of wat je wilt)
```
→ je link wordt: `https://koens-imposter-game.netlify.app`

### 2. Custom domain
Netlify kunnen je een custom domain laten gebruiken (nog gratis):
- Domain kopen op bijv. Namecheap
- In Netlify: Settings → Domain management → Add custom domain

### 3. Miljövariabelen (later nodig?)
```bash
# Create .env file
echo "VITE_API_URL=https://..." > .env
```

## Troubleshooting

### "npm install failed"
```bash
# Delete node_modules en probeer opnieuw
rm -rf node_modules
npm install
```

### "Build failed" op Netlify
Check de build logs in Netlify dashboard:
- Sites → Select your site → Deploys → Click failed build → check logs

### PWA werkt niet op iPhone?
- Zorg dat je HTTPS gebruikt (Netlify doet dit automatisch)
- Safari → Settings → Advanced → Enable Web Inspector

---

**Je bent klaar om te deployen!** 🎉
