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
    
    // crear el ol
    let card = document.createElement('ol');
    card.classList.add('song-card');

    //crear título de la lista
    let listTitle = document.createElement('h3');
    listTitle.classList.add('list-title');

    for(let i=0; i<song.length; i++){
        
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
        newGroupNameSong.textContent = song[i].artist.name
        
        // traer número de escuchas
        let newListeners = document.createElement('p');
        newListeners.classList.add('listeners-list');
        newListeners.textContent = song[i].listeners
        
        newList.appendChild(iconList);
        newList.appendChild(newGroupNameSong)
        newList.appendChild(name);
        newList.appendChild(newListeners);

        card.appendChild(newList);
        card.appendChild(listTitle);

       

    }
    listSong.appendChild(card)
}



/*
createListSong(fetchSongs()); */