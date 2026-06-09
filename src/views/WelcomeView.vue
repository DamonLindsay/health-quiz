<script setup lang="ts">
import { useRouter } from 'vue-router'
import { categoryInfo } from '@/data/questions'

const router = useRouter()

const startQuiz = () => {
  router.push({ name: 'quiz' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-8">
    <div class="max-w-2xl w-full text-center">
      <!-- Header -->
      <div class="mb-8">
        <div class="text-6xl mb-4">🏥</div>
        <h1 class="text-4xl font-bold text-white mb-3">Wellness Assessment</h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          Answer 16 questions across four key areas of your health and get a personalised snapshot
          of your current lifestyle.
        </p>
      </div>

      <!-- Category cards -->
      <div class="grid grid-cols-2 gap-4 mb-10">
        <div
          v-for="(info, key) in categoryInfo"
          :key="key"
          class="p-4 rounded-xl border border-gray-800 bg-[#1e293b] text-left"
        >
          <div class="text-2xl mb-2">{{ info.icon }}</div>
          <h3 class="text-sm font-semibold text-white">{{ info.label }}</h3>
          <p class="text-xs text-gray-500 mt-1">4 questions</p>
        </div>
      </div>

      <!-- Start button -->
      <button
        @click="startQuiz"
        class="w-full py-4 rounded-xl text-white font-semibold text-lg cursor-pointer transition-all hover:opacity-90 active:scale-95"
        style="background: linear-gradient(135deg, #22c55e, #3b82f6)"
      >
        Start Assessment →
      </button>

      <p class="text-gray-600 text-xs mt-4">Takes about 3 minutes · 16 questions</p>
    </div>
  </div>
</template>
