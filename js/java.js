/*
function click(){
    alert("ERROR");
}
function click2(){
    click();
}
var boton = document.getElementById("a");
boton.addEventListener("click", click2);
*/
let participantes = ["yo","mis","mo","no","soy","you","and","me"]

function render(){
    let contenedor = document.getElementById("root");
    participantes.forEach(element =>contenedor.innerHTML += 
    "<div class='card col-5' >"
        +"<div class='card-body'>"
            +"<h5 class='card-title'>" + element + "</h5>"
            +"<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"
            +"<a href='#' onclick='click()' id='a' class='btn btn-primary'>Go somewhere</a>"
    +"</div>"
  +"</div>");
}render();

