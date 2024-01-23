<script setup>
import { useItemCounter } from '@/stores/itemCounter'
const itemCount = useItemCounter();

</script>

<template>
    <div id="sneakerDetails" class="p-4 flex flex-col space-y-5 md:w-96">
        <article class="flex flex-col space-y-3">
            <p class="font-bold tracking-widest text-[12px] text-tannedOrange">SNEAKER COMPANY</p>
            <h2 class="pr-10 font-bold text-2xl md:text-4xl md:pr-0">Fall Limited Edition Sneakers</h2>
            <p class="text-sm font-normal text-darkGrayishBlue">These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.</p>
        </article>
        <div class="flex justify-between items-center md:flex-col md:items-start">
            <div>
                <p class="inline mr-3 font-bold text-lg md:text-xl">$125.00</p>
                <p class="inline font-bold text-xs bg-paleOrange py-0.5 px-2 text-tannedOrange rounded-md md:text-sm">50%</p>
            </div>
            <div>
                <p class="line-through font-bold text-sm text-grayishBlue">$250.00</p>
            </div>
        </div>
        <div class="w-full md:flex justify-between">
            <div class="flex mb-5 justify-between items-center bg-lightGrayishBlue p-4 rounded-md md:w-1/3 md:mr-5 md:p-3 md:mb-0">
                <div @click="itemCount.decreaseAmount" class="py-1 cursor-pointer"><img  src="../images/icon-minus.svg" class="w-3" alt="decrease icon"></div>
                <p class="font-bold text-sm">{{ itemCount.itemAmount }}</p>
                <img @click="itemCount.increaseAmount" src="../images/icon-plus.svg" class="w-3 cursor-pointer" alt="increase icon">
            </div>
            <div @click="itemCount.addToCart" class="bg-tannedOrange hover:bg-mediumOrange shadow-lg shadow-inherit flex cursor-pointer items-center justify-center space-x-4 p-4 rounded-md md:w-2/3 md:p-3">
                <img src="../images/icon-cart.svg" class="w-4" alt="cart icon">
                <p class="font-bold text-white text-sm">Add to cart</p>
            </div>
        </div>
    </div>
</template>