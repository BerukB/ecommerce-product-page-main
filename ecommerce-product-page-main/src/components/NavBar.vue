<script setup>
import DeskNavLinks from '@/components/DeskNavLinks.vue'
</script>

<template>
   <div class="container mx-auto px-5 py-3">
       <div class="flex justify-between ">
        <div class="flex items-center justify-center space-x-14">
          <img src="@/images/icon-menu.svg" class="object-none mr-5 cursor-pointer text-blue-500 md:hidden" alt="menu icon">
          <img src="@/images/logo.svg" class="object-none" alt="Logo">
          <DeskNavLinks class=""/>
        </div>
        
        <div class="flex space-x-8 justify-end items-center">
          <div class="relative">
            <img src="@/images/icon-cart.svg" class="object-none cursor-pointer hover:" alt="cart icon">
            <p class="bg-tannedOrange px-2 text-white rounded-lg text-[8px] absolute bottom-3 left-2">0</p>
          </div>
          <img src="@/images/image-avatar.png" class="w-1/5 border-2 border-white  rounded-full cursor-pointer md:hover:border-tannedOrange md:w-1/4" alt="avatar image">
        </div>
         </div>
         <hr class="hidden mt-8 md:block" />
   </div>
  
</template>