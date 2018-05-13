const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
  // Load taskList
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', deleteTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  const li = document.createElement('li');
  const link = document.createElement('a');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  // store task in localStorage
  saveTask(taskInput.value);

  taskInput.value = '';
  e.preventDefault();
}

// save task
function saveTask(value){
  let tasks;
  if (localStorage.getItem('tasks') === null)
    tasks = [];
  else
    tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// get tasks
function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null)
    tasks = [];
  else
    tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.forEach(value => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(value));
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  })
}

function deleteTask(e){
  if(e.target.classList.contains('fa'))
    if(confirm('Are you sure'))
      e.target.parentElement.parentElement.remove();

  removeFromStorage(e.target.parentElement.parentElement);
}

// removing from localStorage
function removeFromStorage(taskItem){
  let tasks;
  if (localStorage.getItem('tasks') === null)
    tasks = [];
  else
    tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks(e){
  while(taskList.firstChild){
    taskList.firstChild.remove();
  }

  // clear from localStorage
  localStorage.clear();
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.collection-item');
  items.forEach(item => {
    if (item.innerText.toLowerCase().indexOf(text) == -1)
      item.style.display = 'none'
    else
      item.style.display = 'block'
  })
}
