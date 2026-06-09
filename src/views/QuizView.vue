<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { questions, categoryInfo } from '@/data/questions'

const router = useRouter()
const currentIndex = ref(0)
const answers = ref<Record<number, number>>({})
const direction = ref<'forward' | 'back'>('forward')

const currentQuestion = computed(() => questions[currentIndex.value]!)
const progress = computed(() => (currentIndex.value / questions.length) * 100)
const isLastQuestion = computed(() => currentIndex.value === questions.length - 1)
const isFirstQuestion = computed(() => currentIndex.value === 0)
const categoryColour = computed(() => categoryInfo[currentQuestion.value.category].colour)
const categoryLabel = computed(() => categoryInfo[currentQuestion.value.category].label)
const categoryIcon = computed(() => categoryInfo[currentQuestion.value.category].icon)

const selectAnswer = (score: number) => {
  answers.value[currentQuestion.value.id] = score
  setTimeout(() => {
    if (isLastQuestion.value) {
      sessionStorage.setItem('quizAnswers', JSON.stringify(answers.value))
      router.push({ name: 'results' })
    } else {
      direction.value = 'forward'
      currentIndex.value++
    }
  }, 300)
}

const goBack = () => {
  if (isFirstQuestion.value) {
    router.push({ name: 'welcome' })
    return
  }
  direction.value = 'back'
  currentIndex.value--
}

const isAnswered = (score: number) => answers.value[currentQuestion.value.id] === score
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-8">
    <div class="max-w-2xl w-full">
      <!-- Progress bar -->
      <div class="mb-8">
        <div class="flex justify-between text-xs text-gray-500 mb-2">
          <span>Question {{ currentIndex + 1 }} of {{ questions.length }}</span>
          <span>{{ Math.round(progress) }}% complete</span>
        </div>
        <div class="w-full bg-gray-800 rounded-full h-2">
          <div
            class="h-2 rounded-full transition-all duration-500"
            :style="{ width: `${progress}%`, backgroundColor: categoryColour }"
          ></div>
        </div>
      </div>

      <!-- Transition wrapper -->
      <Transition :name="direction === 'forward' ? 'slide-forward' : 'slide-back'" mode="out-in">
        <div :key="currentIndex">
          <!-- Category label -->
          <div class="flex items-center gap-2 mb-6">
            <span class="text-lg">{{ categoryIcon }}</span>
            <span
              class="text-xs uppercase tracking-widest font-semibold"
              :style="{ color: categoryColour }"
            >
              {{ categoryLabel }}
            </span>
          </div>

          <!-- Question -->
          <h2 class="text-2xl font-bold text-white mb-8 leading-snug">
            {{ currentQuestion.question }}
          </h2>

          <!-- Options -->
          <div class="space-y-3">
            <button
              v-for="option in currentQuestion.options"
              :key="option.text"
              @click="selectAnswer(option.score)"
              :class="[
                'w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer',
                isAnswered(option.score)
                  ? 'border-opacity-100 text-white'
                  : 'border-gray-700 bg-[#1e293b] text-gray-300 hover:border-gray-500 hover:bg-[#263548]',
              ]"
              :style="
                isAnswered(option.score)
                  ? {
                      backgroundColor: categoryColour + '22',
                      borderColor: categoryColour,
                      color: 'white',
                    }
                  : {}
              "
            >
              {{ option.text }}
            </button>
          </div>
        </div>
      </Transition>

      <!-- Back button -->
      <button
        @click="goBack"
        class="mt-8 text-xs text-gray-600 hover:text-gray-400 cursor-pointer transition-colors"
      >
        ← {{ isFirstQuestion ? 'Back to start' : 'Previous question' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.slide-forward-enter-active,
.slide-forward-leave-active,
.slide-back-enter-active,
.slide-back-leave-active {
  transition: all 0.25s ease;
}

.slide-forward-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-forward-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-back-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-back-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
