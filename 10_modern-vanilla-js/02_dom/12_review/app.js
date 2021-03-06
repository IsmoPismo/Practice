let val;

// DOCUMENT

document;
document.all;
document.head; // <head></head>
document.domain; // 127.0.0.1
document.URL // http://127.0.0.1:3000/
document.contentType; // text/HTML

document.forms; // HTML Collection
document.forms[0].method; // get

document.links[0].className; // delete-item secondary-content
// document.links[0].classList; // ["delete-item", "secondary-content", value: "delete-item secondary-content"]
// alert(Array.from(document.links[0].classList).map(x => console.log(`${x}
//
//   yo
//
//   `)));


document.images; // HTML Collecion
document.scripts[1].src; // or
document.scripts[1].getAttribute('src');

arrayFromCollection = Array.from(document.scripts);

arrayFromCollection.map( x => x.namespaceURI); // map over array


// SINGLE ELEMENT SELECTOR

arrayFromTokens = document.getElementById('task-title');
Array.from(arrayFromTokens.classList).map(x => x);

arrayFromTokens.style.color = 'red';
arrayFromTokens.innerText = 'red text'

document.querySelector('#tast-title');
document.querySelector('.card-title');
document.querySelector('h5');

document.querySelector('ul li').style.fontSize = '19px';
document.querySelector('li:nth-child(3)').style.margin = '12px';


// MULTY ELEMENTS SELECTOR
const arrayFromSomething = Array.from(document.getElementsByClassName('collection-item'));
// arrayFromSomething.map(x => x.textContent = "CHANGED");

const arrayFromUlFromLi = Array.from(document.querySelector('ul').getElementsByTagName('li'));
// arrayFromUlFromLi.map((x, i) => x.textContent = `List item number ${i + 1}`);

const arrayWithoutConverting = document.querySelectorAll('ul.collection li.collection-item');
// arrayWithoutConverting.map((x, i) => x.textContent = `Pointless Li number ${Math.ceil(Math.random() * 5)}`);
// arrayWithoutConverting.forEach((x, i) => x.textContent = `Pointless Li number ${Math.ceil(Math.random() * 5)}`); // NODE LIST can be looped over with forEach

console.log(arrayWithoutConverting);


// TRAVERSING
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes
list.childNodes; // node list with more than just the children (text nodes, comments and stuff)
list.children; // HTML collection!
list.childNodes[0].nodeType; // 3 =>
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

list.children[1].children[0].children[0]; // <i class="fa fa-remove"></i>

list.lastChild // Node (text, comment, element) but =>
list.lastElementChild // element
list.childElementCount // 5

// Get parrent nodes
list.parentNode; // <div...
list.parentElement; // same

// Siblings
list.nextSibling; // NODE
list.nextElementSibling;
list.previousElementSibling;


// CREATING ELEMENTS
const li = document.createElement('li');
li.className = 'collection-item';
li.id = "ajdi";
li.setAttribute('title', 'This is America');
li.appendChild(document.createTextNode('Hover over me'));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);
document.querySelector('ul').appendChild(li);

// REPLACE
const newH2 = document.createElement('h2');
newH2.innerText = 'This is the NEW header';
const oldH2 = document.getElementById('task-title');
oldH2.parentElement.replaceChild(newH2, oldH2);

// REMOVE
const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul');
lis[1].remove();
ul.removeChild(lis[2]);

// CLASS AND ATTR
let classAndAttr = lis[0].children[0];
classAndAttr.classList.add('america');
classAndAttr.classList.remove('delete-item', 'secondary-content');
classAndAttr.hasAttribute('href'); // true
classAndAttr.href = 'seted';


// EVENTS
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(event){
  event.target;
  event.type;
  event.timeStamp;
  event.clientX;
  event.offsetX;

  event.preventDefault();
}


// MOUSE
const card = document.querySelector('.card');

// card.addEventListener('click', runEvent);
// card.addEventListener('dblclick', runEvent);
// card.addEventListener('mousedown', runEvent);
// card.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

// card.addEventListener('mousemove', function(e){
//   card.style.backgroundColor = `rgb(40, ${e.offsetX / 7}, ${e.offsetY / 7})`
// });


// KEYBOARD
// form.addEventListener('submit', runEvent);
//taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', function(e){
//   console.log(`Event type: ${e.type}`);
// });


// EVENT DELEGATION
document.body.addEventListener('click', doSmth);
function doSmth(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}


// STORAGE
localStorage.setItem('ime', 'Ismar');
// localStorage.removeItem('ime');
// localStorage.getItem('ime');
// localStorage.clear();

// Look at the 11_storage lecture for a example
