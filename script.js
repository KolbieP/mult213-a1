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


//This makes it so the h1 also changes depending on the house
const customizeHouse = (houseName) => {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    
    // Remove any existing house class
    body.className = '';

    // Add the new house class
    body.classList.add(houseName.house);

    // Change the h1 color based on the house
    switch (houseName.house) {
        case 'Ravenclaw':
            h1.style.color = '#ffd900';
            break;
        case 'Gryffindor':
            h1.style.color = '#d3a625';
            break;
        case 'Slytherin':
            h1.style.color = '#aaaaaa';
            break;
        case 'Hufflepuff':
            h1.style.color = '#262626';
            break;
        default:
            h1.style.color = '#000000'; // Default color
    }
};
    
//-------------------------------------------------------------------------------------------------------------------------------------


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


//-------------------------------------------------------------------------------------------------------------------------------------

//Finds the form and calls the fetchbook function
document.getElementById('bookForm').addEventListener('submit', event => {
    event.preventDefault(); // Prevent the form from reloading the page
    const bookNumber = parseInt(document.getElementById('bookNumber').value, 10);
    fetchBook(bookNumber);
});

//Fetch the book
const fetchBook = (bookNumber) => {
    fetch('https://potterapi-fedeperin.vercel.app/en/books')
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // If book number is valid, display the book. If not then throw alert
        if (bookNumber >= 1 && bookNumber <= data.length) {
            displayBook(data[bookNumber - 1]); // Adjusting for 0-based index
        } else {
            console.log("Invalid book number");
            alert("Invalid Input. Try again with a number 1-8")
        }
    })
    .catch(error => {
        console.log(error);
    });
}

//Displays the book and its infromation 
const displayBook = (bookNumber) => {
    // Display the Book data and cover
    document.getElementById('bookTitle').textContent = `${bookNumber.title}`;
    document.getElementById('bookDescription').textContent = `${bookNumber.description}`;
    document.getElementById('bookTitle').textContent = `${bookNumber.title}`;
    document.getElementById('bookImage').src = bookNumber.cover;
    document.getElementById('bookImage').hidden = false;

}