<template>
    <div>
      <button @click="openModal">Delete Product</button>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <h2>Delete Product</h2>
          <p>Are you sure you want to delete this product?</p>
          
          <button @click="deleteProduct">Delete</button>
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
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      deleteProduct() {
        // Dispatch an action to delete the product
        this.$store.dispatch("deleteProduct");
  
        // Close the modal
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
  
  .modal-content p {
    margin-bottom: 20px;
  }
  
  .modal-content button {
    margin-right: 10px;
  }
  </style>
  