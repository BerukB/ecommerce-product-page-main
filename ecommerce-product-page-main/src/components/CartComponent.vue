<script setup>
const itemAmount = 0;
const sum = 0;
const isEmpty = true;
</script>
<template>
    <div class="container mx-auto relative">
        <div class=" flex justify-center md:absolute md:right-0 md:-top-10">
            <div class="w-72 h-48 drop-shadow-xl rounded-lg bg-white ">
                <p class="p-4 font-bold text-sm">Cart</p>
                <hr>
                <div v-if="!isEmpty" class="p-4 ">
                    <div class="flex justify-between text-sm">
                        <img src="../images/image-product-1-thumbnail.jpg" class="w-10 rounded-lg" alt="Sneaker">
                        <div class="">
                            <p class="text-darkGrayishBlue">Fall Limited Edition Sneaker</p>
                            <p class="inline">$125.00 x {{itemAmount}} </p>
                            <p class="inline font-bold "> ${{sum}}</p>
                        </div>
                        <img src="../images/icon-delete.svg" class="object-contain" alt="delete icon">
                    </div>
                    <div class="mt-6">
                        <button class="bg-tannedOrange rounded-lg w-full p-3 text-sm font-bold text-white">Checkout</button>
                    </div>
                </div>
                <div v-if="isEmpty" class="flex justify-center items-center h-32">
                             <p class="font-bold text-darkGrayishBlue">Your cart is empty.</p>
                </div>
            </div>
        </div>
    </div>
</template>
