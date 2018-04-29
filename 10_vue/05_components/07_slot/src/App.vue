<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <Quotes>
                <h1>A beautiful Quote</h1>
                <p>{{ quote }}</p>
              </Quotes>
            </div>
        </div>
    </div>
</template>

<script>
import Quotes from './Quotes.vue'

    export default {
      data(){
        return {
          // We can pass data through slots
          quote: 'To be or not to be... That\'s the question'
        }
      },
      components: {
        Quotes
      }
    }
</script>

<style>
</style>
