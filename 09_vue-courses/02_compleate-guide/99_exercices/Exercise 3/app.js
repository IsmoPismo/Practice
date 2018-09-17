new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result(){
            return this.value === 37 ? 'done' : 'not there yet'
          }
        },
        watch: {
          result: function(){
            setTimeout(() => {
              this.value = 0
            }, 500)
          }
        }
    });
