new Vue({
  el: "#app",
  data: {
    movies: [
      {name: "Matrix", year: 1999},
      {name: "Matrix Reloaded", year: 2001},
      {name: "Matrix Revolutions", year: 2003}
    ]
  },
  methods: {
    addMovie(){
      this.movies.push({name: "Dump and Dumper", year: 1998});
    }
  },
  computed: {
    filmYear(){
      return this.movies.map(function(m){
        return `${m.name} (${m.year})`
      })
    }
  },
  watch: {
    movies(){
      alert(`The movie ${this.movies[this.movies.length - 1].name} was added`);
    }
  }
});
