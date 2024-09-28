//cria uma função
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); //obtém a seção HTML onde os dados serão exibidos

    let campoPesquisa = document.getElementById ("campo-pesquisa").value;

    //se campoPesquisa for uma string vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum gatinho foi encontrado :( Você precisa digitar a cor dele.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; //inicializa uma string vazia para armazenar resultados 
    let titulo = "";
    let descricao = "";

//para cada dado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    //se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados +=  `
    <div class="item-resultado">
        <p>
        <h2>${dado.titulo}</h2>
        </p>
        <p>${dado.descricao} </p>
        <a href=${dado.link} target=_blank>Fotos</a>
    </div>
    `
    }

}

    if (!resultados) {
        resultados = "<p>Nenhum gatinho foi encontrado :(</p>"
    }

    //atribui resultados gerados à seção HTML
    section.innerHTML = resultados
}