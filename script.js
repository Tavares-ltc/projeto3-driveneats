let dishChosed = ''
let valor1 = 0
let drinkChosed = ''
let valor2 = 0
let dessertChosed = ''
let valor3 = 0

function dish(id, valor) {
    let cards = '';
    let checks = '';
    valor1 = valor;
    dishChosed = id;
    cards = document.querySelectorAll(".food-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }

    checks = document.querySelectorAll(".food-card #check")

    for (let p = 0; p < checks.length; p++) {
        checks[p].style.visibility = "hidden";
    }

    document.querySelector('#' + id).style.border = "thick solid #32B72F";
    document.querySelector('#' + id + ' img:last-child').style.visibility = "visible";
    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        document.querySelector("#button").style.backgroundColor = "#32B72F"
        document.querySelector("#button").innerHTML = "Fechar pedido"
    }

}
function drink(id, valor) {
    let cards = '';
    let checks = '';
    valor2 = valor;
    cards = document.querySelectorAll(".drink-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }

    checks = document.querySelectorAll(".drink-card #check")

    for (let p = 0; p < checks.length; p++) {
        checks[p].style.visibility = "hidden";
    }

    document.querySelector('#' + id).style.border = "thick solid #32B72F";
    document.querySelector('#' + id + ' img:last-child').style.visibility = "visible";

    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        document.querySelector("#button").style.backgroundColor = "#32B72F"
        document.querySelector("#button").innerHTML = "Fechar pedido"
    }

}
function dessert(id, valor) {
    let cards = '';
    let checks = '';
    valor3 = valor;
    dessertChosed = id;
    cards = document.querySelectorAll(".dessert-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }
    checks = document.querySelectorAll(".dessert-card #check")

    for (let p = 0; p < checks.length; p++) {
        checks[p].style.visibility = "hidden";
    }


    document.querySelector('#' + id).style.border = "thick solid #32B72F";
    document.querySelector('#' + id + ' img:last-child').style.visibility = "visible";


    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        document.querySelector("#button").style.backgroundColor = "#32B72F"
        document.querySelector("#button").innerHTML = "Fechar pedido"
    }

}

function calcular() {

    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {

    }
}