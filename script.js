const listSong = document.getElementById('listSong');

function fetchSongs(){
    fetch("music.json")
    .then(response => response.json())
    .then(data => {
      createListSong(data)
      console.log(data);
    });
  
}
fetchSongs();


function createListSong(song){
    for(let i=0; i<song.length; i++){
        //crear título de la lista
        let listTitle = document.createElement('h3');
        listTitle.classList.add('list-title');
        // crear el ol
        let card = document.createElement('ol');
        card.classList.add('song-card');
        // crear li
        let newList = document.createElement('li');
        newList.classList.add('element-list');
        // crear icono
        let iconList = document.createElement('i');
        //iconList.src = <i class="fa-solid fa-play"></i>
        // traer el nombre de la canción
        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = song[i].name;
        //traer el nombre del grupo
        let newGroupNameSong = document.createElement('p');
        newGroupNameSong.classList.add('nameGroup-list');
        // traer número de escuchas
        let newListeners = document.createElement('p');
        newListeners.classList.add('listeners-list');
        
        card.appendChild(newList);
        card.appendChild(h3);
        newList.appendChild(iconList);
        newList.appendChild(name);
        newListg.appendChild(newGroupNameSong)
        newList.appendChild(newListeners);

        listSong.appendChild(listTitle)

    }
}



/*
createListSong(fetchSongs()); */