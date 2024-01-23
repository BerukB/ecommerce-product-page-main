<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useSwitchStore } from '@/stores/switch';

const switchStore = useSwitchStore();
</script>

<template >


  <div class="bg-white w-60 h-screen pl-4 pt-3 z-10">
    <!-- <div class="bg-blackHawk w-screen h-screen pl-4 pt-3 z-20"></div> -->
    <div class="mb-8 text-darkGrayishBlue hover:text-black cursor-pointer">
      <font-awesome-icon @click="switchStore.switchMenu" icon="fa-solid fa-xmark" />
    </div>
    <Ul class="flex flex-col space-y-3 font-bold">
            <li class="cursor-pointer hover:text-darkGrayishBlue">Collections</li>
            <li class="cursor-pointer hover:text-darkGrayishBlue">Men</li>
            <li class="cursor-pointer hover:text-darkGrayishBlue">Women</li>
            <li class="cursor-pointer hover:text-darkGrayishBlue">About</li>
            <li class="cursor-pointer hover:text-darkGrayishBlue">Contact</li>
        </Ul>
  </div>
</template>
