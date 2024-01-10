<script setup>
import { useItemCounter } from '@/stores/itemCounter'
const itemCount = useItemCounter();

</script>

<template>
    <div id="sneakerDetails" class="p-4 flex flex-col space-y-3">
        <article class="flex flex-col space-y-1">
            <p class="font-bold tracking-widest text-[10px] text-tannedOrange">SNEAKER COMPANY</p>
            <h2 class="pr-10 font-bold text-2xl">Fall Limited Edition Sneakers</h2>
            <p class="text-sm font-normal text-darkGrayishBlue">These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.</p>
        </article>
        <div class="flex justify-between items-center">
            <div>
                <p class="inline mr-3 font-bold text-lg">$125.00</p>
                <p class="inline font-bold text-xs bg-paleOrange py-0.5 px-2 text-tannedOrange rounded-md">50%</p>
            </div>
            <div>
                <p class="line-through font-bold text-sm text-grayishBlue">$250.00</p>
            </div>
        </div>
        <div class="flex justify-between items-center bg-lightGrayishBlue p-4 rounded-md">
            <div @click="itemCount.decreaseAmount" class="p-1"><img  src="../images/icon-minus.svg" class="w-3" alt="decrease icon"></div>
            <p class="font-bold text-sm">{{ itemCount.itemAmount }}</p>
            <img @click="itemCount.increaseAmount" src="../images/icon-plus.svg" class="w-3" alt="increase icon">

        </div>
        <div @click="itemCount.addToCart" class="bg-tannedOrange hover:bg-mediumOrange shadow-lg shadow-inherit flex cursor-pointer items-center justify-center space-x-4 p-4 rounded-md">
            <img src="../images/icon-cart.svg" class="w-4" alt="cart icon">
            <p class="font-bold text-white text-sm">Add to cart</p>
        </div>
    </div>
</template>