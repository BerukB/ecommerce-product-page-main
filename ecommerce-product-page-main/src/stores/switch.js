import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', () => {
  const menuOn = ref(false);
  const switchMenu = () =>{
    menuOn.value = !menuOn.value;
   }

  return {menuOn, switchMenu}
})
