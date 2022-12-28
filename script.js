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

var cidade = document.getElementById('cidade');
var logradouro = document.getElementById('endereco');
var estado = document.getElementById('estado');
var bairro = document.getElementById('bairro');

async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertido = await consultaCep.json();
        if(consultaCepConvertido.erro) {
            throw Error('CEP não existente');
        }

        cidade.value = consultaCepConvertido.localidade;
        logradouro.value = consultaCepConvertido.logradouro;
        estado.value = consultaCepConvertido.uf;
        bairro.value = consultaCepConvertido.bairro;

        console.log(consultaCepConvertido);
        return consultaCepConvertido;
    } catch (erro){
        cidade.value = null;
        logradouro.value = null;
        estado.value = null;
        bairro.value = null;
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`;
        console.log(erro)
    }
};

// Para mais do que uma requisição
// let ceps = ['01001001', '01001000'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => {
    buscaEndereco(cep.value)
})
