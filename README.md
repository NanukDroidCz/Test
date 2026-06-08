# DayZ Mod Studio

Komplexní webová aplikace pro vytváření DayZ modů s AI generátorem obsahu.

## 🎯 Hlavní Funkce

### 1. Item Database
- Centrální knihovna všech itemů (zbraně, jídlo, oblečení, vozidla)
- Editace parametrů: damage, weight, model path, rarity, inventory sloty
- Vyhledávání a filtrování

### 2. Mod Builder
- Klikací editor bez nutnosti ručního kódování
- Automatické generování struktury modu
- Auto-vytváření config.cpp a mod.cpp

### 3. AI Generátor Modů
- Přirozený jazyk input
- Automatické vytvoření celé mod struktury
- Generování itemů, balance, loot tabulek
- Vytváření config.cpp a scriptů

### 4. Search & Reuse Systém
- Hledání itemů v databázi
- Úprava a ukládání variant

### 5. Export Systém
- Export do ZIP
- DayZ Workshop ready
- PBO struktura připravená

## 🛠️ Tech Stack

### Frontend
- React 18+
- Tailwind CSS
- Vite

### Backend
- Node.js + Express
- TypeScript

### Database
- MongoDB

### AI
- OpenAI API

## 📦 Setup

```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```
