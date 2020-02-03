var roots = document.querySelector('#root')
var btnHello = document.getElementById('hello')
var btnSoma = document.getElementById('sum')
var btnExibe = document.getElementById('exibeNome')
var btnQtd = document.getElementById('exibeQtd')
var inputNome = document.querySelector('#nome')

btnHello.onclick = function() {
  var paragrafo = document.createElement('h3')
  var texto = document.createTextNode('Hello World!')
  paragrafo.appendChild(texto)
  roots.appendChild(paragrafo)
}

// btnSoma.onclick = function() {
//   var soma = 2 + 2;
//   // roots.appendChild((document.createTextNode(`2+2 é ${soma}`)));
//   alert(`2+2 é ${soma}`);
// }

function soma() {
  var soma = 2 + 2;
  alert(`2+2 é igual a ${soma}`);
}

btnExibe.addEventListener('click', function() {
  alert('O nome completo é: ' + inputNome.value);
});

btnQtd.onclick = function() {
  alert('A quantidade de caracteres do campo é igual a ' + inputNome.value.length)
}