<template>
     <table :to="{name: 'product', params: {id: product.id}}" id="productTable">
   <thead>
      <tr>
      <th class="td-id">ID</th>
      <th class="td-img">Image</th>
      <th>Item Name</th>
      <th>Price</th>
      <th class="td-desc">Description</th>
      <!-- <th>Category</th> -->
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="productList">
    <tr>
      <td class="td-id">{{ product.id }}</td>
      <td class="td-img"><img :src="product.img" :alt="product.itemName" class="w-25"></td>
      <td>{{product.itemName}}</td>
      <td>R{{product.price}}</td>
      <td class="td-desc">{{ product.desc }}</td>
      <!-- <td>{{product.category}}</td> -->
      <td>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
      </td>
    </tr>
  </tbody>
  </table>
</template>
<style>
button {
  width: 70px !important;
}
.deleteButton {
  padding: 6px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
}
.editButton {
  padding: 6px 12px;
  background-color: #238636;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 5px;
}

.deleteButton:hover {
  background-color: #c82333;
}

.deleteButton:focus {
  outline: none;
}

.deleteButton:active {
  background-color: #bd2130;
}

.deleteButton[data-index] {
  font-size: 14px;
  font-weight: bold;
}
/* Table styles */
#productTable {
  width: 100%;
  border-collapse: collapse;
}

#productTable th,
#productTable td {
  padding: 8px;
  color: white !important;
  border: 1px solid #ddd;
}

#productTable th {
  background-color: #010409 !important;
}
/* Media queries for smaller screens */
@media only screen and (max-width: 768px) {
  input {
    width: 100% !important;
  }

  #productTable th,
  #productTable td {
    font-size: 12px;
  }
  .td-desc {
    display: none;
  }
}

@media only screen and (max-width: 480px) {
  #productTable th,
  #productTable td {
    font-size: 10px;
  }
  .td-desc {
    display: none;
  }
  .td-quantity {
    display: none;
  }
  .td-img {
    display: none;
  }
  .td-id {
    display: none;
  }
}
</style>
<script>
 export default{
        props: ["product"]
    }
</script>

