<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpper | to-lower }}</p>
                <input type="text" v-model="inputText">
                <ul>
                  <li v-for="fruit in filteredFuits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          text: 'Hello, dude!',
          fruits: ['Ananas', 'Jabuka', 'Dinja', 'Kruška', 'Lubenica'],
          inputText: ''
        }
      },
      filters: {
        toUpper(val){
          return val.toUpperCase();
        }
      },
      computed: {
        filteredFuits(){
          return this.fruits.filter((el) => el.match(this.inputText))
        }
      }
    }
</script>

<style>

</style>
