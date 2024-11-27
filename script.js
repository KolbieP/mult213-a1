
// Form Submission
document.getElementById('hogwartsForm').addEventListener('submit', event => {
    event.preventDefault(); // Prevent the form from reloading the page
    const houseName = document.getElementById('houseName').value.trim().toLowerCase();
    fetchHouse(houseName);
});

/*
document.querySelector("#forward").addEventListener('click', event => {
    console.log('forward button was clicked');
    // fetch pokemon that is +1 from id
    if(pokemon_id < 0) {
        console.log('please search for a pokemon first');
    } else {
        fetchPokemon(pokemon_id + 1);
        console.log(pokemon_id + 1);
    }
});


document.querySelector("#back").addEventListener('click', event => {
    console.log('back button was clicked');
    // fetch pokemon that is -1 from id
    if(pokemon_id < 0) {
        console.log('please search for a pokemon first');
    } else {
        console.log(pokemon_id);
        fetchPokemon(pokemon_id - 1);

    }
});

*/

const fetchHouse = (houseName) => {
    // Using a promise to fetch the Pokémon data
    // https://pokeapi.co/api/v2/pokemon/pikachu for example
    //fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //fetch(`https://potterapi-fedeperin.vercel.app/en/${houseName}`)
    fetch(`https://potterapi-fedeperin.vercel.app/en/houses`)
        .then(response => {
            if (!response.ok) {
                throw new Error("House not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayHouse(data);
        })
        .catch(error => {
            console.log(error);
        });
}

const displayHouse = (houseName) => {
    house_id = house.id;
    // Display the Pokémon data
    //document.getElementById('houseImage').src = emoji;
    //document.getElementById('houseImage').hidden = false;
    document.getElementById('houseInfo').textContent = `#${houseName.house} ${houseName.animal} ${houseName.colors}`;
}



    