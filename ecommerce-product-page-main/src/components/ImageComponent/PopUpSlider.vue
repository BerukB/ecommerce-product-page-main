<script setup>

// import { ref } from 'vue';
import { useImageStore } from '@/stores/imageStore';

const imageStore = useImageStore();

// const selectedIndex = ref(0);

const setSelectedIndex = (index) => {
    imageStore.selectedIndex = index;
};

const numberOfImages = imageStore.productImages.length - 1;

const nextImage = () => {
    if (numberOfImages > imageStore.selectedIndex) {
        imageStore.selectedIndex += 1;

    }
}
const prevImage = () => {
    if (imageStore.selectedIndex <= numberOfImages && imageStore.selectedIndex > 0) {
        imageStore.selectedIndex -= 1;

    }

}
</script>

<template>
    <div v-show="imageStore.popupOpened" id="popupSlider" class="hidden fixed w-full h-screen md:flex justify-center items-center right-1 top-0 bg-blackHawk ">
        <div class="relative">
            <div @click="imageStore.popupOpened = false" class="py-5 pl-2 float-right cursor-pointer"><img src="@/images/icon-close.svg" alt="close Icon"></div>
            <div class="mb-6 ">
                <img :src="imageStore.productImages[imageStore.selectedIndex]" class="w-96 rounded-xl" alt="">
            </div>
            <div class="flex w-[22rem] mx-auto justify-between">
                <button v-for="(image, index) in imageStore.thumbnailImages" :key="index"
                    class="w-16 h-16 rounded-xl  bg-white"
                    :class="{ 'border-tannedOrange': imageStore.selectedIndex === index, 'border-2':  imageStore.selectedIndex === index }"
                    @click="setSelectedIndex(index)">
                    <img :class="{ 'opacity-50': imageStore.selectedIndex === index }" :src="image" class="rounded-lg hover:opacity-50"
                        alt="">
                </button>
            </div>
            <div id="" class="">
                <div @click="prevImage" class="absolute top-[14.5rem] -left-8 ml-4 bg-white px-2 py-2 rounded-full cursor-pointer">
                    <img src="@/images/icon-previous.svg" class="bg-white px-1 w-5 h-5" alt="previous icon">
                </div>
                <div @click="nextImage"
                    class="absolute bottom-[16.2rem] -right-8 mr-4 bg-white px-2 py-2 rounded-full cursor-pointer">
                    <img src="@/images/icon-next.svg" class="bg-white px-1 w-5 h-5" alt="next icon">
                </div>
            </div>
        </div>

    </div>
</template>
 
