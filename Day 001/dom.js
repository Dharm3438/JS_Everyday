console.dir(document)

// Select Single Element
const header = document.getElementById('header-title')
header.innerText = 'GoodBye'
header.style.color = 'Black'
console.log(header)

// Select Multiple Elements
const items = document.getElementsByClassName('list-group-item')
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4'
}

document.getElementsByTagName
document.querySelector
document.querySelectorAll

// -----------------------------------------------------------------------
// Traversing Dom
parentNode
parentElement
childNodes

firstChild
lastChild

nextSibling
previousSibling

// ------------------------------------------------------------------------
// Creating Dynamic elements and inserting
const newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'hello1'
newDiv.setAttribute('title', 'Hello World')

const newText = document.createTextNode('Hello World')
newDiv.appendChild(newText)

const container = document.querySelector('header .container')
container.insertBefore(newDiv, h1)

// ------------------------------------------------------------------------
// Events
