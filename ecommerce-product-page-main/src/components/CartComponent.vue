<script setup>

import { useItemCounter } from '@/stores/itemCounter'



const itemCount = useItemCounter();

</script>
<template>
    <div id="cart" class="md:relative md:w-full" >
        <div class="absolute flex pl-3 pt-2 md:right-0 md:-top-10">
            <div class="w-[22rem] h-64 z-20 drop-shadow-xl rounded-lg bg-white ">
                <p class="p-5 font-bold text-md">Cart</p>
                <hr>
                <div v-if="!itemCount.isCartEmpty" class="p-5 ">
                    <div class="flex justify-between text-md">
                        <img src="../images/image-product-1-thumbnail.jpg" class="w-14 rounded-md" alt="Sneaker">
                        <div class="">
                            <p class="text-darkGrayishBlue">Fall Limited Edition Sneaker</p>
                            <p class="inline">$125.00 x {{itemCount.cartItemAmount}} </p>
                            <p class="inline font-bold "> ${{itemCount.sum}}</p>
                        </div>
                        <img @click="itemCount.removeFromCart" src="../images/icon-delete.svg" class="object-contain cursor-pointer" alt="delete icon">
                    </div>
                    <div class="mt-6">
                        <button class="bg-tannedOrange rounded-lg w-full p-4 text-md font-bold text-white">Checkout</button>
                    </div>
                </div>
                <div v-if="itemCount.isCartEmpty" class="flex justify-center items-center h-40">
                             <p class="font-bold text-darkGrayishBlue">Your cart is empty.</p>
                </div>
            </div>
        </div>
    </div>
</template>
