const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Sua raiz quadrada é: ${numero**0.5}</p>`;
texto.innerHTML += `<p>É um NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `É um numero inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `Com arredondamento matematico fica: ${Math.round(numero)}</p>`;
texto.innerHTML += `Com arredondando para cima fica: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `Com arredondando para baixo fica: ${Math.floor(numero)}</p>`;
texto.innerHTML += `Com duas casas decimais fica: ${numero.toFixed(2)}</p>`;