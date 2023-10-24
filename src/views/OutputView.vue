<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full bg-slate-900 h-full">
      <div class="p-2 text-start w-full h-full">
      
      <div class="grid grid-rows-2 grid-cols-3 gap-2 font-bold font-mono" >
        <div class=" bg-white rounded-lg shadow-md dark:bg-gray-800 w-full p-4 " v-for="repo in repos" :key="repo.id">
          <div class="flex items-center justify-between">
            <p
              class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
              tabindex="0"
            >
              {{ repo.name }}
            </p>
            <p class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Total Score: {{ repo.totalScore }}</p><br>
          </div>

          <div class="mt-2">
            <p class="mt-2 text-gray-600 dark:text-gray-300 pl-7">Lint score: {{ repo.lintScore }}</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300 pl-7">Document score: {{ repo.documentScore}}</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300 pl-7">Test coverage: {{ repo.testCoverage }}</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300 pl-7">Test coverage percentage: {{ repo.testPercentage }}</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300 pl-7">Test percentage grade: {{ repo.testPercentageGrade}}</p>
            <p class="mt-2 text-gray-600 dark:text-gray-300 pl-7">
              Link: 
              <a  
                class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline pl-7"
              >
               {{ repo.url }}
              </a>
            </p>
          </div>

          <div class="flex items-center justify-between mt-4 font-bold font-mono">
            <p class="mt-2 text-gray-600 dark:text-gray-300">Activeness: {{ repo.activeness }} </p>

            <div class="flex items-center">
              <a
                class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                tabindex="0"
                role="link"
                >Grade: {{ repo.activenessGrade }}
                </a>
          </div>
        </div>
      </div>
    </div>
    

      </div>
    </div>

    
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import type { RepoItem } from '@/type'
import { useRepoStore } from '@/stores/libstore';
import { storeToRefs } from 'pinia';
const repos = storeToRefs(useRepoStore()).repo

</script>
