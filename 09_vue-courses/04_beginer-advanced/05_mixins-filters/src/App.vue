<template>
<div>
  <nav>
    <button @click="activeView = 'app-products'">Products</button>
    <button @click="activeView = 'app-sidemap'">Sidemap</button>
  </nav>
  <keep-alive>
    <component :is="activeView"></component>
  </keep-alive>
</div>
</template>

<script>
import Products from './Products.vue'
import Sidemap from './Sidemap.vue'

export default {
  data() {
    return {
      activeView: 'app-sidemap'
    };
  },
  components: {
    'app-products': Products,
    'app-sidemap': Sidemap
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
}

button {
  border: 1px solid black;
  outline: none;
  padding: 15px;
  border-radius: 10px;
  margin: 20px;
  background-color: #abcdef;
}
</style>
