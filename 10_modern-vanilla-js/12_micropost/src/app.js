import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load, waits for post submit click
document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', deletePost);
document.querySelector('#posts').addEventListener('click', enableEdit);
document.querySelector('.card-form').addEventListener('click', cancel);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  const data = {
    title,
    body
  }

  if(title === '' || body === ''){
    ui.showAlert('Please fill out all fields', 'alert alert-danger')
  } else {
    if(id === ''){
      // Create Post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post Added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err))
  } else {
    // Update Post
    http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post Updated', 'alert alert-success');
        changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err))
    }
  }
}

function deletePost(e){
  if(e.target.classList.contains("fa-remove")){
    const id = e.target.parentNode.getAttribute('data-id');
    http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Deleted', 'alert alert-success')
        getPosts()
      })
      .catch(err => console.log(err))
  }

  e.preventDefault();
}

function enableEdit(e){
  if(e.target.parentElement.classList.contains("edit")){
    const id = e.target.parentElement.getAttribute('data-id');
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
    const body = e.target.parentElement.previousElementSibling.innerText;
    const data = {
      id, title, body
    }

    ui.fillForm(data);
    changeFormState('edit');
  }
  e.preventDefault();
}

function cancel(e){
  if(e.target.classList.contains('cancel-submit')){
    changeFormState();
  }
}

function changeFormState(type){
  if(type === 'edit'){
    ui.postSubmit.textContent = 'Update Post';
    ui.postSubmit.classList = 'post-submit btn btn-warning';

    const cancelBtn = document.createElement('button');
    cancelBtn.classList = 'cancel-submit btn btn-outline-dark my-1'
    cancelBtn.appendChild(document.createTextNode('Cancel'));

    const cardForm = document.querySelector('.card-form');
    const formEnd = document.querySelector('.form-end');
    cardForm.insertBefore(cancelBtn, formEnd);
  } else {
    ui.postSubmit.textContent = 'Post it';
    ui.postSubmit.classList = 'post-submit btn btn-primary'
    if(document.querySelector('.cancel-submit')){
      document.querySelector('.cancel-submit').remove();
    }
    ui.clearInputId();
    ui.clearFields();
  }
}
