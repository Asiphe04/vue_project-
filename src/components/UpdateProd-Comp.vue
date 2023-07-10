<template>
    <div>
      <button @click="openModal">Update Product</button>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <h2>Update Product</h2>
  
          <form @submit.prevent="updateProduct">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" v-model="updatedProduct.name" required>
  
            <label for="productPrice">Product Price:</label>
            <input type="number" id="productPrice" v-model="updatedProduct.price" required>
  
            <label for="productCategory">Product Category:</label>
            <input type="text" id="productCategory" v-model="updatedProduct.category" required>
  
            <button type="submit">Update</button>
          </form>
          
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false,
        updatedProduct: {
          name: "",
          price: null,
          category: "",
        },
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
        this.updatedProduct = {
          name: this.product.name,
          price: this.product.price,
          category: this.product.category,
        };
      },
      closeModal() {
        this.isModalOpen = false;
      },
      updateProduct() {
        // Dispatch an action to update the product using the updatedProduct data
        this.$store.dispatch("updateProduct", this.updatedProduct);
  
        // Close the modal
        this.isModalOpen = false;
      },
    },
    computed: {
      product() {
        // Replace this with the appropriate getter from your Vuex store
        return this.$store.state.product;
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
  