var roots = document.querySelector('#root')
var second = document.querySelector('#second')
var btnHello = document.getElementById('hello')
var btnSoma = document.getElementById('sum')
var btnExibe = document.getElementById('exibeNome')
var btnQtd = document.getElementById('exibeQtd')
var inputNome = document.querySelector('#nome')
var lamp = document.getElementById('lampApagada')
var nome = document.getElementById('nome2')
var sobrenome = document.getElementById('sobrenome')
var saudacao = document.getElementById('saudacao')
var soma1 = document.getElementById('soma1')
var soma2 = document.getElementById('soma2')
var btnResultado = document.getElementById('btn-soma')
var cpf = document.getElementById('cpf')
var quadrado = document.getElementById('quadrado')
var verde = document.getElementById('verde')
var vermelho = document.getElementById('vermelho')

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

lamp.onmouseover = function() {
  lamp.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
}

lamp.onmouseout = function() {
  lamp.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
}

saudacao.onclick = function() {
  alert(`Oi ${nome2.value} ${sobrenome.value}`)
}

// Função para criar um paragrafo com o valor digitado no input e criar outro paragrafo com o valor digitado sem a ponutação
cpf.onchange = function() {
  var span = document.createElement('p');
  var value = document.createTextNode(cpf.value);
  span.appendChild(value);
  second.appendChild(span)

  var paragrafo = document.createElement('p');
  var value2 = document.createTextNode(cpf.value.replace(/[^\d]+/g,''));
  paragrafo.appendChild(value2);
  second.appendChild(paragrafo)
  // alert(cpf.value.replace(/[^\d]+/g,''))
}

// Função para retornar a soma de dois valores digitados no input
btnResultado.onclick = function() {
  if(typeof soma1.value != 'number' && typeof soma2.value != 'number') {
    var soma = parseInt(soma1.value) + parseInt(soma2.value)
    var resultado = document.createTextNode(soma)
    document.getElementById('resultado-soma').appendChild(resultado)
  } else {
    alert('xiii!')
  }
}

// Estiliza um quadrado azul e cria duas funções para mudar a cor
quadrado.style.width = '100px';
quadrado.style.height = '100px';
quadrado.style.backgroundColor = 'blue'

verde.onclick = function() {
  quadrado.style.backgroundColor = 'green'
}

vermelho.onclick = function() {
  quadrado.style.backgroundColor = 'red'
}