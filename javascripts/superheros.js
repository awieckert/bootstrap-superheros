console.log("YAY!");



const printToDom = (stringToPrint, divID) => {
    let printTo = document.getElementById(divID);
    printTo.innerHTML += stringToPrint;
}

const buildDomString = (superheroArray) => {
    let stringToPrint = "";
    superheroArray.forEach((item) => {
        // stringToPrint += `<h3>${item.name}</h3>`;
        stringToPrint += `<div class="col-md-3">`;
        stringToPrint += `<div class="panel">`;
        stringToPrint +=   `<div class="panel-heading">`;
        stringToPrint +=    `<h3 class="panel-title">${item.name}</h3>`;
        stringToPrint +=   `</div>`;
        if(item.gender == "Male"){
            stringToPrint +=   `<div class="panel-body"><img class="charImage maleCharImage" src="${item.image}">`;
        } else {
            stringToPrint +=   `<div class="panel-body"><img class="charImage femaleCharImage" src="${item.image}">`;
        } 
        stringToPrint += `<p class="charDescription">${item.description}</p>`;
        stringToPrint += `</div>`;
        stringToPrint += `</div>`;
        stringToPrint += `</div>`;
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