console.log("YAY!");



const printToDom = (stringToPrint, divID) => {
    let printTo = document.getElementById(divID);
    printTo.innerHTML += stringToPrint;
}

const buildDomString = () => {


    printToDom();
}

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheros);
}

function xhrRequest () {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', WTF);
    myRequest.open("GET", "../db/superheros.json");
    myRequest.send();
}

function startApplication () {
    xhrRequest();
}

startApplication();