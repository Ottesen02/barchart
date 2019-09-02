const name = "martin";
const name2 = "Martin";

const uppercase = name.toUpperCase();
const both = `${name2.substring(0, 3).toLowerCase()}${name2
  .substring(3, 6)
  .toUpperCase()}`;

console.log(uppercase);
console.log(both);
