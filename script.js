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
        // crear el ol
        const card = document.createElement('ol');
        card.classList.add('song-card');
        // traer el nombre
        const name = document.createElement('p');
        console.log(name);
        name.classList.add('name');
        name.textContent = song[i].name;
    }
}

createListSong(fetchSongs());

