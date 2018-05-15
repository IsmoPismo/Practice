<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/add" exact>Add</router-link></li>
    </ul>
  </nav>
</template>

<script>

</script>

<style scoped>
  ul {
    list-style: none;
    text-align: center;
    margin: 0; }
  li {
    display: inline-block;
    margin: 0 10px; }
  a {
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 8px; }
  nav {
    background-color: #444;
    padding: 14px;
    margin-bottom: 40px; }
  .router-link-active {
    background-color: #eee;
    color: #444;
  }
</style>
