import { defineStore } from 'pinia'

export const useMenuStore = defineStore('useMenuStore', {
    state: () => ({
        drawer: false,
        theme: 'light'
      }),
    actions: {
        openMenu() {
            this.drawer = !this.drawer    
        },
        changeTheme(){
            this.theme = this.theme == 'light' ? 'dark' : 'light'
        }
    },

    getters: {
        getDrawer(state){
            return state.drawer
        }   
    }
  
})