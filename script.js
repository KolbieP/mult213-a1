//When button is clicked it runs the function fetchHouse()
document.querySelector("#gethouse button").addEventListener('click', event => {
    console.log('House Button was Clicked');
    fetchHouse();
});

//When button is called it calls this function
//This function calls the API and grabs a random House from the API
const fetchHouse = () => {
    // Using a promise to fetch the Hogwards Houses
    fetch(`https://potterapi-fedeperin.vercel.app/en/houses`)
        .then(response => {
            if (!response.ok) {
                throw new Error("House not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
             // Generate a random index between 0 and 3
            const randomIndex = Math.floor(Math.random() * 4);
            // Call the API with the randomly selected index
            displayHouse(data[randomIndex]);
            customizeHouse(data[randomIndex]);
        })
        .catch(error => {
            console.log(error);
        });
}

//Displays the house and its infromation 
const displayHouse = (houseName) => {
    // Display the Hogwarts House data
    document.getElementById('houseName').textContent = `${houseName.house}`;
    document.getElementById('houseAnimal').textContent = `House Animal: ${houseName.animal} ${houseName.emoji}`;
    document.getElementById('houseColors').textContent = `House Colors: ${houseName.colors[0]} and ${houseName.colors[1]}`;
}


const customizeHouse = (houseName) => {
    document.querySelector("body").classList = [houseName.house];
}
    


//When button is clicked it runs the function fetchHouse()
document.querySelector("#getspell button").addEventListener('click', event => {
    console.log('Spell Button was Clicked');
    fetchSpell();
});

//When button is called it calls this function
//This function calls the API and grabs a random Spell from the API
const fetchSpell = () => {
    // Using a promise to fetch the Hogwards Spells
    fetch(`https://potterapi-fedeperin.vercel.app/en/spells`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Spell not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
             // Generate a random index between 0 and 3
            const randomIndex = Math.floor(Math.random() * 72);
            // Call the API with the randomly selected index
            displaySpell(data[randomIndex]);
        })
        .catch(error => {
            console.log(error);
        });
}

//Displays the spell and its infromation 
const displaySpell = (spellName) => {
    // Display the Spell data
    document.getElementById('spellName').textContent = `${spellName.spell}`;
    document.getElementById('spellUse').textContent = `Spells Use: ${spellName.use}`;
}
