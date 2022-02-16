console.log('Ola!!!')
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const btn = document.querySelector('.btn');


    form.addEventListener ('submit', function(e) {
        e.preventDefault();
        const inputPeso = e.target.querySelector('.peso');
        const inputAltura = e.target.querySelector('.peso');

        var peso = Number(inputPeso.Value);
        var altura = Number(inputAltura.Value);

        const resultado = peso1 * altura1**2;
        console.log(peso1);
        console.log(altura1);
        console.log(resultado);
        resultado.innerHTML = String(resultado);
    
    });

}

meuEscopo();