<template>
    <div>
      <button @click="openModal">Create Product</button>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <h2>Create New Product</h2>
  
          <form @submit.prevent="createProduct">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="newProduct.name" required>
  
            <label for="productPrice">Product Price:</label>
            <input type="number" id="productPrice" v-model="newProduct.price" required>
  
            <label for="productCategory">Product Category:</label>
            <input type="text" id="productCategory" v-model="newProduct.category" required>
  
            <button type="submit">Create</button>
          </form>
          
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false,
        newProduct: {
          name: "",
          price: null,
          category: "",
        },
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      createProduct() {
        // Dispatch an action to create the product using the newProduct data
        this.$store.dispatch("createProduct", this.newProduct);
  
        // Clear the form and close the modal
        this.newProduct = {
          name: "",
          price: null,
          category: "",
        };
        this.isModalOpen = false;
      },
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
  }
  
  .modal-content form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .modal-content form label {
    font-weight: bold;
  }
  
  .modal-content form input[type="text"],
  .modal-content form input[type="number"] {
    width: 100%;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .modal-content form button {
    margin-top: 10px;
  }
  </style>
  