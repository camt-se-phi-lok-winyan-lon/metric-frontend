<script setup lang="ts">
import { ref } from 'vue'
import type { RepoItem } from '@/type'
import { useRepoStore } from '@/stores/libstore'
import { useRouter } from 'vue-router'

const selections = ref<RepoItem[]>([])
const searchWord = ref<string>('')
const repoStore = useRepoStore()
const router = useRouter()


fetch('http://localhost:8080/library').then((res) => {
  if (res.body) {
    res.body
      .getReader()
      .read()
      .then((body) => {
        if (body.value) {
          repos.value = JSON.parse(new TextDecoder().decode(body.value))
        }
      })
  }
})

function submit() {
  fetch('http://localhost:8080/ranking', {
    method: 'POST',
    body: JSON.stringify({
      libraries: selections.value.map((x) => {
        return {
          id: x.id
        }
      })
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(async (res) => {
    const resp = await res.json()
    console.log(resp)
    repoStore.setEvent(resp)
    router.push({name : "output"})
  })
}
const repos = ref<RepoItem[]>([])
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
            class="mt-2 text-white flex flex-row flex-wrap gap-1 [&>*:nth-child(4n+1)]:bg-Macrage-blue [&>*:nth-child(4n+2)]:bg-OrangeIsIt? [&>*:nth-child(4n+3)]:bg-amber-500 [&>*:nth-child(4n+4)]:bg-rose-500"
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
            placeholder="リポジトリ"
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
                  !selections.map((x) => x.id).includes(x.id) &&
                  selections.length < 5
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
        <button
          type="submit"
          class="inline-block rounded-lg bg-OrangeIsIt? px-5 py-3 font-bold"
          @click="submit()"
        >
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
