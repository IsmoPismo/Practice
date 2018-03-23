var movieDB = [
  {seen: true, title: "Matrix", rating: 5},
  {seen: false, title: "Figth Club", rating: 4.5},
  {seen: true, title: "Titanic", rating: 4},
]

var title = document.getElementById('title')
var watched = document.getElementById('watched')
var rating = document.getElementById('rating')

for (var i = 0; i < movieDB.length; i++) {
  if (movieDB[i].seen) {
    watched.innerHTML += "You've seen this movie<br>"
  } else {
    watched.innerHTML += "You've never seen this movie<br>"
  }
  title.innerHTML += movieDB[i].title + "<br>"
  rating.innerHTML += "Rating " + movieDB[i].rating + " stars<br>"
}
