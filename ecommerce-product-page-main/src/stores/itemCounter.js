import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useItemCounter = defineStore('itemCounter', () => {
    const itemPrice = 125;
    const itemAmount = ref(0);
    const sum = ref(0);
    const isCartEmpty = ref(true);

  const increaseAmount = () =>{
    itemAmount.value += 1;
    sum.value = itemPrice * itemAmount.value;
   }

   const decreaseAmount = () => {
    itemAmount.value -= 1;
    sum.value = itemPrice * itemAmount.value;
    if(itemAmount.value === 0){
        isCartEmpty.value = !isCartEmpty.value
    }
   }
    const addToCart = () => {
        if(itemAmount.value>0){
            isCartEmpty.value = !isCartEmpty.value
        }
        

    }

  return {itemAmount, isCartEmpty, sum, increaseAmount, decreaseAmount,addToCart}
})
