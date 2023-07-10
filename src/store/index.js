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
      fetch("https://asiphe04.github.io/js_eomp/products.json")
        .then((res) => res.json())
        .then(({ products }) => {
          let product;
          products.forEach((prod) => {
            if (prod.id == id) {
              product = prod;
            }
          });
          context.commit("setProduct", product);
        });
    },
    getProducts: async (context) => {
      fetch("https://asiphe04.github.io/js_eomp/products.json")
        .then((response) => response.json())
        .then((data) => context.commit("setProducts", data.products));
    },
  },
});
