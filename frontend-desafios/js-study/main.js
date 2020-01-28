function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  alert('Number of options selected: ' + howMany(document.getElementById('musicTypes')))
})

// Factorial
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(4))

var facty = 4*3*2*1 
console.log(facty)

function factorial2(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
}

console.log("Factorial de 4 é " + factorial2(4));

// Array and methods
let myArray = ['1', '2', '3', '4', '5', '1', '2'];
console.log(myArray.slice(1, 6)); // start index 1 and finish index 6 [2,3,4,5,1]

let a = [1, 2, 3]
a.map(function(element) { console.log(element*3) }) //[3,6,9]

let a1 = ['a', 10, 'b', 20, 'c', 30, 5]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // logs [10, 20, 30, 5]

function isNumber(value) {
  return typeof value === 'number'
}
let a3 = [1, 2, 3]
console.log(a3.some(isNumber))  // logs true
let a4 = [1, '2', 3]
console.log(a4.some(isNumber))  // logs true
let a5 = ['1', '2', '3']
console.log(a5.some(isNumber))  // logs false

let a6 = [11, 20, 30]
let total = a6.reduce(function(accumulator, currentValue) { return accumulator + currentValue })
console.log(total) // Prints 61

// Object and dot notation
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

const bodys = document.getElementsByTagName('body');
bodys.addEventListener('on load', document.write('Hello JavaScript, I\'ll the master ninja JS Dev! By the way, do you want a cookie? this was inserted by main.js document.write'))

function change() {
  // document.getElementsByTagName("H2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
  
  var header = document.getElementsByTagName('H2').item(0);
  // the firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document 2";
  // now the header is "A dynamic document".
  
  var para = document.getElementsByTagName("P").item(3);
  para.firstChild.data = "This is the first paragraph.";
  para.style.background = "rgb(255,0,0)";
  
  // create a new Text node for the second paragraph
  var newText = document.createTextNode("This is the second paragraph.");
  // create a new Element to be the second paragraph
  var newElement = document.createElement("P");
  // put the text in the paragraph
  newElement.appendChild(newText);
  // and put the paragraph on the end of the document by appending it to
  // the BODY (which is the parent of para)
  para.parentNode.appendChild(newElement);
}