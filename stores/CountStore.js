import { defineStore } from 'pinia'

export const useCountStore = defineStore('useCountStore', {
    state: () => ({
        count: 0,
      }),
    actions: {
        openMenu() {
            
            this.count++
        },
    getters: {
        getCount(state){
            
            return state.count
        }
    }

  }
  
})