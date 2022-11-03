<template>
  <div class="shopItems">
    <div class="grid grid-cols-4 gap-4" >
      <div class="" v-for="item in response" :key="item.index">
        <div class="h-20">
          <h1 class="text-center">{{item.title}}</h1>
        </div>
        <div>
          <img class="object-scale-down h-48 w-96" :src="item.image" :alt=item.title>
        </div>
        <div class="h-15">
          <p class="text-center">{{item.price}} €  isCLicked:{{item.isClicked}}</p>
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
    }
  },

  mounted(){
    this.getShopItems();
  }

}
</script>
