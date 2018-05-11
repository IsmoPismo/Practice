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
document.links[0].classList; // ["delete-item", "secondary-content", value: "delete-item secondary-content"]

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
