<template lang="html">
  <div>
    <h3>I'm the list.vue</h3>
    <ol>
      <li v-for="f in filteredFuits">{{ f }} <input type="text" v-model="inputText"></li>
    </ol>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';

export default {
  mixins: [fruitMixin],
}
</script>
