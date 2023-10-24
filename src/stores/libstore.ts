import type { RepoItem } from '@/type'
import { defineStore } from 'pinia'
export const useRepoStore = defineStore('repo', {
  state: () => ({
    repo: [] as RepoItem[] 
  }),
  actions: {
    setEvent(repo: RepoItem[]) {
      this.repo = repo
    }
  }
})
