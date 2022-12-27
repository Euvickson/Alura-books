// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if(r.erro)
//             throw Error('Esse CEP não existe!')
//         else {
//             console.log(r)
//         }})
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log("Processamento concluído"));

async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}}/json/`);
        var consultaCepConvertido = await consultaCep.json();
        if(consultaCepConvertido.erro) {
            throw Error('CEP não existente');
        }
        console.log(consultaCepConvertido);
        return consultaCepConvertido;
    } catch (erro){
        console.log(erro)
    }
};

// Para mais do que uma requisição
// let ceps = ['01001001', '01001000'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));
