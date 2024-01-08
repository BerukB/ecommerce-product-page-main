<script setup>

import { ref } from 'vue';

const imageIndex = ref(0);

const props = defineProps({
    imageUrls: {
        type: Array
    }
})
</script>

<template>
    <div class="relative ">
        <div class="flex justify-center z-10"><img :src=props.imageUrls[imageIndex] class="w-96 h-72 object-cover" alt=""/></div>
        <div class="absolute w-full h-full flex bottom-0 top-1 justify-between items-center px-4">
            <img src="../images/icon-previous.svg" class="bg-white px-3 py-2  rounded-full " alt="">
            <img src="../images/icon-next.svg" class="bg-white px-3 py-2 rounded-full" alt="">
        </div>
    </div>
</template>