console.log("YAY!");

let selectedHero = "";

const printToDom = (stringToPrint, divID) => {
    let printTo = document.getElementById(divID);
    printTo.innerHTML = stringToPrint;
};

const buildDomString = (superheroArray) => {
    let stringToPrint = "";
    superheroArray.forEach((item) => {
        stringToPrint += `<li>`;
        stringToPrint +=   `<a class="heros" data-hero-id="${item.id}">${item.name}</a>`;
        stringToPrint += `</li>`; 
    });
    printToDom(stringToPrint, "awesome-dropdown");
}

const selectHero = (e) => {
    console.log(e.target.dataset.heroId);
    selectedHero = e.target.dataset.heroId;
    document.getElementById('awesome-button').classList.add('hide');
    genericHeroRequest(loadFileForSingleHero);
}

const displaySuperhero = heroes => {
    let domString = "";
    heroes.forEach(hero => {
      if (hero.id === selectedHero) {
        domString += `<div class="row">`;
        domString += `<div class="col-sm-4">`;
        if (hero.gender === "Male") {
          domString += `<img class="charImage maleImage" src="${
            hero.image
          }">`;
        } else {
          domString += `<img class="charImage femaleImage" src="${
            hero.image
          }">`;
        }
        domString += `</div>`;
        domString += `<div class="col-sm-6">`;
        domString += `<h2>Selected Hero: ${hero.name}</h2>`;
        domString +=     `<p class='charDescription'>${hero.description}</p>`;
        domString += `</div>`;
      }
    });
    printToDom(domString, "selected-hero");
  };

function loadFileForSingleHero () {
    const data = JSON.parse(this.responseText);
    displaySuperhero(data.superheroes);
}

const addHeroSelectionEventListeners = () => {
    let allMyHeros = document.getElementsByClassName('heros');
    for(let i = 0; i < allMyHeros.length; i++){
        allMyHeros[i].addEventListener('click', selectHero);
    }
}

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheroes);
    addHeroSelectionEventListeners();
}

function WTF () {
    console.log("OMG AN ERROR SHIT!");
}

function startApplication () {
    genericHeroRequest(executeThisCodeAfterFileLoaded);
}

const genericHeroRequest = (successFunction) => {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', successFunction);
    myRequest.addEventListener('error', WTF);
    myRequest.open("GET", "../db/superheros.json");
    myRequest.send();
}

startApplication();