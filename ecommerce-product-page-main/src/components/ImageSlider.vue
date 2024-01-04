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
    <div class="z-10">
        <img :src=props.imageUrls[imageIndex] alt=""/>
        <img src="../images/icon-next.svg" alt="">
        <img src="../images/icon-previous.svg" alt="">
    </div>
</template>