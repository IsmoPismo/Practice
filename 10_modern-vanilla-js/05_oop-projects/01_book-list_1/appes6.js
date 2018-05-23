class Book {
  constructor(title, author, id){
    this.author = author;
    this.title = title;
    this.id = id;
  }
}

class UI {
  addBookToList(book){
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

  showAlert(msg, cls){
    const UIalert = document.createElement('div'),
          container = document.querySelector('.container'),
          form = document.querySelector('#book-form');

    UIalert.className = `alert ${cls}`;
    UIalert.appendChild(document.createTextNode(msg));
    container.insertBefore(UIalert, form);

    setTimeout(function() {
      UIalert.style.display = 'none';
    }, 3200);
  }

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

class Store {
  static getBooks(){
    if (localStorage.getItem('books') === null)
      return [];
    else
      return JSON.parse(localStorage.getItem('books'));
  }

  static displayBooks(){
    const books = Store.getBooks();
    const ui = new UI();
    books.forEach(book => ui.addBookToList(book));
  }

  static addBooks(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static deleteBooks(id){
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.id === id){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks)

document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        id = document.getElementById('isbn').value;

  const book = new Book(title, author, id);
  const ui = new UI();

  if(title === '' || author === '' || id === ''){
    ui.showAlert('Please fill out all fields', 'error')
  } else {
    ui.addBookToList(book);
    Store.addBooks(book);
    ui.clearFields();
    ui.showAlert('Book added', 'success');
  }
  e.preventDefault()
});

document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book removed', 'success')
  Store.deleteBooks(e.target.parentElement.previousElementSibling.innerText)

  e.preventDefault();
});;
