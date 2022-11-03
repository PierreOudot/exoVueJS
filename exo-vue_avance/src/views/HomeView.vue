<template>
  <div class="shopItems">
    <div class="" v-for="item in response" :key="item.index">
      
      {{item.image}}
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
      response:[]
    }
  },

  methods:{
  
    async getShopItems(){
      try{
        let response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        return this.response = response.data;
      }catch (error){
        console.log(error);
      }
    }
  },

  mounted(){
    this.getShopItems();
  }
}
</script>
