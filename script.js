//When button is clicked it runs the function fetchHouse()
document.querySelector("#gethouse button").addEventListener('click', event => {
    console.log('House Button was Clicked');
    fetchHouse();
});

//When button is called it calls this function
//This function calls the API
//
const fetchHouse = () => {
    // Using a promise to fetch the Hogwards Houses
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
             // Generate a random index between 0 and 3
            const randomIndex = Math.floor(Math.random() * 4);
            // Call the API with the randomly selected index
            displayHouse(data[randomIndex]);
        })
        .catch(error => {
            console.log(error);
        });
}

const displayHouse = (houseName) => {
    // Display the Hogwarts House data
    //document.getElementById('houseImage').src = emoji;
    //document.getElementById('houseImage').hidden = false;
    document.getElementById('houseInfo').textContent = `${houseName.emoji}`;
    document.getElementById('houseInfo').textContent = `${houseName.house}`;
    document.getElementById('houseAnimal').textContent = `${houseName.animal}`;
    document.getElementById('houseColors').textContent = `${houseName.colors[0]} ${houseName.colors[1]}`;
}



    