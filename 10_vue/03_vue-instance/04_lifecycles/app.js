new Vue({
  el: "#app",
  data: {
    title: 'Vue cycles'
  },
  beforeCreate(){
    console.log('Before Create');
  },
  created(){
    console.log('Created');
  },
  beforeMount(){
    console.log('Before Mount');
  },
  mounted(){
    console.log('Mounted');
  },
  beforeUpdate(){
    console.log('Before Update');
  },
  updated(){
    console.log('Updated');
  },
  beforeDestroy(){
    console.log('Before Destroy');
  },
  destroyed(){
    console.log('Dead');
  },
  methods: {
    destroy(){
      this.$destroy();
    },
    update(){
      this.title = "Updated";
    }
  }
});
