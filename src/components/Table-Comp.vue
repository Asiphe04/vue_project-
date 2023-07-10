<template>
     <table :to="{name: 'product', params: {id: product.id}}">
    <tr>
      <th>ID</th>
      <th>Image</th>
      <th>Item Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Category</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>1</td>
      <td><img :src="product.img" :alt="product.itemName" class="itemImg w-25"></td>
      <td>{{product.itemName}}</td>
      <td>{{product.desc}}</td>
      <td>{{product.price}}</td>
      <td>{{product.category}}</td>
      <td>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      </td>
    </tr>
  </table>
</template>
<style>
/* .itemImg{
    width: 20%;
} */
</style>
<script>
 export default{
        props: ["product"]
    }
</script>
