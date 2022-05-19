//Spinner de carga
window.onload=function(){
    $(`#onload`).fadeOut();
    $('body').removeClass("hidden");
}

//Fetch de canciones para el listado general (Historia 1 +2)
const listSong = document.getElementById("listSong");

let arraySongs = []
function fetchSongs() {
  listSong.innerHTML = "";
  fetch("music.json")
    .then((response) => response.json())
    .then((data) => {
      createListSong(data);
      arraySongs = data;
      console.log(arraySongs);
      console.log(data);
    });
}

fetchSongs();

//Función crea listado general (Historia 1 + 2)
function createListSong(song) {
  // crear la tabla
  let card = document.createElement("table");
  card.classList.add("table");
  card.classList.add("table-striped");

  
  //crear título de la tabla
  let listTitle = document.createElement("tbody");
  listTitle.classList.add("list-title");

  for (let i = 0; i < song.length; i++) {
    // crear tr
    let newList = document.createElement("tr");
    newList.classList.add("element-list");

    //crear números
    let numberList = document.createElement("td");
    numberList.textContent = i+1;
    
    // crear icono
    const iconList = document.createElement("img");
    iconList.classList.add("fa-solid");
    iconList.classList.add("fa-circle-play");
    newList.appendChild(iconList);



    // traer el nombre de la canción, crear icono y crear url (Historia 10)
    const name = document.createElement("td");
    name.classList.add("name");
    const enlace = document.createElement("a");
    enlace.classList.add("name-enlace");
    enlace.setAttribute("href", song[i].url);
    enlace.setAttribute("target","_blank");
    enlace.textContent = song[i].name;
    name.appendChild(enlace);

    //traer el nombre del grupo y crear url (Historia 11)
    let newGroupNameSong = document.createElement("td");
    newGroupNameSong.classList.add("nameGroup-list");
    const enlaceGrupo = document.createElement("a");
    enlaceGrupo.classList.add("name-grupo-enlace");
    enlaceGrupo.setAttribute("href", song[i].artist.url);
    enlaceGrupo.setAttribute("target","_blank");
    enlaceGrupo.textContent = song[i].artist.name;
    newGroupNameSong.appendChild(enlaceGrupo)

    // traer número de escuchas
    let newListeners = document.createElement("td");
    newListeners.classList.add("listeners-list");
    newListeners.textContent = song[i].listeners + " listeners";
    
    
    
    newList.appendChild(numberList);
    newList.appendChild(newGroupNameSong);
    newList.appendChild(name);
    newList.appendChild(newListeners);

    card.appendChild(listTitle);
    listTitle.appendChild(newList);
  }
  listSong.appendChild(card);
}


//Historia 3 - Top 10
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

//Historia 2
const overview = document.querySelector(".overviewFilter");
overview.addEventListener("click", fetchSongs);

//Historia 4 - rock
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

//Historia 5 hip-hop
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

//Historia 6 - Indie
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

//Historia 7 - jazz
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

//Historia 8 - Pop
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

//Historia 9
document.querySelector(".overviewFilter")

let overviewMenu=document.querySelector(".overviewFilter");
overviewMenu.addEventListener("click",clickorder1);

let top10Listened=document.querySelector(".topTenFilter");
top10Listened.addEventListener("click", clickorder2);

let theBiggest=document.querySelector(".theBiggestFilter");
theBiggest.addEventListener("click", clickorder3);

function clickorder1(){
       overviewMenu.style.color="rgb(186,0,0)"
       top10Listened.style.color="black"
       theBiggest.style.color="black"
    }
function clickorder2(){
      overviewMenu.style.color="black"
      top10Listened.style.color="rgb(186,0,0)"
      theBiggest.style.color="black"
    }
    function clickorder3(){
      overviewMenu.style.color="black"
      top10Listened.style.color="black"
      theBiggest.style.color="rgb(186,0,0)"
    }

//Historia 12 - The biggest

function fetchBiggest() {
  listSong.innerHTML = "";
  fetch("music.json")
    .then((response) => response.json())
    .then((data) => {
      const arraySongs = data
      
      console.log(arraySongs)

      //Creamos un nuevo objeto donde vamos a almacenar por grupos. 

      let escuchasArtista = {}
      //Recorremos el array 
      arraySongs.forEach( x => {
        if( !escuchasArtista.hasOwnProperty(x.artist.name)){
          escuchasArtista[x.artist.name] = {
            nombre:x.artist.name,
            escuchas: 0
          }
        }
  
        //Agregamos los datos de escuchas. 
        let listenersNumber = parseInt(x.listeners)
        escuchasArtista[x.artist.name].escuchas += listenersNumber
  
      })

      console.log({escuchasArtista})
      
      const convertedListenersNumber = Object.values(escuchasArtista)
      console.log(convertedListenersNumber)

      convertedListenersNumber.sort(function compare(listenersA, listenersB) {
        let bigListenersA = listenersA.escuchas;
        let bigListenersB = listenersB.escuchas;
        return bigListenersB - bigListenersA;
      });
      
      const theBiggest = convertedListenersNumber[0]
      console.log(theBiggest);
      createListSong(fetchBiggest);

      function filtrarPorMoreListeners(data) {
        if (data.artist.name.includes(theBiggest.nombre
            ))
            return data
      };
        const listaTheBiggest = data.filter(filtrarPorMoreListeners)
        console.log({listaTheBiggest})
        createListSong(listaTheBiggest)

    });
}
const biggestFilter =  document.querySelector('.theBiggestFilter');
biggestFilter.addEventListener("click", fetchBiggest);

biggestFilter.addEventListener("click", ()=>changeColor('.theBiggestFilter'));

