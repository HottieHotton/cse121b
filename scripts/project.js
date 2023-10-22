//Global variables
let scriptureList = [];
let results = document.querySelector("#results");




const getRandomScripture = async () => {
    const response = await fetch(`https://bible-api.com/?random=verse`, {mode: `no-cors`});
    if(response.ok){
        scriptureList = await response.json();
        return scriptureList;
    }
}

const displayScriptures = async () => {
    try {
        const scriptures = await getRandomScripture();
        if (scriptures && scriptures.length) {
            scriptures.forEach(scripture => {
                let h3 = document.createElement(`h3`);
                let p = document.createElement(`p`);
                h3.textContent = scripture.reference;
                p.textContent = scripture.text;
                results.appendChild(h3);
                results.appendChild(p);
            });
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

//document.querySelector(`#getScripture`).addEventListener(`click`, getScripture);
document.querySelector(`#getRandomScripture`).addEventListener(`click`, displayScriptures);