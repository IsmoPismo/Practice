<template lang="html">
  <div>
    <h3>I'm the list.vue</h3>
    <button type="button"
            @click="fruits.push('Berries')"
            class="btn btn-danger">Add Berries
    </button>
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
