// Book Constructor
function Book(title, author, id){
  this.author = author;
  this.title = title;
  this.id = id;
}

// UI Constructor
function UI () {}

// UI prototype
UI.prototype.addBookToList = function(book){
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.id}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        id = document.getElementById('isbn').value;

  const book = new Book(title, author, id);
  const ui = new UI();

  ui.addBookToList(book);
  ui.clearFields();
  e.preventDefault()
});
