<script setup>

import { useImageStore } from '@/stores/imageStore';

const imageStore = useImageStore();

// const selectedIndex = ref(0);


const setSelectedIndex = (index) => {
    imageStore.selectedIndex = index;
    imageStore.popupOpened = true
};
</script>

<template>
    <div class="hidden md:block">
        <div class="mb-6 ">
            <img :src="imageStore.productImages[imageStore.selectedIndex]" class="w-96 rounded-xl" alt="">
        </div>
        <div class="flex w-96 justify-between">
            <button  v-for="(image, index) in imageStore.thumbnailImages" :key="index" class="w-20 h-20 rounded-xl border-2"
            :class="{ 'opacity-50': imageStore.selectedIndex === index, 'border-tannedOrange': imageStore.selectedIndex === index }" @click="setSelectedIndex(index)">
                <img :src="image" class="rounded-lg hover:opacity-50" alt="">
            </button>
        </div>
        
    </div>
</template>
 
