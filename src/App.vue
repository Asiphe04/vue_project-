<template>
   <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
  import NavBarComp from './components/NavBar-Comp.vue';
  import FooterComp from './components/FooterComp.vue';
  export default{
    components: {NavBarComp, FooterComp}
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #010409 ;
  color: white;
}
p{
  color: white;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
