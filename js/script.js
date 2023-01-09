let musicas = [
  {
    titulo: "Guitar solo",
    artista: "João Tinti",
    src: "musicas/We Ride! - Reed Mathis.mp3",
    img: "img/rock.jpeg",
  },
  {
    titulo: "Samba raiz",
    artista: "Bossa Nova Brasil",
    src: "musicas/projeto_spotify_parte_1_musicas_Ella Vater - The Mini Vandals.mp3",
    img: "img/samba.jpeg",
  },
  {
    titulo: "Música Piano",
    artista: "John Green",
    src: "musicas/A Brand New Start - TrackTribe (1).mp3",
    img: "img/piano.jpeg",
  },
];

let musica = document.querySelector("audio");

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos() {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}
