
/*
const fetchSpells = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    const spells = await res.json()

    return spells
}
//fetch('https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley')
fetch('https://potterapi-fedeperin.vercel.app/es/spells?')
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
*/

let hogwarts_id = -1;


// Form Submission
document.getElementById('hogwartsForm').addEventListener('submit', event => {
    event.preventDefault(); // Prevent the form from reloading the page
    const hogwartsName = document.getElementById('hogwartsName').value.trim().toLowerCase();
    fetchHouse(hogwartsName);
});


document.querySelector("#gethouse").addEventListener('click', event => {
    console.log('Hogwarts House Pending...');
    // fetch Hogwarts house that is +1 from id
    if(hogwarts_id < 0) {
        console.log('Something went wrong!'); 
    } else {
        fetchHouse(hogwarts_id);
        console.log(hogwarts_id);
    }
});
    
const fetchHouse = (name) => {
    // Using a promise to fetch the Hogwarts data
    // https://pokeapi.co/api/v2/pokemon/pikachu for example
    fetch(`https://potterapi-fedeperin.vercel.app/en/houses`)
        .then(response => {
            if (!response.ok) {
                throw new Error("House Not Found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            HogwartsHouseDisplay(data);
        })
        .catch(error => {
            console.log(error);
        });
}


const HogwartsHouseDisplay = (hogwarts) => {
    hogwarts_id = hogwarts.id;
    // Display the Hogwarts House data
    document.getElementById('HogwartsImage').src = emoji;
    document.getElementById('HogwartsImage').hidden = false;
    document.getElementById('HogwartsInfo').textContent = `#${hogwarts.house} ${hogwarts.colors} ${hogwarts.animal}`;
}
    