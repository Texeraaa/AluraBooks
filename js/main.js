
async function buscaEndereco(cep){
    const mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = "";
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('Cep não existente!');
        }
            const cidade = document.querySelector('#cidade')
            const logradouro = document.querySelector('#endereco')
            const estado = document.querySelector('#estado')
            const bairro = document.querySelector('#bairro')

            estado.value = consultaCEPConvertida.uf;
            cidade.value = consultaCEPConvertida.localidade;
            bairro.value = consultaCEPConvertida.bairro;
            logradouro.value = consultaCEPConvertida.logradouro;

            console.log(consultaCEPConvertida)
            return consultaCEPConvertida
    }catch(erro){
        mensagemErro.innerHTML = '<p class="erro__texto">CEP invalido, tente novamente!</p>'
        console.log(erro)
    }
}
const cep = document.querySelector('#cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))