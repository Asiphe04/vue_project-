<template>
 <header>
      <nav class="navbar position-sticky top-0 left-0 w-100">
        <div class="navbar d-flex">
          <div class="circle-link bg-success">
            <a href="#">FG</a>
          </div>
          <h3 class="text-white">FOOTY GOODS STORE</h3>
        </div>
        <ul
          class="links-container d-flex justify-content-center list-unstyled text-white"
        >
          <li class="link-item text-white">
           <router-link to="/" class="link text-decoration-none text-white">Home</router-link>
          </li>
          <li class="link-item text-white">
            <router-link to="/about" class="link text-decoration-none text-white">About</router-link>
          </li>

          <li class="link-item">
            <router-link to="/products" class="link text-decoration-none text-white">Products</router-link>
          </li>
          <li class="link-item">
            <router-link to="/contact" class="link text-decoration-none text-white">Contact</router-link>
          </li>
        </ul>
        <div class="nav d-flex justify-content-end">
          <div class="nav-items d-flex align-items-center">
            <router-link to="/admin"><img
                src="https://i.postimg.cc/ydw2YnDn/admin3-removebg-preview.png"
                alt="Cart-img"
            /></router-link>
           
            <a href="#" class="nav_bag"
              ><img
                src="https://i.postimg.cc/qMmLt28d/cart2-removebg-preview.png"
                alt="Cart-img"
                class="nav_bag"
            /></a>
          </div>
        </div>
      </nav>
      <!-- cart section -->
      <section>
        <div class="cart_container">
          <div class="cart_close_icon">
            <p class="close_icon" id="close_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="currentColor"
                class="catIcon"
                viewbox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
            </p>
          </div>

          <div class="cart_container_title">
            <h2 class="cart">Your Cart</h2>
          </div>

          <div class="cart_products"></div>

          <div class="cartTotalPrice">
            <h2 class="totalPrice"></h2>
          </div>

          <div class="clearCart">
            <button id="checkout" class="btn_clear" onclick="checkout()">
              Checkout
            </button>
            <button class="btn_clear">Clear Cart</button>
          </div>
        </div>
      </section>
    </header>
</template>

<script>
    export default{}


</script>

<style>
/* Navbar */
header {
  background-color: #161b22;
}
.circle-link {
  display: inline-block;
  width: 50px; /* adjust the size as needed */
  height: 50px; /* adjust the size as needed */
  border-radius: 50%;
  text-align: center;
  background-color: #f8f9fa; /* set initial background color */
  transition: background-color 0.3s ease;
  margin-right: 15px;
}

.circle-link:hover {
  background-color: #238636; /* set hover background color */
}

.circle-link a {
  display: inline-block;
  line-height: 50px; /* adjust the line-height to vertically center the text */
  color: white; /* set text color */
  text-decoration: none; /* remove underline */
}
.nav {
  padding: 2px 2vw;
}
/* cart section */

.cart_container {
  height: 100vh;
  width: 500px;
  position: fixed;
  background-color: #010409 !important;
  color: white;
  z-index: 2;
  top: 0;
  bottom: 0;
  overflow: auto;
  right: -500px;
  transition: 0.5s ease-in;
}

.cart_container.active {
  right: 0;
}

.close_icon {
  position: absolute;
  right: 10;
  top: 10;
  color: gray;
  cursor: pointer;
}

.cart_container_title {
  display: grid;
  place-content: center;
  margin-top: 3em;
}

.cartProduct,
.cart_product_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
}

.cart_product_img,
.cart_product_title {
  margin: 0 0.5em;
}

.cart_img {
  width: 30px;
  height: 30px;
}

.bxs-trash-alt {
  font-size: 20px;
  color: #ff0000;
  cursor: pointer;
}

.bxs-trash-alt:hover {
  color: #c40909;
}

.cart_amount {
  display: flex;
  justify-content: center;
  align-items: center;
}

.decrement,
.increment {
  margin: 0 0.5em;
  cursor: pointer;
}

.cartTotalPrice {
  text-align: center;
  margin: 2em 0 0 0;
}

.clearCart {
  margin: 2em 0;
  text-align: center;
  cursor: pointer;
}
.btn_clear {
  padding: 10px 20px;
  border: none;
  background-color: #f12a12;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}

.btn_clear:hover {
  background-color: #ff0000;
}

/* .nav-items a {
  margin-left: 0;
} */
.nav-items a img {
  width: 30px;
}
ul a img {
  margin: 10px;
  width: 40px;
}
ul a img:hover {
  margin: 10px;
  /* width: 50px; */
  color: green;
  background-color: green;
  background: green;
}

/* Media Queries */
@media (max-width: 767px) {
  /* Adjustments for smaller screens */
  .store-title {
    justify-content: center;
  }
  .store-title h2 {
    font-size: 18px;
  }
  .search {
    max-width: 100%; /* Allow full width on smaller screens */
  }
}
/* End of navbar */
/* Links */
.links-container {
  padding: 3px 3vw;
  list-style: none;
}

.link {
  padding: 0 5px;
  margin: 0 5px;
  color: white;
  transition: 0.5s;
}

.link:hover {
  /* background-color: #238636 ; */
  color: #238636 !important;
}
/* End of links */
</style>