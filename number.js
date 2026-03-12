let currentNumber;

let prizeArray = ["Ingen præmie","Ingen præmie", "Ingen præmie", "PRÆMIE","Ingen præmie", "Ingen præmie", "Ingen præmie", "PRÆMIE", "Ingen præmie", "Ingen præmie", "Ingen præmie", "PRÆMIE"]
let numPrize = prizeArray.length;

let sponserArray = ["Havremælk",  ]


// finder et random tal fra array baseret på længden
function getRandomElement(arr) {
    if (arr.length === 0) {
        console.log("Arrayet er tomt!");
        return null;
    }

    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];

    arr.splice(randomIndex, 1); // fjerner elementet fra arrayet

    return randomElement;
}

