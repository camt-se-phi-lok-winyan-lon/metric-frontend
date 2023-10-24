<script setup lang="ts">
import { ref } from 'vue'

const repos = ref<string[]>(['A', 'B', 'C', 'D', 'E'])
</script>
<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-slate-900 h-full">
      <div class="mx-auto max-w-7xl text-center font-SkipStd">
        <h1 class="text-2xl font-bold sm:text-3xl text-white">
          <span class="text-OrangeIsIt?">さあ</span>始めましょう！
        </h1>

        <p class="mt-4 text-SPLight-blue tracking-wide">出場者を選択してください</p>
      </div>
      <div class="flex flex-col gap-10 font-NotoSerif">
        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white"
            ><span class="text-Yellow? text-lg">一</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-Macrage-blue text-gray-700 bg-slate-400 sm:text-sm"
          >
            <option value="">私を選ばないでください😭</option>
            <option v-for="option in repos" :value="option" :key="option">{{ option }}</option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white"
            ><span class="text-Yellow? text-lg">二</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-Macrage-blue text-gray-700 bg-slate-400 sm:text-sm"
          >
            <option value="">私を選ばないでください😭</option>
            <option v-for="option in repos" :value="option" :key="option">{{ option }}</option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white"
            ><span class="text-Yellow? text-lg">三</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-Macrage-blue text-gray-700 bg-slate-400 sm:text-sm"
          >
            <option value="">私を選ばないでください😭</option>
            <option v-for="option in repos" :value="option" :key="option">{{ option }}</option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white"
            ><span class="text-Yellow? text-lg">四</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-Macrage-blue text-gray-700 bg-slate-400 sm:text-sm"
          >
            <option value="">私を選ばないでください😭</option>
            <option v-for="option in repos" :value="option" :key="option">{{ option }}</option>
          </select>
        </div>

        <div>
          <label for="HeadlineAct" class="block text-sm font-medium text-white"
            ><span class="text-Yellow? text-lg">五</span>番</label
          >

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            class="mt-1.5 w-full rounded-lg border-Macrage-blue text-gray-700 bg-slate-400 sm:text-sm"
          >
            <option value="">私を選ばないでください😭</option>
            <option v-for="option in repos" :value="option" :key="option">{{ option }}</option>
          </select>
        </div>
        <button
          type="submit"
          class="inline-block rounded-lg bg-OrangeIsIt? px-5 py-3 text-sm font-medium text-white"
        >
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
