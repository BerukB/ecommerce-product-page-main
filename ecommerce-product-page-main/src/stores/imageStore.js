import { defineStore } from 'pinia'

import imageProduct1 from "@/images/image-product-1.jpg";
import imageProduct2 from "@/images/image-product-2.jpg";
import imageProduct3 from "@/images/image-product-3.jpg";
import imageProduct4 from "@/images/image-product-4.jpg";

import imageThumbnail1 from "@/images/image-product-1-thumbnail.jpg";
import imageThumbnail2 from "@/images/image-product-2-thumbnail.jpg";
import imageThumbnail3 from "@/images/image-product-3-thumbnail.jpg";
import imageThumbnail4 from "@/images/image-product-4-thumbnail.jpg";


export const useImageStore = defineStore('imageStore', () => {

const productImages = [imageProduct1,imageProduct2,imageProduct3,imageProduct4];
const thumbnailImages = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4];


  return {productImages,thumbnailImages}
})
