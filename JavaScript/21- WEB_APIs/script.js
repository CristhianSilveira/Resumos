// 1- API de validação
function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      console.log(inpObj.validationMessage);
    } else {
      console.log("Input OK");
    } 
} 

// 2- API de armazenamento -> web storage:
localStorage.setItem("nome","João Gomes");
console.log(localStorage.getItem("nome"));

// 3- API fetch:
let file = "fetch_info.txt"

fetch (file)
.then(x => x.text())
.then(y => console.log(y));

/* É a mesma coisa que:
async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
}
*/

// 4- API de localização:
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log( "Geolocation não é suportado por seu navegador.");
  }
}

function showPosition(position) {
    console.log( "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
    
}
showPosition();