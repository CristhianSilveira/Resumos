// 1- Objeto XMLHttpsRequest:
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.responseText);
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}
loadDoc();

// 2- Teste:
function loadDoc2() {
    const xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp2.open("GET", "ajax_info.txt");
    xhttp2.send();
}
loadDoc2();


// 3- xml e ajax
