//"use strict";

/*const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g"];

console.log(letters[4]);

const newarr = letters;
newarr[4] = "*";

console.log(letters[4]);*/

//const people = ["Harry", "Ron", "Hermione"];

//console.log(people);

window.addEventListener("DOMContentLoaded", start);

function start() {
  let number = 0;
  const array = [];

  setInterval(function() {
    number++;
    array.unshift(number);
    console.clear();
    console.log(array.slice(0, 9));
  }, 1000);
}
