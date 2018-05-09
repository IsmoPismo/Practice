<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text }}</p>
                <input type="text" v-model="inputText">
                <ul>
                  <li v-for="fruit in filteredFuits">{{ fruit }}</li>
                </ul>
                <list></list>
            </div>

        </div>
    </div>
</template>

<script>
import list from './List.vue';
import { fruitMixin } from './fruitMixin';

    export default {
      data(){
        return {
          text: 'Hello, dude!'
        }
      },
      components: {
        list
      },
      mixins: [fruitMixin]
    }
</script>

<style>

</style>
