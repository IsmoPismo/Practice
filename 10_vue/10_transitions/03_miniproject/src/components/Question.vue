<template>
  <div class="question">
    <h2>What's 2 + 2?</h2>
    <p>5</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
  </div>
</template>

<style media="screen">
  .question {
    display: grid;
  }
  p {
    border: 1px solid black;
    border-radius: 15px;
    cursor: pointer;
    transition: all 180ms linear;
  }
  p:hover {
    background-color: gray;
    color: white;
  }
</style>
