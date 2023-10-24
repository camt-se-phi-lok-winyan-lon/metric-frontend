<script setup lang="ts">
import { ref } from 'vue'
import type { RepoItem } from '@/type'
const selections = ref<number[]>(new Array<number>(5))

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

        <p class="mt-4 text-slate-400 tracking-wide">
          <span class="text-red-500">出場者</span>を選択してください
        </p>
      </div>
      <div class="flex flex-col gap-10 font-NotoSerif">
        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white tracking-widest"
            ><span class="text-Yellow? text-lg">1</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-0 text-gray-700 bg-slate-50 sm:text-sm"
            v-model="selections[0]"
          >
            <option value="0">私を選ばないでください😭</option>
            <option
              v-for="option in repos"
              :value="option.id"
              :key="option.id"
              :disabled="selections.includes(option.id)"
              class="disabled:hidden"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white tracking-widest"
            ><span class="text-Yellow? text-lg">2</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-0 text-gray-700 bg-slate-50 sm:text-sm"
            v-model="selections[1]"
          >
            <option value="0">私を選ばないでください😭</option>
            <option
              v-for="option in repos"
              :value="option.id"
              :key="option.id"
              :disabled="selections.includes(option.id)"
              class="disabled:hidden"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white tracking-widest"
            ><span class="text-Yellow? text-lg">3</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-0 text-gray-700 bg-slate-50 sm:text-sm"
            v-model="selections[2]"
          >
            <option value="0">私を選ばないでください😭</option>
            <option
              v-for="option in repos"
              :value="option.id"
              :key="option.id"
              :disabled="selections.includes(option.id)"
              class="disabled:hidden"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white tracking-widest"
            ><span class="text-Yellow? text-lg">4</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-0 text-gray-700 bg-slate-50 sm:text-sm"
            v-model="selections[3]"
          >
            <option value="0">私を選ばないでください😭</option>
            <option
              v-for="option in repos"
              :value="option.id"
              :key="option.id"
              :disabled="selections.includes(option.id)"
              class="disabled:hidden"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white tracking-widest"
            ><span class="text-Yellow? text-lg">5</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-0 text-gray-700 bg-slate-50 sm:text-sm"
            v-model="selections[4]"
          >
            <option value="0">私を選ばないでください😭</option>
            <option
              v-for="option in repos"
              :value="option.id"
              :key="option.id"
              :disabled="selections.includes(option.id)"
              class="disabled:hidden"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button type="submit" class="inline-block rounded-lg bg-OrangeIsIt? px-5 py-3 font-bold">
          提出する
        </button>
      </div>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://i.ytimg.com/vi/kDY1y0OL50A/hqdefault.jpg"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
</template>
