const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  // delete tasks
  taskList.addEventListener('click', deleteTask);
  // clear tasks
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks
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
  taskInput.value = '';

  e.preventDefault();
}

// deleting task
function deleteTask(e){
  if(e.target.classList.contains('fa'))
    if(confirm('Ara you sure'))
      e.target.parentElement.parentElement.remove();
}

// clearing tasts
function clearTasks(e){
  while(taskList.firstChild){
    taskList.firstChild.remove();
  }
}

// filtering tasks
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
