let currentNumber;

let talArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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

