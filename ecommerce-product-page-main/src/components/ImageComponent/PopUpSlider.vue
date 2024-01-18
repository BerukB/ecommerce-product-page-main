<script setup>

import { ref } from 'vue';
import { useImageStore } from '@/stores/imageStore';

const imageStore = useImageStore();

const selectedIndex = ref(0);


const setSelectedIndex = (index) => {
    selectedIndex.value = index;
};

</script>

<template>
    <div id="popupSlider" class="absolute w-full h-screen flex justify-center items-center right-1 bg-blackHawk ">
        <div class="">
            <img src="" alt="">
            <div class="mb-6 ">
                <img src="../../images/image-product-1.jpg" class="w-96 rounded-xl" alt="">
            </div>
            <div class="flex w-[22rem] mx-auto justify-between">
                <button v-for="(image, index) in imageStore.thumbnailImages" :key="index" class="w-16 h-16 rounded-xl  bg-white"
                :class="{'border-tannedOrange': selectedIndex === index, 'border-2': selectedIndex === index  }" @click="setSelectedIndex(index)">
                    <img   :class="{ 'opacity-50': selectedIndex === index}" :src="image" class="rounded-lg hover:opacity-50" alt="">
                </button>
            </div>
        </div>
    </div>
</template>
 
