new Vue({
  el: '#exercise',
  data: {
    activeClass: 'highlight',
    userClass: '',
    bool: true,
    progress: 0,
    myStyles: {
      height: '100px',
      width: '140px',
      backgroundColor: 'blue'
    }
  },
  methods: {
    startEffect: function() {
      setInterval(()=> {
        this.activeClass === 'highlight' ? this.activeClass = 'shrink' : this.activeClass = 'highlight'
      }, 600)
    },
    startProgress: function() {
      const intervalId = setInterval(() => {
        if(this.progress < 100){
          this.progress++;
        } else {
          clearInterval(intervalId)
        }
      }, 45);
    }
  }
});
