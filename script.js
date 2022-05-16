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
    name.textContent = song[i].name;

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

//createListSong(fetchSongs());

/*VERSION TABLA ALTERNATIVA CECI
function createListSong(song){
    
    // crear la tabla
    let table = document.createElement('table');
    table.classList.add('Music');
       // crear tabla body
    let body = document.createElement('tbody');
    body.classList.add('bodytable');
    
    for(let i=0; i<song.length; i++){
        
        let rowListSong = document.createElement('tr');
        rowListSong.classList.add('element-row');
        
        
        // crear icono
        const iconList = document.createElement('td');
        //iconList.src = <i class="fa-solid fa-play"></i>
        rowListSong.appendChild(iconList);

        // crear el numero de la lista
        let attr = document.createElement('td');
        attr.classList.add('listnumer');
        attr.textContent = song[i].attr;
        rowListSong.appendChild(attr);


        // traer el nombre de la canción
        let name = document.createElement('td');
        name.classList.add('name');
        name.textContent = song[i].name;
        rowListSong.appendChild(name);
        
        //traer el nombre del grupo
        let newGroupNameSong = document.createElement('td');
        newGroupNameSong.classList.add('nameGroup-table');
        newGroupNameSong.textContent = song[i].artist.name;
        rowListSong.appendChild(newGroupNameSong);
        
        // traer número de escuchas
        let newListeners = document.createElement('td');
        newListeners.classList.add('listeners-table');
        newListeners.textContent = song[i].listeners + ' listeners';
        rowListSong.appendChild(newListeners);

        
        body.appendChild(rowListSong);
        table.appendChild(body);     
      
    }
     
    listSong.appendChild(table)
}
*/

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



