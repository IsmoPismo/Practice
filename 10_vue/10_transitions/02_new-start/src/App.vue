<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Ćiribu Ćiriba</h1>
                <hr>
                <button class="btn btn-primary"
                        @click="show = !show">Click the primary btn</button>
                <br><br>
                <div  class="alert alert-info"
                      v-if="show"
                >Some random text here to read...</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              show: true
            }
        }
    }
</script>

<style>

</style>
