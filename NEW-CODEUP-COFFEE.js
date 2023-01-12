`use strict`

// COFFEE - TABLE CONTENT //

let ligthRoast = "photos/light-roast.png"
let mediumRoast = "photos/medium-roast.jpg"
let darkRoast = "photos/dark-roast.jpg"


const coffees = [
    { id: 1, pic: ligthRoast, name: "Light City", roast: "light", rating: "&#11088 &#11088 &#11088 &#11088 &#11088",  description:  " A light coffee most popular in the big city" },
    { id: 2, pic: ligthRoast, name: "Half City", roast: "light", rating: "&#11088 &#11088 &#11088",  description:  " Similar to 'light City' but more popular in smaller cities" },
    { id: 3, pic: ligthRoast, name: "Cinnamon", roast: "light", rating: "&#11088 &#11088 &#11088 &#11088",  description:  "A true classic Cinnamon taste and fan favorite" },
    { id: 4, pic: mediumRoast, name: "City", roast: "medium", rating: "&#11088",  description:  "This flavor is again similar to our 'light City' drink but has a darker roast" },
    { id: 5, pic: mediumRoast, name: "American", roast: "medium", rating: "&#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 6, pic: mediumRoast, name: "Breakfast", roast: "medium", rating: "&#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 7, pic: darkRoast, name: "High", roast: "dark", rating: "&#11088 &#11088 &#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 8, pic: darkRoast, name: "Continental", roast: "dark", rating: "&#11088 &#11088 &#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 9, pic: darkRoast, name: "New Orleans", roast: "dark", rating: "&#11088",  description:  "A light coffee most popular in the big city" },
    { id: 10, pic: darkRoast, name: "European", roast: "dark", rating: "&#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 11, pic: darkRoast, name: "Espresso", roast: "dark", rating: "&#11088",  description:  "A light coffee most popular in the big city" },
    { id: 12, pic: darkRoast, name: "Viennese", roast: "dark", rating: "&#11088 &#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 13, pic: darkRoast, name: "Italian", roast: "dark", rating: "&#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
    { id: 14, pic: darkRoast, name: "French", roast: "dark", rating: "&#11088 &#11088 &#11088",  description:  "A light coffee most popular in the big city" },
];

const inputName = document.querySelector("#input-name");
const inputRoast = document.querySelector("#input-roast");
const addCoffeeButton = document.querySelector("#input-submit");
const searchBox = document.querySelector('#searchBox');
const roastSelect = document.querySelector('#roast-selection')
addCoffeeButton.addEventListener("click", () => {
    addCoffees();

});

function addCoffees(input) {
    // check if any characters are not numbers
    if (inputName.value.split('').some(char => isNaN(char))) {
        const addID = coffees.length + 1;
        let addName = inputName.value.toString();
        const addRoast = inputRoast.value.toString();
        addName = addName.charAt(0).toUpperCase() + addName.slice(1); // make first letter uppercase
        input = { id: addID, name: addName, roast: addRoast };
        coffees.push(input);
        console.log(coffees);
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        // display alert message
        alert("Error: Only letters are allowed. Please enter a valid coffee name.");
    }
}

// PUTS COFFEE DATA INTO TABLE WITHIN JS //
function renderCoffee(coffee) {
    const html = `<div class="coffee d-block col-4 mx-auto p-auto">
    <div class="coffee-case"><img class="coffee-pics" src="${coffee.pic}"></div>
    <h1>${coffee.name}</h1>
    <p class="roast">${coffee.roast}</p>
    <p class="rating">${coffee.rating}</p>
    <p class="description">${coffee.description}</p>
  </div>`;

    return html;
}

// CONVERTS ABOVE TABLE DATA INTO STRINGS //
function renderCoffees(coffees) {
    let html = "";
    coffees.forEach((coffee) => {
        html += renderCoffee(coffee);
    });
    return html;
}

// "EXPORTS" DATA INTO TABLE OF HTML //
const tbody = document.querySelector("#coffees");
tbody.innerHTML = renderCoffees(coffees);

// SUBMIT SECTION //
const roastSelection = document.querySelector("#roast-selection");

function updateCoffees(e) {
    e.preventDefault();
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach((coffee) => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// LIVE SEARCH FUNCTION //
function searchCoffees() {
    const searchName = searchBox.value.toUpperCase();

    const filteredCoffees = [];
    coffees.forEach((coffee) => {
        if (coffee.name.toUpperCase().includes(searchName) && coffee.roast.toUpperCase() === roastSelect.value.toUpperCase()) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// RESET TO DEFAULT TABLE //
function resetCoffees() {
    tbody.innerHTML = renderCoffees(coffees);
}

// Event listeners
roastSelection.addEventListener("change", updateCoffees);
searchBox.addEventListener("input", searchCoffees);
//.resetButton.addEventListener("click", resetCoffees);








