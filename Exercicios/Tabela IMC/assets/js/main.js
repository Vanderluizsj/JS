console.log('Ola!!!')
function meuEscopo(){
    const form = document.querySelector('.dados');
    const resultado = document.querySelector('.resultado');
    const btn = document.querySelector('.btn');


    function calculaIMC(evento){
    
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        var peso1 = peso.nodeValue;
        var altura1 = altura.nodeValue;

        const resultado = peso1 * altura1**2;
        console.log(peso);
        console.log(altura);
        console.log(resultado);
        resultado.innerHTML = String(resultado);
    };
    btn.addEventListener("click", calculaIMC);


}

meuEscopo();