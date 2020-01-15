// function howMany(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//   alert('Number of options selected: ' + howMany(document.selectForm.musicTypes) + ', sacou peixe?');
// });

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
