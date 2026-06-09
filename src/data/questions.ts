export type Category = 'diet' | 'exercise' | 'sleep' | 'stress'

export interface Option {
  text: string
  score: number
}

export interface Question {
  id: number
  category: Category
  question: string
  options: Option[]
}

export const questions: Question[] = [
  // ─── DIET ────────────────────────────────────────────────
  {
    id: 1,
    category: 'diet',
    question: 'How many serves of vegetables do you eat per day?',
    options: [
      { text: '0-1 serves', score: 1 },
      { text: '2-3 serves', score: 2 },
      { text: '4-5 serves', score: 3 },
      { text: '5+ serves', score: 4 },
    ],
  },
  {
    id: 2,
    category: 'diet',
    question: 'How often do you eat fast food or takeaway?',
    options: [
      { text: 'Daily', score: 1 },
      { text: '3-4 times a week', score: 2 },
      { text: 'Once a week', score: 3 },
      { text: 'Rarely or never', score: 4 },
    ],
  },
  {
    id: 3,
    category: 'diet',
    question: 'How many glasses of water do you drink per day?',
    options: [
      { text: 'Less than 2', score: 1 },
      { text: '2-4 glasses', score: 2 },
      { text: '5-7 glasses', score: 3 },
      { text: '8+ glasses', score: 4 },
    ],
  },
  {
    id: 4,
    category: 'diet',
    question: 'How would you describe your typical breakfast?',
    options: [
      { text: 'I skip breakfast', score: 1 },
      { text: 'Coffee or something small', score: 2 },
      { text: 'A decent meal most days', score: 3 },
      { text: 'A nutritious balanced meal every day', score: 4 },
    ],
  },

  // ─── EXERCISE ────────────────────────────────────────────
  {
    id: 5,
    category: 'exercise',
    question: 'How many days per week do you exercise?',
    options: [
      { text: 'Never', score: 1 },
      { text: '1-2 days', score: 2 },
      { text: '3-4 days', score: 3 },
      { text: '5+ days', score: 4 },
    ],
  },
  {
    id: 6,
    category: 'exercise',
    question: 'What best describes your daily activity level?',
    options: [
      { text: 'Mostly sitting all day', score: 1 },
      { text: 'Light movement but mainly sedentary', score: 2 },
      { text: 'Moderately active throughout the day', score: 3 },
      { text: 'Very active — on my feet most of the day', score: 4 },
    ],
  },
  {
    id: 7,
    category: 'exercise',
    question: 'How long is a typical exercise session for you?',
    options: [
      { text: "I don't exercise", score: 1 },
      { text: 'Less than 20 minutes', score: 2 },
      { text: '20-45 minutes', score: 3 },
      { text: '45+ minutes', score: 4 },
    ],
  },
  {
    id: 8,
    category: 'exercise',
    question: 'What type of exercise do you do most often?',
    options: [
      { text: 'None', score: 1 },
      { text: 'Light walking', score: 2 },
      { text: 'Cardio or strength training', score: 3 },
      { text: 'A mix of cardio, strength and flexibility', score: 4 },
    ],
  },

  // ─── SLEEP ───────────────────────────────────────────────
  {
    id: 9,
    category: 'sleep',
    question: 'How many hours of sleep do you get on average?',
    options: [
      { text: 'Less than 5 hours', score: 1 },
      { text: '5-6 hours', score: 2 },
      { text: '7-8 hours', score: 3 },
      { text: '8-9 hours', score: 4 },
    ],
  },
  {
    id: 10,
    category: 'sleep',
    question: 'How would you rate your sleep quality?',
    options: [
      { text: 'Very poor — I rarely feel rested', score: 1 },
      { text: 'Poor — I often wake up tired', score: 2 },
      { text: 'Good — I feel reasonably rested', score: 3 },
      { text: 'Excellent — I wake up refreshed', score: 4 },
    ],
  },
  {
    id: 11,
    category: 'sleep',
    question: 'How consistent is your sleep schedule?',
    options: [
      { text: 'Very inconsistent — different times every night', score: 1 },
      { text: 'Somewhat inconsistent', score: 2 },
      { text: 'Fairly consistent on weekdays', score: 3 },
      { text: 'Very consistent — same time every night', score: 4 },
    ],
  },
  {
    id: 12,
    category: 'sleep',
    question: 'How often do you use screens before bed?',
    options: [
      { text: 'Right up until I fall asleep', score: 1 },
      { text: 'Within 30 minutes of sleep', score: 2 },
      { text: 'I try to stop an hour before bed', score: 3 },
      { text: 'I avoid screens for at least an hour before bed', score: 4 },
    ],
  },

  // ─── STRESS ──────────────────────────────────────────────
  {
    id: 13,
    category: 'stress',
    question: 'How would you rate your average stress level?',
    options: [
      { text: 'Extremely stressed most of the time', score: 1 },
      { text: 'Often stressed', score: 2 },
      { text: 'Occasionally stressed', score: 3 },
      { text: 'Rarely stressed', score: 4 },
    ],
  },
  {
    id: 14,
    category: 'stress',
    question: 'How do you usually manage stress?',
    options: [
      { text: "I don't really manage it", score: 1 },
      { text: 'Unhealthy habits like eating or drinking', score: 2 },
      { text: 'Exercise, hobbies or talking to someone', score: 3 },
      { text: 'Consistent healthy habits and mindfulness', score: 4 },
    ],
  },
  {
    id: 15,
    category: 'stress',
    question: 'How often do you take time to relax or decompress?',
    options: [
      { text: "Never — I'm always busy", score: 1 },
      { text: 'Rarely', score: 2 },
      { text: 'A few times a week', score: 3 },
      { text: "Daily — it's part of my routine", score: 4 },
    ],
  },
  {
    id: 16,
    category: 'stress',
    question: 'How would you describe your work-life balance?',
    options: [
      { text: 'Non-existent — work dominates everything', score: 1 },
      { text: 'Poor — I struggle to switch off', score: 2 },
      { text: 'Reasonable — I manage most of the time', score: 3 },
      { text: 'Great — I have clear boundaries', score: 4 },
    ],
  },
]

export const categoryInfo: Record<Category, { label: string; icon: string; colour: string }> = {
  diet: { label: 'Diet & Nutrition', icon: '🥗', colour: '#22c55e' },
  exercise: { label: 'Exercise & Activity', icon: '💪', colour: '#3b82f6' },
  sleep: { label: 'Sleep Quality', icon: '😴', colour: '#8b5cf6' },
  stress: { label: 'Stress Management', icon: '🧘', colour: '#f59e0b' },
}
