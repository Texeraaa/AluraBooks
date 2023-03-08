const botoes = document.querySelectorAll(".btn__programacao")

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : filtrarPorCategoria(categoria)
    //Exibe Livros
    exibirLivros(livrosFiltrados)
    //Se categoria for disponivel, exibe valor total
    if(categoria == 'disponivel'){
        const valorTotal = calculaValorTotalDeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivrosDisponiveis(valorTotal){
    valorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}