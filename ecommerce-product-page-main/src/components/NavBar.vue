<script setup>
import {ref} from 'vue';
import DeskNavLinks from '@/components/DeskNavLinks.vue'
import PhoneNavLinks from '@/components/PhoneNavLinks.vue';
import CartComponent from '@/components/CartComponent.vue';
import { useSwitchStore } from '@/stores/switch'
import { useItemCounter } from '@/stores/itemCounter'

import { onClickOutside } from '@vueuse/core'
const cartRef = ref(null); 


const switchStore = useSwitchStore();
const itemCount = useItemCounter();

onClickOutside(cartRef, () => {
    switchStore.switchCart();
    console.log("sdfs", switchStore.cartOn);
})
</script>

<template>
  <div class="font-kumbhSans px-5 py-3 relative">
    <div class="flex justify-between md:items-center">
      <div class="flex items-center justify-center">
        <img
        @click="switchStore.switchMenu"
          src="@/images/icon-menu.svg"
          class="object-none pb-0 mr-5 cursor-pointer text-blue-500 md:hidden"
          alt="menu icon"
        />
        <img src="@/images/logo.svg" class="object-none pb-1 md:pb-8" alt="Logo" />
        <DeskNavLinks class="ml-14 mt-2 md:ml-10" />
        
      </div>
      <div v-show="switchStore.menuOn" class="absolute bg-blackHawk w-full h-screen pl-4 pt-3 z-10 md:hidden"></div>
      <PhoneNavLinks v-show="switchStore.menuOn" class="absolute left-0 md:hidden"/>
      <div class="flex space-x-8 justify-end items-center">
        <div @click="switchStore.switchCart" class="relative md:top-2 pb-0 md:pb-8">
          <img
            src="@/images/icon-cart.svg"
            class="object-none cursor-pointer "
            alt="cart icon"
          />
          <p v-show="!itemCount.isCartEmpty" class="bg-tannedOrange px-2 text-white rounded-lg text-[8px] absolute bottom-3  md:bottom-11 left-2">
            {{ itemCount.cartItemAmount }}
          </p>
        </div>
        <img
          src="@/images/image-avatar.png"
          class="w-1/5 mb-0 md:mb-5 border-2 border-white rounded-full cursor-pointer md:hover:border-tannedOrange md:w-1/4"
          alt="avatar image"
        />
      </div>
    </div>
    <hr class="hidden md:block" />
  </div>
  <CartComponent v-if="switchStore.cartOn" ref="cartRef"/>
</template>
