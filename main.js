// `use strict`
//
// // COFFEE - TABLE CONTENT //
//
// const coffees = [
//     { id: 1, name: "Light City", roast: "light" },
//     { id: 2, name: "Half City", roast: "light" },
//     { id: 3, name: "Cinnamon", roast: "light" },
//     { id: 4, name: "City", roast: "medium" },
//     { id: 5, name: "American", roast: "medium" },
//     { id: 6, name: "Breakfast", roast: "medium" },
//     { id: 7, name: "High", roast: "dark" },
//     { id: 8, name: "Continental", roast: "dark" },
//     { id: 9, name: "New Orleans", roast: "dark" },
//     { id: 10, name: "European", roast: "dark" },
//     { id: 11, name: "Espresso", roast: "dark" },
//     { id: 12, name: "Viennese", roast: "dark" },
//     { id: 13, name: "Italian", roast: "dark" },
//     { id: 14, name: "French", roast: "dark" },
// ];
//
// const inputName = document.querySelector("#input-name");
// const inputRoast = document.querySelector("#input-roast");
// const addCoffeeButton = document.querySelector("#input-submit");
// addCoffeeButton.addEventListener("click", () => {
//     addCoffees();
// });
//
// function addCoffees(input) {
//     // check if any characters are not numbers
//     if (inputName.value.split('').some(char => isNaN(char))) {
//         const addID = coffees.length + 1;
//         let addName = inputName.value.toString();
//         const addRoast = inputRoast.value.toString();
//         addName = addName.charAt(0).toUpperCase() + addName.slice(1); // make first letter uppercase
//         input = { id: addID, name: addName, roast: addRoast };
//         coffees.push(input);
//         console.log(coffees);
//         tbody.innerHTML = renderCoffees(coffees);
//     } else {
//         // display alert message
//         alert("Error: Only letters are allowed. Please enter a valid coffee name.");
//     }
// }
//
// // PUTS COFFEE DATA INTO TABLE WITHIN JS //
// function renderCoffee(coffee) {
//     const html = `<div class="coffee d-block col-4 mx-auto p-auto">
//     <h1>${coffee.name}</h1>
//     <p>${coffee.roast}</p>
//   </div>`;
//
//     return html;
// }
//
// // CONVERTS ABOVE TABLE DATA INTO STRINGS //
// function renderCoffees(coffees) {
//     let html = "";
//     coffees.forEach((coffee) => {
//         html += renderCoffee(coffee);
//     });
//     return html;
// }
//
// // "EXPORTS" DATA INTO TABLE OF HTML //
// const tbody = document.querySelector("#coffees");
// tbody.innerHTML = renderCoffees(coffees);
//
// // SUBMIT SECTION //
// const roastSelection = document.querySelector("#roast-selection");
//
// function updateCoffees(e) {
//     e.preventDefault();
//     const selectedRoast = roastSelection.value;
//     const filteredCoffees = [];
//     coffees.forEach((coffee) => {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         } else if (roastSelection.value === "all") {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // LIVE SEARCH FUNCTION //
// function searchCoffees() {
//     const searchRoast = searchBox.value.toUpperCase();
//     const filteredCoffees = [];
//     console.log(searchRoast);
//     coffees.forEach((coffee) => {
//         if (coffee.name.toUpperCase().includes(searchRoast)) {
//             filteredCoffees.push(coffee);
//             console.log(filteredCoffees);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // RESET TO DEFAULT TABLE //
// function resetCoffees() {
//     tbody.innerHTML = renderCoffees(coffees);
// }
//
// // Event listeners
// roastSelection.addEventListener("change", updateCoffees);
// searchBox.addEventListener("keyup", searchCoffees);
// resetButton.addEventListener("click", resetCoffees);
//





//
//
//
// "use strict"
//
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);
//
//
//
//
//
//
//
//
//
//
//
//





// const coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// const inputName = document.querySelector("#input-name");
// const inputRoast = document.querySelector("#input-roast");
// const addCoffeeButton = document.querySelector("#input-submit");
// addCoffeeButton.addEventListener("click", () => {
//     addCoffees();
// });