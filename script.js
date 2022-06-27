const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso && !altura) {
        imprimirResultado('', 'Peso e Altura inválidos', '#F2B000');
    } else if(!peso){
        imprimirResultado('', 'Peso Inválido', '#F2B000');
    } else if(!altura){
        imprimirResultado('', 'Altura Inválido', '#F2B000');
        
    } else {
        calculaImc(peso, altura);
    }

    function calculaImc(peso, altura) {
        const imc = Math.ceil(peso / (altura * altura));
        classificarImc(imc);
    }

    function classificarImc(imc){
        const classificaNiveis  = ['Obsidade Grau lll', 'Obsidade Grau ll', 'Obsidade Grau l', 'Acima do Peso', 'Peso Normal', 'Abaixo do Peso'];
        let nivel;
        let corFundo;
        if(imc >= 40){
            nivel = classificaNiveis[0];
            corFundo = '#FD3939';
        } else if(imc >= 35){
            nivel = classificaNiveis[1];
            corFundo = '#FD3939';
        } else if(imc >= 30){
            nivel = classificaNiveis[2];
            corFundo = '#FD3939';
        } else if(imc >= 25) {
            nivel = classificaNiveis[3];
            corFundo = '#F8D930';
        } else if(imc >= 18.5){
            nivel = classificaNiveis[4];
            corFundo = '#7EF482';
        } else {
            nivel = classificaNiveis[5];
            corFundo = '#FF8483';
        }
        imprimirResultado(imc, nivel, corFundo);
    }

    function imprimirResultado(imc, msg, corFundo) {
        const resultado = document.querySelector('#resultado');
        resultado.style.backgroundColor = corFundo;
        if(imc){
            resultado.innerHTML = `Seu IMC: ${imc} - ${msg}`;
        } else {
            resultado.innerHTML = `${msg}`;
        }
    }

});