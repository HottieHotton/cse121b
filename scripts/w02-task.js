/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Braxton Hotton';
let currentYear = "2023";
let profilePicutre = `images/family.png`;

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent= currentYear;
imageElement.setAttribute('src', profilePicutre);
imageElement.setAttribute('alt', `Family picture of ${fullName}`);


/* Step 5 - Array */
let favFood = ["Pasta", "Spicy Food", "Boneless Wings", "Pizza", "Dorito Dynamites", "Hot Cheetos"];
let newFood = "Ice Cream";
favFood.push(newFood);
foodElement.innerHTML += `<br>${favFood}`;
favFood.splice(0, 1);
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;

