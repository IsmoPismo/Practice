let val;

// DOCUMENT

document;
document.all; // Array
document.head; // <head></head>
document.domain; // 127.0.0.1
document.URL // http://127.0.0.1:3000/
document.contentType; // text/HTML

document.forms; // HTML Collection[0]
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
arrayFromSomething.map(x => x.textContent = "CHANGED");

const arrayFromUlFromLi = Array.from(document.querySelector('ul').getElementsByTagName('li'));
arrayFromUlFromLi.map((x, i) => x.textContent = `List item number ${i + 1}`);

const arrayWithoutConverting = document.querySelectorAll('ul.collection li.collection-item');
// arrayWithoutConverting.map((x, i) => x.textContent = `Pointless Li number ${Math.ceil(Math.random() * 5)}`);
arrayWithoutConverting.forEach((x, i) => x.textContent = `Pointless Li number ${Math.ceil(Math.random() * 5)}`); // NODE LIST can be looped over with forEach

console.log(arrayWithoutConverting);
