<template>
  <h1>Admin</h1>
   <div v-if="products">
   <TableComp v-for="product of products" :key="product.id" :product="product" />
   </div>
   <div v-else><h1>Error:404</h1></div>

</template>
<script>
  import TableComp from "@/components/Table-Comp.vue"
  export default {
    computed:{
      products(){
        return this.$store.state.products
      }
    },
      mounted(){
        this.$store.dispatch("getProducts")
      },
      components: {TableComp}
   
  }
</script>
<style>

</style>
