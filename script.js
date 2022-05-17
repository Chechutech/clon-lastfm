window.onload=function(){
    $(`#onload`).fadeOut();
    $('body').removeClass("hidden");
}

const listSong = document.getElementById("listSong");

let arraySongs = []
function fetchSongs() {
  listSong.innerHTML = "";
  fetch("music.json")
    .then((response) => response.json())
    .then((data) => {
      createListSong(data)
      arraySongs = data
      console.log(arraySongs)
      console.log(data);
    });
}

fetchSongs();

function createListSong(song) {
  // crear el ol
  let card = document.createElement("table");
  card.classList.add("table");
  card.classList.add("table-striped");

  //crear título de la lista
  let listTitle = document.createElement("tr");
  listTitle.classList.add("list-title");

  for (let i = 0; i < song.length; i++) {
    // crear tr
    let newList = document.createElement("tr");
    newList.classList.add("element-list");

    // crear icono
    let iconList = document.createElement("i");
    iconList.classList.add("fa-solid");
    iconList.classList.add("fa-circle-play");

    // traer el nombre de la canción
    const name = document.createElement("td");
    name.classList.add("name");
    const enlace = document.createElement("a");
    enlace.setAttribute("href", song[i].url);
    enlace.textContent = song[i].name;
    name.appendChild(enlace)

    //traer el nombre del grupo
    let newGroupNameSong = document.createElement("td");
    newGroupNameSong.classList.add("nameGroup-list");
    newGroupNameSong.textContent = song[i].artist.name;

    // traer número de escuchas
    let newListeners = document.createElement("td");
    newListeners.classList.add("listeners-list");
    newListeners.textContent = song[i].listeners + " listeners";

    newList.appendChild(iconList);
    newList.appendChild(newGroupNameSong);
    newList.appendChild(name);
    newList.appendChild(newListeners);

    card.appendChild(newList);
    card.appendChild(listTitle);
  }
  listSong.appendChild(card);
}


//Historia 3 - falta vaciar la lista al empezar -
function fetchTop10Songs() {
  listSong.innerHTML = "";
  fetch("music.json")
    .then((response) => response.json())
    .then((data) => {
      data.sort(function compare(songA, songB) {
        let listenersSongA = parseInt(songA.listeners);
        let listenersSongB = parseInt(songB.listeners);
        return listenersSongB - listenersSongA;
      });

      const top10Songs = data.slice(0, 10);
      console.log(data, top10Songs);
      createListSong(top10Songs);
    });
}

const buttonTop10 = document.querySelector(".topTenFilter");
buttonTop10.addEventListener("click", fetchTop10Songs);

const overview = document.querySelector(".overviewFilter");
overview.addEventListener("click", fetchSongs);

//Historia 4 - rock
/*
function filtrarPorRock(arraySongs){
    if (arraySongs.genres.includes('rock'))
    return arraySongs
}
const listaRock = arraySongs.filter(filtrarPorRock)
console.log({listaRock})
console.log('arraySongs', JSON.stringify (arraySongs)) 

function fetchRock 
*/

function fetchRockSongs() {
  
 listSong.innerHTML = "";
    fetch("music.json")
      .then((response) => response.json())
      .then((data) => {
          function filtrarPorRock(data) {
        if (data.genres.includes('rock'))
        return data
      };
      const listaRock = data.filter(filtrarPorRock)
    console.log({listaRock})
    createListSong(listaRock)
 })
}

const rock = document.getElementById('rock');
rock.addEventListener("click", fetchRockSongs);

function fetchHipHopSongs() {
    listSong.innerHTML = "";
    fetch("music.json")
      .then((response) => response.json())
      .then((data) => {
          function filtrarPorHipHop(data) {
        if (data.genres.includes("Hip-Hop"
        ))
        return data
      };
      const listaHipHop = data.filter(filtrarPorHipHop)
    console.log({listaHipHop})
    createListSong(listaHipHop)
 })
}
const hipHop = document.getElementById('Hiphop');
hipHop.addEventListener("click", fetchHipHopSongs);

function fetchJazzSongs() {
    listSong.innerHTML = "";
    fetch("music.json")
      .then((response) => response.json())
      .then((data) => {
          function filtrarPorJazz(data) {
        if (data.genres.includes("jazz"
        ))
        return data
      };
      const listaJazz = data.filter(filtrarPorJazz)
    console.log({listaJazz})
    createListSong(listaJazz)
 })
}
const jazz = document.getElementById('jazz');
jazz.addEventListener("click", fetchJazzSongs); 

function fetchPopSongs() {
    listSong.innerHTML = "";
    fetch("music.json")
      .then((response) => response.json())
      .then((data) => {
          function filtrarPorPop(data) {
        if (data.genres.includes("pop"
        ))
        return data
      };
      const listaPop = data.filter(filtrarPorPop)
    console.log({listaPop})
    createListSong(listaPop)
 })
}
const pop = document.getElementById('pop');
pop.addEventListener("click", fetchPopSongs);

function fetchIndieSongs() {
    listSong.innerHTML = "";
    fetch("music.json")
      .then((response) => response.json())
      .then((data) => {
          function filtrarPorIndie(data) {
        if (data.genres.includes("indie"
        ))
        return data
      };
      const listaIndie = data.filter(filtrarPorIndie)
    console.log({listaIndie})
    createListSong(listaIndie)
 })
}
const indie = document.getElementById('indie');
indie.addEventListener("click", fetchIndieSongs);
