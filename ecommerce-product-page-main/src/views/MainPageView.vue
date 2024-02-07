<script setup>

import imageProduct1 from "@/images/image-product-1.jpg";
import imageProduct2 from "@/images/image-product-2.jpg";
import imageProduct3 from "@/images/image-product-3.jpg";
import imageProduct4 from "@/images/image-product-4.jpg";

import ImageSlider from "@/components/ImageSlider.vue"
import SneakerDetails from "@/components/SneakerDetails.vue";
import DeskImage from "@/components/ImageComponent/DeskImage.vue"
import PopUpSlider from "@/components/ImageComponent/PopUpSlider.vue"


const images = [imageProduct1,imageProduct2,imageProduct3,imageProduct4];

</script>
<template>
<div class="font-kumbhSans container mx-auto">
    <div id="imageSlider" class="md:flex md:flex-row md:justify-center md:items-center md:space-x-16 md:p-16 md:relative">
    <ImageSlider :imageUrls="images" class=""/>
    <DeskImage class=""/>
    
    <div class="md:flex md:justify-start">
        <SneakerDetails />
    </div>
    <Teleport to="#portalRoot">
        <PopUpSlider/>
    </Teleport>
    
    </div>
</div>

</template>