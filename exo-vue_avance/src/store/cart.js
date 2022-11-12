import { defineStore } from 'pinia'

export const useCounterStore = defineStore('cart', () => {
    const cart= ref([]);
    
    //const doubleCount = computed(() => count.value * 2)
    function addToCart(item){
        if(cart.includes(item)){
            item.quantity++;
        }else{
          item.quantity=1;
          cart.push(item);
        }
      }

    return { cart, addToCart };
  })
v  
  