<script setup>
import DeskNavLinks from '@/components/DeskNavLinks.vue'
import PhoneNavLinks from '@/components/PhoneNavLinks.vue';
import CartComponent from '@/components/CartComponent.vue';
import { useSwitchStore } from '@/stores/switch'

const switchStore = useSwitchStore();

</script>

<template>
  <div class="px-5 py-3 relative">
    <div class="flex justify-between ">
      <div class="flex items-center justify-center">
        <img
        @click="switchStore.switchMenu"
          src="@/images/icon-menu.svg"
          class="object-none pb-0 mr-5 cursor-pointer text-blue-500 md:hidden"
          alt="menu icon"
        />
        <img src="@/images/logo.svg" class="object-none pb-0 md:pb-8" alt="Logo" />
        <DeskNavLinks class="ml-14 md:ml-10" />
        
      </div>
      <PhoneNavLinks v-show="switchStore.menuOn" class="absolute md:hidden"/>
      <div class="flex space-x-8 justify-end items-center">
        <div @click="switchStore.switchCart" class="relative pb-0 md:pb-8">
          <img
            src="@/images/icon-cart.svg"
            class="object-none cursor-pointer "
            alt="cart icon"
          />
          <p class="bg-tannedOrange px-2 text-white rounded-lg text-[8px] absolute bottom-3  md:bottom-11 left-2">
            0
          </p>
        </div>
        <img
          src="@/images/image-avatar.png"
          class="w-1/5 mb-0 md:mb-8 border-2 border-white rounded-full cursor-pointer md:hover:border-tannedOrange md:w-1/4"
          alt="avatar image"
        />
      </div>
    </div>
    <hr class="hidden md:block" />
  </div>
  <CartComponent v-if="switchStore.cartOn"/>
</template>
