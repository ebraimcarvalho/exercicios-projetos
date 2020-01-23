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

// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

// console.log(factorial(4))

var facty = 4*3*2*1 
console.log(facty)

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));

let myArray = ['1', '2', '3', '4', '5'];
console.log(myArray.slice(1, 5));

// let a = [1, 2, 3]
// a.map(function(element) { console.log(element*3) })

// let a1 = ['a', 10, 'b', 20, 'c', 30, 5]
// let a2 = a1.filter(function(item) { return typeof item === 'number'; })
// console.log(a2)  // logs [10, 20, 30]

function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.some(isNumber))  // logs true
let a2 = [1, '2', 3]
console.log(a2.some(isNumber))  // logs true
let a3 = ['1', '2', '3']
console.log(a3.some(isNumber))  // logs false

let a = [11, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue })
console.log(total) // Prints 60

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

const body = document.getElementsByTagName('body');
body.addEventListener('on load', document.write('Hello JavaScript, I\'ll the master ninja JS Dev!'))