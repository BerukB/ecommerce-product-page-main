import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemCounter = defineStore('itemCounter', () => {
  const itemPrice = 125
  const itemAmount = ref(0)
  const sum = ref(0)
  const cartItemAmount = ref(0)
  const isCartEmpty = computed(() => cartItemAmount.value === 0)

  const increaseAmount = () => {
    itemAmount.value += 1
  }

  const decreaseAmount = () => {
    if (itemAmount.value > 0) {
      itemAmount.value -= 1
    }
  }
  const addToCart = () => {
    if (itemAmount.value > 0 && itemAmount.value > cartItemAmount.value) {
      cartItemAmount.value = itemAmount.value + cartItemAmount.value - cartItemAmount.value
      sum.value = itemPrice * cartItemAmount.value
    }
  }

  const removeFromCart = () => {
    if (cartItemAmount.value > 0) {
      cartItemAmount.value = 0
      isCartEmpty.value = true
    }
  }

  return {
    cartItemAmount,
    itemAmount,
    isCartEmpty,
    sum,
    increaseAmount,
    decreaseAmount,
    addToCart,
    removeFromCart
  }
})
