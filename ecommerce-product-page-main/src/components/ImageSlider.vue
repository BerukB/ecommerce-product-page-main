<script setup>

import { ref } from 'vue';

const imageIndex = ref(0);

const props = defineProps({
    imageUrls: {
        type: Array
    }
})

const numberOfImages = props.imageUrls.length-1;

const nextImage = () => {
    imageIndex.value += 1;
}
const prevImage = () => {
    imageIndex.value -= 1;
}
console.log("image index", imageIndex.value)
console.log("number of images", numberOfImages)
</script>

<template>
    <div class="relative">
        <div class="flex justify-center z-10"><img :src=props.imageUrls[imageIndex] class="w-96 h-80 object-cover" alt=""/></div>
        <div class="">
            <div v-show="imageIndex>0" @click="prevImage" class="absolute bottom-36 ml-4 bg-white px-2 py-2 rounded-full" ><img src="../images/icon-previous.svg" class="bg-white px-1 w-5 h-5" alt=""></div>
            <div v-show="imageIndex!==numberOfImages" @click="nextImage" class="absolute bottom-36 right-0 mr-4 bg-white px-2 py-2 rounded-full"><img src="../images/icon-next.svg" class="bg-white px-1 w-5 h-5" alt=""></div>
        </div>
    </div>
</template>