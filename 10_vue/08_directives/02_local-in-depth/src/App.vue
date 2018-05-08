<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Local Directives</h1>
                <p v-highlight:background.blink="'red'">Some highlighted text</p>
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
            if (binding.modifiers['delay']){
              delay = 2000;
            }
            if (binding.modifiers['blink']){
              let mainCol = binding.value;
              let secCol = 'blue';
              let currentColor = mainCol;
              setTimeout(() => {
                setInterval(() => {
                  currentColor == mainCol ? currentColor = secCol : currentColor = mainCol;
                  if (binding.arg == 'background'){
                    el.style.backgroundColor = currentColor;
                  } else {
                    el.style.color = currentColor;
                  }
                }, 1000)
              }, delay)
            } else {
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
    }
</script>

<style>

</style>
