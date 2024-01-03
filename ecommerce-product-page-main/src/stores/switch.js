import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', () => {
  const menuOn = ref(false);
  const cartOn = ref(false);

  const switchMenu = () =>{
    menuOn.value = !menuOn.value;
    cartOn.value = false;
   }

   const switchCart = () => {
    cartOn.value = !cartOn.value;
   }

  return {menuOn, cartOn, switchMenu, switchCart}
})
