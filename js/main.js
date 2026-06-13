const form = document.getElementById("filmeForm");

class Filme {
  constructor(titulo, genero, minutos, capa, trailer) {
    this.titulo = titulo;
    this.genero = genero;
    this.minutos = Number(minutos);
    this.capa = capa;
    this.trailer = trailer;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const filme = new Filme(
    document.getElementById("titulo").value,
    document.getElementById("genero").value,
    Number(document.getElementById("minutos").value),
    document.getElementById("capa").value,
    document.getElementById("trailer").value
  );

  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];

  filmes.push(filme);

  localStorage.setItem("filmes", JSON.stringify(filmes));

  alert("Filme cadastrado!");

  form.reset();
});