<template>
     <router-link :to="{name: 'product', params: {id: product.id}}" >
     <div class="top-picks-items col-3 container add {{ product.category }}">
        <img :src ="product.img" :alt="product.itemName" class="top-picks-img">
    
     <p>{{ product.itemName }}<br/>R{{ product.price }}</p>
     <button class="btn-add-to-cart btn" >Add to Cart</button>
      <button class="btn-see-more btn" >See More</button>
    </div>
</router-link>
</template>
<script>
 export default{
        props: ["product"]
    }
</script>
<style>
a{
    text-decoration: none;
   color: white;
}
.top-picks-img {
  height: 186px;
  width: 100%;
  padding: 5px;
  border-radius: 5% !important;
  
}
.top-picks-items {
  border: 1px solid white;
  margin: 5px;
  padding: 5px;
  text-align: center;
  border-radius: 5%;
  width: 85%;
  /* height: 270px; */

}

.top-picks-items:hover {
  background: #161b22 !important;
}
.btn-see-more {
  background: #232b36 !important;

  color: white !important;
  border-radius: 7% !important;
  width: 8em;

  border-style: none;
}
.btn-add-to-cart {
  background: #238636 !important;
  color: white !important;
  border-radius: 7% !important;
  width: 8em !important;
    margin: 5px;
  border-style: none;
}
</style>