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
      fetch("https://asiphe04.github.io/db.json/" + id)
        .then((response) => response.json())
        .then((product) => context.commit("setProduct", product));
    },
    getProducts: async (context) => {
      fetch("https://asiphe04.github.io/db.json")
        .then((response) => response.json())
        .then((products) => context.commit("setProducts", products));
    },
  },
});
