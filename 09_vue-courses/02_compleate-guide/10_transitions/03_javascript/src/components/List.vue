<template id="">
  <div class="container">
  <button class="btn btn-green" @click="addItem">Add item</button>
  <ul class="list-group mt-2 ">
      <transition-group name="slide" tag='li'>
        <li v-for="(n, i) in array"
            :key="n"
            class="list-group-item"
            @click="removeItem">{{ n }}</li>
      </transition-group>
  </ul>
</div>
</template>

<script type="text/javascript">
export default {
  data(){
    return {
      array: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
    removeItem(i){
      this.array.splice(i, 1);
    },
    addItem(){
      const pos = Math.floor(Math.random() * this.array.length);
      this.array.splice(pos, 0, this.array.length + 1);
    }
  }
}
</script>

<style scoped>
  .slide-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  .slide-enter-active {
    transition: all 700ms linear;
  }
  .slide-leave-active {
    opacity: 0;
    transform: translateY(20px);
    transition: 500ms ease;
    position: absolute;
    display: block;
  }
  .slide-move {
    transition: transform 500ms linear;
  }
</style>
