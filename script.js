const botao = document.querySelectorAll('.btn');
const botoes = document.querySelectorAll('.calc-botoes button');
let tela = document.querySelector('.tela h1');
const resolver = document.querySelector('.resolver');
const deletar = document.querySelector('.deletar');
const apagar = document.querySelector('.apagar');
const desligar = document.querySelector('.led');

let conta = [];
botao.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    conta += e.target.innerHTML;
    tela.innerHTML = conta;
  });
});

resolver.addEventListener('click', function (e) {
  e.preventDefault();
  let numero = eval(conta);
  conta = numero.toString();
  tela.innerHTML = conta;
});

apagar.addEventListener('click', function (e) {
  e.preventDefault();
  conta = conta.substring(0, conta.length - 1);
  tela.innerHTML = conta;
});

deletar.addEventListener('click', function (e) {
  e.preventDefault();
  conta = '';
  tela.innerHTML = '0';
});

desligar.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.length == 1) {
    e.target.classList.add('desligado');
    conta = '';
    tela.innerHTML = '';
    botoes.forEach((item) => {
      item.setAttribute('disabled', true);
      item.classList.add('cursor');
    });
  } else {
    e.target.classList.remove('desligado');
    botoes.forEach((item) => {
      item.removeAttribute('disabled');
      item.classList.remove('cursor');
    });
  }
});
