"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  let number;
  const array = [
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
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40"
  ];

  function heightChange() {
    document.querySelectorAll(".bar").forEach((bar, i) => {
      bar.style.height = array[i] + "vh";
    });
  }
  setInterval(() => {
    number = Math.floor(Math.random() * 80);
    array.push(number);
    console.clear();
    console.log(array);
    if (array.length > 40) {
      array.shift();
    }
    heightChange();
  }, 450);
}
