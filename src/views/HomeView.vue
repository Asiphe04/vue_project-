<template>
  <!-- Hero-section -->
  <div class="hero-section d-flex">
      <div class="content col-6 m-2" id="bg-image">
        <img src="https://i.postimg.cc/TYgMGrLL/celtic.png" alt="">
      </div>
      <div class="content" id="sec-hero">
        <p class="sub-heading">
          Experience the power of performance with Footy Goods!
        </p>
        <p class="sub-heading">Best Football Brand since existence</p>
        <button class="hero-button">
          <a href="/pages/products.html" class="text-white text-decoration-none"
            >Buy Now!</a
          >
        </button>
      </div>
    </div>
  <!-- End of hero-section -->
 <!-- Products -->
 <hr class="my-4" />
    <h2 class="text-white text-center">TOP PICKS</h2>
    <div class="container text-center text-white">
      <div
        class="top-picks-content row justify-content-center text-center align-items-center"
      >
        <div class="top-picks-items col-4 m-3">
          <div class="img-container">
            <img
              src="https://i.postimg.cc/Y0Ss04Z9/lotto-removebg-preview.png"
              alt=""
              class="top-picks-img"
            />
          </div>

          <p>
            Lotto Prime Orange
            <br />
            R 1 099. 99
          </p>
          <button class="btn-add-to-cart btn">
            <a
              href="/pages/products.html"
              class="text-white text-decoration-none"
              >See more</a
            >
          </button>
          <button class="btn-see-more btn" onclick="openPopup('popup1')">
            Info
          </button>
        </div>
        <div class="top-picks-items col-4 m-3">
          <div class="img-container">
            <img
              src="https://i.postimg.cc/90c63bvC/psl-removebg-preview.png"
              alt=""
              class="top-picks-img"
            />
          </div>

          <p>
            PSL Trophy
            <br />
            R 2 300.99
          </p>
          <button class="btn-add-to-cart btn">
            <a
              href="/pages/products.html"
              class="text-white text-decoration-none"
              >See more</a
            >
          </button>
          <button class="btn-see-more btn" onclick="openPopup('popup2')">
            Info
          </button>
        </div>
      </div>
    </div>
 <!-- End of products -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
/* Hero section */
.hero-section {
  width: 100%;
  height: 350px;
  background-size: cover;
  justify-content: center;
  background-repeat: no-repeat;
}
.hero-section .sub-heading {
  font-size: 30px;
}


.hero-button {
  background: #238636;
  color: white;
  border-radius: 7% !important;
  width: 8em;
  height: 2.7em;
  border-style: none;
}
.hero-button :hover {
  background: #238636 !important;
}

/* End of hero section */

/* Products */

.top-picks-items {
  border: 1px solid white;
  padding: 5px;
  text-align: center;
  border-radius: 5%;
}
.top-picks-img {
  height: 186px;
  width: 100%;
  padding: 5px;
  border-radius: 10% !important;
  object-fit: scale-down !important;
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

  border-style: none;
}
.img-container {
  width: 100% !important;
  height: 190px !important;
}

.img-container img {
  max-width: 100%;
  max-height: 100%;
  display: block; /* remove extra space below image */
  object-fit: cover;
}
/* Existing CSS styles */

.popup {
  display: none; /* Hide popup by default */
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  background-color: #010409;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  position: relative;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

/* End of existing CSS styles */


/* End of products */
</style>
