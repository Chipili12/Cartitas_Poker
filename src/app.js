/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  function cartita(valor, palo) {
    // Creo el contenedor de la carta
    let card = document.createElement("div");
    card.classList.add("card", "col-md-auto");

    // Creo la parte de arriba (palo)
    const top = document.createElement("div");
    top.classList.add("card-top", "p-auto", "ps-2");
    top.classList.add(`palo-${palo}`);

    // Añado el palo a la izq arriba
    const topPalo = document.createElement("h2");
    topPalo.classList.add("palo-symbol");
    topPalo.innerText = palo;
    top.appendChild(topPalo);

    card.appendChild(top);

    // Crea la parte del medio de la carta
    const mid = document.createElement("div");
    mid.classList.add("card-mid");
    mid.classList.add(`palo-${palo}`); //colorcito del palo

    // Añade el valor al medio de la carta
    const valorMedio = document.createElement("h2");
    valorMedio.classList.add("valor-medio");

    valorMedio.innerText = valorToString(valor);
    mid.appendChild(valorMedio);

    card.appendChild(mid);

    // Crea la parte de (palo y valor)
    const bottom = document.createElement("div");
    bottom.classList.add("card-bottom", "p-auto", "pe-2");
    bottom.classList.add(`palo-${palo}`);

    // Añade palo abajo a la derecha
    const bottompaloSymbol = document.createElement("h2");
    bottompaloSymbol.classList.add("palo-symbol");
    bottompaloSymbol.innerText = palo;
    bottom.appendChild(bottompaloSymbol);

    card.appendChild(bottom);
    return card;
  }

  function randomizerpalo() {
    const palos = ["♠", "♥", "♦", "♣"];
    let palo = palos[Math.floor(Math.random() * palos.length)];
    return palo;
  }
  document.getElementById("generar").addEventListener("click", () => {
    contador++;
    if (contador > 1) {
      inputArray.length = 0;
    }
    cardContainer.innerHTML = "";
    inputArray.lenght = 0;
    let cant = document.getElementById("cant");
    for (let i = 0; i < cant.value; i++) {
      let card = createPokerCard();
      cardContainer.appendChild(card);
    }
  });
  document.getElementById("ordenar").addEventListener("click", () => {
    if (inputArray.length != 0) {
      cardContainer2.innerHTML = "";
    }
    inputArray.sort((a, b) => a[0] - b[0]);
    const valor = inputArray.map(array => valorToString(array[0]));
    const palo = inputArray.map(array => array[1]);
    for (let i = 0; i < inputArray.length; i++) {
      let card = cartita(valor[i], palo[i]);
      cardContainer2.appendChild(card);
    }
    inputArray.length = 0;
  });

  function randomizervalor() {
    const numero = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13"
    ];

    let valor = numero[Math.floor(Math.random() * numero.length)];

    return valor;
  }
  let inputArray = [];

  function createPokerCard() {
    // Random palo y valor

    // Call the cartita function and store the result in a variable
    let randoval = randomizervalor();
    let randopal = randomizerpalo();
    let card = cartita(randoval, randopal);
    const firstarray = [];
    firstarray.push(randoval, randopal);
    inputArray.push(firstarray);
    return card;
  }
  console.log(inputArray);

  let cardContainer = document.querySelector(".card-container");
  let cardContainer2 = document.querySelector(".card-container2");
  let contador = 0;
  // Boton generar cartas

  function valorToString(valor) {
    switch (valor) {
      case "1":
        return "A";
      case "11":
        return "J";
      case "12":
        return "Q";
      case "13":
        return "K";
      default:
        return valor;
    }
  }
};
