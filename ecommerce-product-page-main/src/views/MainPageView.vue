<script setup>

import imageProduct1 from "@/images/image-product-1.jpg";
import imageProduct2 from "@/images/image-product-2.jpg";
import imageProduct3 from "@/images/image-product-3.jpg";
import imageProduct4 from "@/images/image-product-4.jpg";

import ImageSlider from "@/components/ImageSlider.vue"


const images = [imageProduct1,imageProduct2,imageProduct3,imageProduct4];

</script>
<template>
<div id="imageSlider">
<ImageSlider :imageUrls="images" />
</div>
</template>