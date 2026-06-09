<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions, categoryInfo } from '@/data/questions'
import type { Category } from '@/data/questions'

const router = useRouter()
const answers = ref<Record<number, number>>({})

onMounted(() => {
  const stored = sessionStorage.getItem('quizAnswers')
  if (!stored) {
    router.push({ name: 'welcome' })
    return
  }
  answers.value = JSON.parse(stored)
})

const categoryScores = computed(() => {
  const scores: Record<Category, { score: number; max: number; percentage: number }> = {
    diet: { score: 0, max: 0, percentage: 0 },
    exercise: { score: 0, max: 0, percentage: 0 },
    sleep: { score: 0, max: 0, percentage: 0 },
    stress: { score: 0, max: 0, percentage: 0 },
  }

  questions.forEach((q) => {
    const answer = answers.value[q.id] ?? 0
    const max = Math.max(...q.options.map((o) => o.score))
    scores[q.category].score += answer
    scores[q.category].max += max
  })

  Object.keys(scores).forEach((cat) => {
    const c = cat as Category
    scores[c].percentage = Math.round((scores[c].score / scores[c].max) * 100)
  })

  return scores
})

const overallScore = computed(() => {
  const total = Object.values(categoryScores.value).reduce((sum, c) => sum + c.score, 0)
  const max = Object.values(categoryScores.value).reduce((sum, c) => sum + c.max, 0)
  return Math.round((total / max) * 100)
})

const overallRating = computed(() => {
  if (overallScore.value >= 80) return { label: 'Excellent', colour: '#22c55e', emoji: '🌟' }
  if (overallScore.value >= 60) return { label: 'Good', colour: '#3b82f6', emoji: '👍' }
  if (overallScore.value >= 40) return { label: 'Fair', colour: '#f59e0b', emoji: '💪' }
  return { label: 'Needs Work', colour: '#ef4444', emoji: '🔄' }
})

const recommendations = computed(() => {
  const recs: string[] = []
  const scores = categoryScores.value

  if (scores.diet.percentage < 60)
    recs.push(
      'Try to increase your vegetable intake and reduce takeaway meals. Aim for 5 serves of vegetables per day.',
    )
  if (scores.exercise.percentage < 60)
    recs.push(
      'Aim for at least 30 minutes of moderate exercise 3-4 days per week to improve your overall health.',
    )
  if (scores.sleep.percentage < 60)
    recs.push(
      'Prioritise 7-8 hours of sleep per night and try to keep a consistent sleep schedule.',
    )
  if (scores.stress.percentage < 60)
    recs.push(
      'Consider building stress management habits like regular exercise, mindfulness or talking to someone you trust.',
    )

  if (recs.length === 0)
    recs.push(
      "You're doing great across all areas! Keep up your healthy habits and continue to build on your strong foundation.",
    )

  return recs
})

const retakeQuiz = () => {
  sessionStorage.removeItem('quizAnswers')
  router.push({ name: 'welcome' })
}
</script>

<template>
  <div class="min-h-screen p-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10">
        <div class="text-5xl mb-3">{{ overallRating.emoji }}</div>
        <h1 class="text-3xl font-bold text-white mb-2">Your Wellness Results</h1>
        <div
          class="inline-block px-6 py-2 rounded-full text-white font-semibold text-lg mb-2"
          :style="{ backgroundColor: overallRating.colour }"
        >
          {{ overallRating.label }} — {{ overallScore }}%
        </div>
        <p class="text-gray-400 text-sm">Based on your responses across 4 health categories</p>
      </div>

      <!-- Category breakdown -->
      <div class="space-y-4 mb-10">
        <h2 class="text-xs uppercase tracking-widest text-gray-500">Category Breakdown</h2>
        <div
          v-for="(info, key) in categoryInfo"
          :key="key"
          class="p-4 rounded-xl bg-[#1e293b] border border-gray-800"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span>{{ info.icon }}</span>
              <span class="text-sm font-semibold text-white">{{ info.label }}</span>
            </div>
            <span class="text-sm font-bold" :style="{ color: info.colour }">
              {{ categoryScores[key as Category]?.percentage ?? 0 }}%
            </span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div
              class="h-2 rounded-full transition-all duration-700"
              :style="{
                width: `${categoryScores[key as Category]?.percentage ?? 0}%`,
                backgroundColor: info.colour,
              }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="mb-10 p-6 rounded-xl bg-[#1e293b] border border-gray-800">
        <h2 class="text-xs uppercase tracking-widest text-gray-500 mb-4">Recommendations</h2>
        <ul class="space-y-3">
          <li
            v-for="rec in recommendations"
            :key="rec"
            class="flex gap-3 text-sm text-gray-300 leading-relaxed"
          >
            <span class="text-green-400 mt-0.5 flex-shrink-0">→</span>
            {{ rec }}
          </li>
        </ul>
      </div>

      <!-- Retake button -->
      <button
        @click="retakeQuiz"
        class="w-full py-4 rounded-xl border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-all cursor-pointer"
      >
        Retake Assessment
      </button>
    </div>
  </div>
</template>
