new Vue({
  el: "#app",
  data: {
    title: "Back to the Future",
    year: 1985
  },
  methods: {
    isMovieOld(releaseYear){
      return releaseYear < 2000 ? 'old' : 'new'
    }
  }
})
