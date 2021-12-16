let imgsNumbers = ["src/images/index/1.png", "src/images/index/2.png", "src/images/index/3.png", "src/images/index/4.png"];
let numCajas = 4;
let cajas = [];
let multDiv = document.getElementById("multDiv");
let parentesis = document.getElementById("parentesis");
let potencias = document.getElementById("potencias");
let sumResta = document.getElementById("sumResta");
let operators = [multDiv, parentesis, potencias, sumResta];
let cont = 0;
let helper = 0;
let ids = ["", "", "", ""];
let ordenCorrecto = ["parentesis", "potencias", "multDiv", "sumResta"];
let puntosTotales = 4;
let puntaje = 0;

function deshacer(){
    multDiv.removeAttribute("hidden");
    parentesis.removeAttribute("hidden");
    potencias.removeAttribute("hidden");
    sumResta.removeAttribute("hidden");
    cont = 0;
    puntaje = 0;
    writeHTML();
}

function putImages(id){
    id.setAttribute("hidden", "");
    cont += 1;
    
    if (id.getAttribute("id", "") == "multDiv"){
        helper = 0;
    } else if(id.getAttribute("id", "") == "parentesis"){
        helper = 1;
    } else if (id.getAttribute("id", "") == "potencias"){
        helper = 2;
    } else if (id.getAttribute("id", "") == "sumResta"){
        helper = 3;
    }

    cajas[cont-1].innerHTML = `<img src="${imgsNumbers[cont-1]}" alt="imagen${cont-1}" width="10%">
        <img src="${operators[helper].getAttribute("src", "")}" alt="operators">
    `;

    ids[cont-1] = id.getAttribute("id", "");
}

function writeHTML() {
    for (let i = 1; i <= numCajas; i++) {
        cajas[i - 1] = document.getElementById("cajaImg" + i);
    }

    for (let i = 0; i < cajas.length; i++) {
        cajas[i].innerHTML = `<img src="${imgsNumbers[i]}" alt="imagen${i}" width="10%">`;
    }

    document.getElementById("verificar").setAttribute("hidden", "");

    //console.log(multDiv.getAttribute("src"));
}

function validacion(){

    for (let i = 0; i < ids.length; i++) {
        if (ids[i] == ordenCorrecto[i]) {
            puntaje++;
        }
    }
    document.getElementById("verificar").removeAttribute("hidden");
    document.getElementById("reiniciar").removeAttribute("hidden");
    document.getElementById("volver").removeAttribute("hidden");
    document.getElementById("siguiente").removeAttribute("hidden");
    document.getElementById("btnDeshacer").setAttribute("hidden", "");
    multDiv.removeAttribute("onclick");
    parentesis.removeAttribute("onclick");
    potencias.removeAttribute("onclick");
    sumResta.removeAttribute("onclick");

    document.getElementById("resultado").innerHTML = '<h3>Obtuviste <span>' + puntaje + '</span> de <span>' + puntosTotales + '</span> puntos <h/3>';
}

writeHTML();