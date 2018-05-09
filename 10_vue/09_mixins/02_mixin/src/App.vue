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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          text: 'Hello, dude!'
        }
      }
    }
</script>

<style>

</style>
