# Health Wellness Assessment

A Vue 3 + TypeScript health quiz app built as part of a professional internship placement with Sophus Health.

Users complete a 16-question lifestyle assessment across four health categories and receive a personalised wellness score with recommendations.

## Features

- 16 questions across 4 health categories — Diet & Nutrition, Exercise & Activity, Sleep Quality, Stress Management
- Animated slide transitions between questions
- Progress bar with colour coding per category
- Back button to review and change answers
- Results screen with overall score, category breakdown and personalised recommendations
- Fully responsive and mobile-friendly

## Tech Stack

- Vue 3 (Composition API, script setup)
- TypeScript
- Vue Router
- Tailwind CSS
- Vite

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

src/
├── data/
│ └── questions.ts # Question data and TypeScript interfaces
├── views/
│ ├── WelcomeView.vue # Landing screen
│ ├── QuizView.vue # Quiz with progress and transitions
│ └── ResultsView.vue # Results, breakdown and recommendations
├── router/
│ └── index.ts # Vue Router config
└── assets/
└── main.css # Tailwind import and global styles

## Built With

This project was built to demonstrate proficiency in Vue 3, TypeScript, Vue Router, Tailwind CSS and Vite.
