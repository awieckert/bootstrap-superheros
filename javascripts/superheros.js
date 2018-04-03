console.log("YAY!");



const printToDom = (stringToPrint, divID) => {
    let printTo = document.getElementById(divID);
    printTo.innerHTML += stringToPrint;
}

const buildDomString = (superheroArray) => {
    stringToPrint = "";
    superheroArray.forEach((item) => {
        stringToPrint += `<h1>${item.name}</h1>`;
    });
    printToDom(stringToPrint, "hero-container");
}

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheroes);
}

function WTF () {
    console.log("OMG AN ERROR SHIT!");
}

function startApplication () {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', WTF);
    myRequest.open("GET", "../db/superheros.json");
    myRequest.send();
}

startApplication();