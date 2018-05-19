const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post, cb){
  setTimeout(function() {
    posts.push(post);
    cb();
  }, 3333);
}

function getPosts(){
  posts.forEach(post => document.body.innerHTML += `<li>${post.title}: ${post.body}</li>`);
}

createPost({title: 'Another One', body: 'This is a headless body'}, getPosts);
