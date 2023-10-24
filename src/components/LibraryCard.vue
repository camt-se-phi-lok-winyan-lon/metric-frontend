<script setup lang="ts">
import type {RepoItem} from '@/type'
import type {PropType} from "vue";

defineProps({
  library: {
    type: Object as PropType<RepoItem>,
    required: true
  },
  index: Number
})


</script>

<template>
  <div v-if="library" class="bg-white rounded-lg shadow-md w-full p-4 h-30 ">
    <span class="text-lg font-bold" :class="{ 'text-yellow-500': index === 0}">Rank: #{{ index + 1 }}</span>
    <span class="float-right text-amber-500">TOTAL SCORE: {{ library.totalScore.toFixed(2) }}</span>

    <div class="flex flex-row items-center justify-between m-2 text-lg">
      <div class="flex flex-col w-3/5">
        <div class="block">
          <span class="text-gray-800">Library Name:</span> {{ library.name }}
        </div>
        <div>
          <span class="font-semibold ">Document Score: {{ library.documentScore }}/5</span>
        </div>
        <div>
          Code Lint Score: {{ library.lintScore.toFixed(2) }}
        </div>
      </div>
      <div class="flex flex-col w-1/2">
        <div class="my-2">
          <span class="">Test Coverage:
            <span :class="{
              'text-red-400': library.testPercentageGrade === 'F',
              'text-blue-400': library.testPercentageGrade === 'C' || 'D',
              'text-yellow-400': library.testPercentageGrade === 'B',
              'text-green-400': library.testPercentageGrade === 'A' }"
            >
              {{ library.testPercentageGrade }}
              {{ library.testPercentage }}
              </span>
          </span>
          <br/>
        </div>

        <div>
          <span>Activeness: </span>
          <span :class="{
              'text-red-400': library.activenessGrade === 'F',
              'text-blue-400': library.activenessGrade === 'C' || 'D',
              'text-yellow-400': library.activenessGrade === 'B',
              'text-green-400': library.activenessGrade === 'A' }"
          >{{ library.activenessGrade }}</span>
        </div>
      </div>
    </div>


  </div>

</template>

<style scoped>

</style>