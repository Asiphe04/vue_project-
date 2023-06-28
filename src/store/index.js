import { createStore } from "vuex";

export default createStore({
  state: {
    product: null,
    products: null,
  },

  mutations: {
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
        .then((response) => response.json())
        .then((product) => context.commit("setProduct", product));
    },
    getProducts: async (context) => {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((products) => context.commit("setProducts", products));
    },
  },
});
