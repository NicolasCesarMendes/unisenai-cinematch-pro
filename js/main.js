class Filme {
  constructor(titulo, ano, diretor, genero) {
    this.titulo = titulo;
    this.ano = Number(ano);
    this.diretor = diretor;
    this.genero = genero;
  }
}

let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

function salvarLocalStorage() {
    localStorage.setItem("filmes", JSON.stringify(filmes));
}

function adicionarFilme() {
    const titulo = document.getElementById("titulo").value.trim();
    const ano = document.getElementById("ano").value;
    const diretor = document.getElementById("diretor").value.trim();
    const genero = document.getElementById("genero").value;

    const filme = new Filme(titulo, ano, diretor, genero);

    filmes.push(filme);

    salvarLocalStorage();
}