/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "Braxton Hotton";
myProfile.photo = `images/family.png`;
myProfile.favoriteFoods = ["Pasta", "Spicy Food", "Boneless Wings", "Pizza", "Dorito Dynamites", "Hot Cheetos"];
myProfile.hobbies = ["Coding", "Video Games", "Music", "Camping"];
myProfile.placesLived = [];


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'West Jordan, UT',
    length: '18 years'
})


/* DOM Manipulation - Output */
console.log(myProfile.placesLived[0].place);
/* Name */
document.querySelector(`#name`).textContent = myProfile.name;
/* Photo with attributes */
imageElement = document.querySelector(`img`);
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Family picture of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let list = document.createElement(`li`)
    list.textContent = food
    document.querySelector(`#favorite-foods`).appendChild(list);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let list = document.createElement(`li`)
    list.textContent = hobby
    document.querySelector(`#hobbies`).appendChild(list);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let house = document.createElement(`dt`)
    house.textContent = location.place;
    let time = document.createElement(`dd`)
    time.textContent = location.length;
    document.querySelector(`#places-lived`).appendChild(house).appendChild(time);
});

