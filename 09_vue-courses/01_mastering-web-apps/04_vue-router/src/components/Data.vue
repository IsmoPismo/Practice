<template id="">
<div class="col-md-12">
  <app-item
      v-for="(item, index) in items"
      key="index"
      :item="item"
  ></app-item>
</div>
</template>

<script type="text/javascript">
import Item from './Item.vue'

export default {
  data() {
    return {
      type: this.$route.params.type,
      item: []
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.item = [];
      this.type = this.$route.params.type;
      let initial_ids = [5, 15, 2];

      for (let i in initial_ids) {
        let id = initial_ids[i]
        fetch(`https://swapi.co/api/${this.type}/${id}`, {
            method: 'GET'
          })
          .then(response => response.json())
          .then(json => this.item.push(json))
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components: {
    'app-item': Item
  }
}
</script>
