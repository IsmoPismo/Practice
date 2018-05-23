<template id="">
  <div class="col-md-4" @click="switchItem">
  <div class="item-card">
    <div class="card-block">
      <h4 class="card-title">{{items.name}}</h4>
      <div v-for="(value, key, index) in items">
        <div v-if="index < 5">
          <strong>{{key}}</strong>: {{value}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
  export default {
    props: ['item']
  }
</script>
