<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Local Directives</h1>
                <p v-highlight:background.delay="'red'">Some highlighted text</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'highlight': {
          bind(el, binding, vnode){
            let delay = 0;
            if(binding.modifiers['delay']){
              delay = 2000;
            }

            setTimeout(() => {
              if(binding.arg === 'background'){
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, delay)
          }
        }
      }
    }
</script>

<style>

</style>
