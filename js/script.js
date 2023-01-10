let musicas = [
  {
    titulo: "From the Train Station",
    artista: "Igor Mascarenhas",
    source: "musicas/Igor Mascarenhas - From the Train Station.mp3",
    img: "img/madrugada-train-station.png",
  },
  {
    titulo: "Madrugada",
    artista: "Igor Mascarenhas",
    source: "musicas/Igor Mascarenhas - Madrugada.mp3",
    img: "img/madrugada-train-station.png",
  },
  {
    titulo: "No Vão",
    artista: "Igor Mascarenhas",
    source: "musicas/Igor Mascarenhas - No Vão.mp3",
    img: "img/no-vao.png",
  },
];

// INICIO
let musica = document.querySelector("audio");
let musicaIndex = 0;

let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
let imagem = document.querySelector("img");
let tempoDecorrido = document.querySelector(".tempo .inicio");
let duracaoMusica = document.querySelector(".tempo .fim");

nomeMusica.textContent = musicas[musicaIndex].titulo;
nomeArtista.textContent = musicas[musicaIndex].artista;
imagem.setAttribute("src", musicas[musicaIndex].img);
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

/* Eventos */

document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  musicaIndex--;
  if (musicaIndex < 0) {
    musicaIndex = 2;
  }
  renderizarMusica(musicaIndex);
});

document.querySelector(".proximo").addEventListener("click", () => {
  musicaIndex++;
  if (musicaIndex > 2) {
    musicaIndex = 0;
  }
  renderizarMusica(musicaIndex);
});

/* Funções */

function renderizarMusica(musicaIndex) {
  musica.setAttribute("src", musicas[musicaIndex].source);

  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[musicaIndex].titulo;
    nomeArtista.textContent = musicas[musicaIndex].artista;
    imagem.src = musicas[musicaIndex].img;

    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });

  document.body.append(musica);
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-play").style.display = "none";
  document.querySelector(".botao-pause").style.display = "block";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-play").style.display = "block";
  document.querySelector(".botao-pause").style.display = "none";
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;

  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}
