<template>
  <div class="shopItems">
    <div class="grid grid-cols-4 gap-4" >
      <div class="h-100" v-for="item in response" :key="item.index" >
        <div v-on:click="toggleIsClicked(item)">
          <div class="h-20">
          <h1 class="text-center">{{item.title}}</h1>
        </div>
        <div>
          <img class="object-scale-down h-48 w-96" :src="item.image" :alt="item.title">
        </div>
        <div class="h-15">
          <p class="text-center" :class="{'visible':item.isClicked}">{{item.price}} €  isCLicked:{{item.isClicked}}</p>
        </div>
      </div>
        <div class="h-10">
          <button v-if="item.isClicked" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" v-on:click="addToCart(item)" >add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'


export default {
  name: 'HomeView',
  components: {
    
  },

  data(){
    return{
      response:[],
      cart: []
    }
  },

  methods:{
  
    async getShopItems(){
      try{
        let response = await axios.get("https://fakestoreapi.com/products");
        //console.log(response.data);
       this.response = response.data;
       this.addButtonAttribute();
       return this.response
      }catch (error){
        console.log(error);
      }
    },

    addButtonAttribute(){
      this.response.forEach(
        item =>item.isClicked = false);
      this.response.forEach(
        item => console.log(item.isClicked));
    },

    toggleIsClicked(item){
      item.isClicked =! item.isClicked;
    },

    addToCart(item){
      this.cart.push(item);
    }
  },

  mounted(){
    this.getShopItems();
  }

}
</script>
