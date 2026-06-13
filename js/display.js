const catalogo = document.getElementById("catalogo");
const filmes = JSON.parse(localStorage.getItem("filmes")) || [];

const totalMinutos = filmes.reduce((soma, filme) => soma + Number(filme.minutos), 0);
document.getElementById("totalFilmes").textContent = `Filmes cadastrados: ${filmes.length}`;
document.getElementById("totalMinutos").textContent = `Tempo total: ${totalMinutos} min`;

filmes.forEach((filme) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
        <img src="${filme.capa}" alt="Capa do filme ${filme.titulo}">
        <div class="card-body">
            <h3>${filme.titulo}</h3>
            <span class="genero">${filme.genero}</span>
            <span class="minutos">${filme.minutos} min</span>
        </div>
        <div class="card-trailer">
            <iframe src="https://www.youtube.com/embed/${filme.trailer}" allowfullscreen></iframe>
        </div>
    `;

    catalogo.appendChild(card);
});