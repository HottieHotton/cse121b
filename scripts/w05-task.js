/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('div');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(temple =>{
        let article = document.createElement(`article`);
        let h3 = document.createElement(`h3`);
        h3.innerHTML = `${temple.templeName}`;
        let img = document.createElement(`img`);
        img.setAttribute(`src`, temple.imageUrl);
        img.setAttribute(`alt`, temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`);
    if(response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}
/* reset Function */
function reset(){
    templesElement.innerHTML = ``;
}
/* sortBy Function */
const sortBy = (temples) =>{
    reset();
    let filter = document.getElementById('sortBy').value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 1, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
}
getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});