new Vue({
  el: "#app",
  data: {
    shapeStyles: {},
    employees: [
      {name: 'Abby', job: 'Marketing'},
      {name: 'Jimmy', job: 'Wanker'},
      {name: 'Timmy', job: 'Entartainer'}
    ],
    company: "Ismo inc."
  },
  methods: {
    changeShape(){
      if (typeof this.shapeStyles['background-color'] !== 'undefined'){
        Vue.set(this.shapeStyles, 'background-color', undefined);
      } else {
        Vue.set(this.shapeStyles, 'background-color', 'black');
      }
    }
  }
});
