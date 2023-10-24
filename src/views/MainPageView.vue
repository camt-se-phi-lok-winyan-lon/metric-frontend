<script setup lang="ts">
import { ref } from 'vue'
import type { RepoItem } from '@/type'
const selections = ref<RepoItem[]>([])
const searchWord = ref<string>('')

const repos = ref<RepoItem[]>([
  {
    id: 2,
    name: 'pypokedex',
    url: 'https://github.com/arnavb/pypokedex.git',
    lintScore: 0.0,
    documentScore: 2,
    activeness: 0.07193077339102218,
    testPercentageGrade: 'C',
    activenessGrade: 'A',
    testCoverage: 0.33
  },
  {
    id: 3,
    name: 'prefect-pokemon',
    url: 'https://github.com/desertaxle/prefect-pokemon.git',
    lintScore: 0.0,
    documentScore: 4,
    activeness: 0.014285714285714285,
    testPercentageGrade: 'A',
    activenessGrade: 'A',
    testCoverage: 1.0
  },
  {
    id: 4,
    name: 'pokemon',
    url: 'https://github.com/vsoch/pokemon.git',
    lintScore: 0.0,
    documentScore: 3,
    activeness: 0.012674271229404309,
    testPercentageGrade: 'B',
    activenessGrade: 'A',
    testCoverage: 0.78
  },
  {
    id: 5,
    name: 'pokemonlib',
    url: 'https://github.com/arthuro555/pokemonlib.git',
    lintScore: 5.17,
    documentScore: 0,
    activeness: 0.20810810810810812,
    testPercentageGrade: 'F',
    activenessGrade: 'A',
    testCoverage: 0.0
  },
  {
    id: 6,
    name: 'palettetown',
    url: 'https://github.com/rowland-208/palettetown.git',
    lintScore: 0.0,
    documentScore: 0,
    activeness: 7.0,
    testPercentageGrade: 'F',
    activenessGrade: 'A',
    testCoverage: 0.06
  }
])
</script>
<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 lg:w-1/2 bg-slate-900 h-full flex flex-col gap-4">
      <div class="mx-auto max-w-7xl text-center font-NotoSerif font-bold bg-white p-0.5">
        <h1 class="text-4xl text-black flex flex-row items-center gap-1">
          <div class="bg-black p-2 text-white">メトリック</div>
          <span class="">コネクト</span>
        </h1>
      </div>
      <div class="mx-auto max-w-7xl text-center font-SkipStd">
        <h1 class="text-2xl font-bold sm:text-3xl text-white">
          <span class="text-OrangeIsIt?">さあ</span>始めましょう！
        </h1>

        <p class="mt-4 bg-red-600 tracking-wide font-NotoSerif text-lg">
          <span class="text-white">出場者</span>を選択してください
        </p>
      </div>
      <div class="flex flex-col gap-10 font-NotoSerif">
        <div class="relative">
          <label class="text-xs text-white">出場者</label>
          <div
            class="text-white flex flex-row flex-wrap gap-1 [&>*:nth-child(4n+1)]:bg-Macrage-blue [&>*:nth-child(4n+2)]:bg-OrangeIsIt? [&>*:nth-child(4n+3)]:bg-amber-500 [&>*:nth-child(4n+4)]:bg-rose-500"
          >
            <div
              v-for="selection in selections"
              class="rounded-r-full rounded-l-full px-2 py-1 text-xs flex flex-row items-center gap-1"
              :key="selection.id"
            >
              <button
                type="button"
                @click="selections = selections.filter((x) => x.id != selection.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p class="text-white font-bold">{{ selection.name }}</p>
            </div>
          </div>
          <input
            type="text"
            class="form-input md:text-xl w-full text-white placeholder:text-slate-500 bg-transparent border-0 border-b border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-400 transition-colors peer"
            v-model="searchWord"
            placeholder="Repository"
          />
          <div
            class="text-black hidden peer-focus:flex overflow-hidden transition-all absolute bg-white border border-stone-700 w-full flex-col shadow-lg"
          >
            <button
              type="button"
              class="bg-slate-800 text-white hover:bg-OrangeIsIt? px-1"
              v-for="repo in repos.filter(
                (x) =>
                  x.name.toLowerCase().includes(searchWord.toLowerCase()) &&
                  !selections.map((x) => x.id).includes(x.id)
              )"
              :key="repo.id"
              @mousedown.prevent=""
              @click="
                () => {
                  if (selections.length < 5) {
                    selections.push(repo)
                  }
                }
              "
            >
              {{ repo.name }}
            </button>
          </div>
        </div>
        <button type="submit" class="inline-block rounded-lg bg-OrangeIsIt? px-5 py-3 font-bold">
          提出する
        </button>
      </div>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://media.tenor.com/2PlWRlGozeoAAAAd/matsuoka-shuzo-never-give-up.gif"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
</template>
