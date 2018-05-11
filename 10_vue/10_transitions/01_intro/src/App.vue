<template>
  <div id="app">
    <button type="button" id="dugme" @click="prikazano = !prikazano">Mijenjaj između prikazano i neprikazano</button>
    <transition>
    <div class="crnjo" v-if="prikazano">
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      prikazano: false,
    }
  }
}
</script>

<style>
.crnjo {
  width: 80vw;
  height: 95vh;
  border: 2px solid deepskyblue;
  background-color: royalblue;
}

.v-enter, v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: all 400ms ease-in;
}


</style>
