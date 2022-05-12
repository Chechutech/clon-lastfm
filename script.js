const listSong = document.getElementById('listSong');

function fetchSongs(){
    fetch("music.json")
    .then(response => response.json())
    .then(data => {
      createListSong(data)
      console.log(data);
    });
  
}



function createListSong(song){
    // crear el ol
    const card = document.createElement('ol');
    card.classList.add('song-card');
    // traer el nombre
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = song.name.charAt(0).toUpperCase() + song.name.slice(1); 
}

