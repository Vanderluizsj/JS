function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log('form não enviado')
        
        
        const nome = form.querySelector('.nome');
        const sobrenome= form.querySelector('.sobrenomme');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        //Essa parte esta com erro 404 ainda 
        /*
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        */
    }

    form.addEventListener('submit', recebeEventoForm);
    
}
meuEscopo();