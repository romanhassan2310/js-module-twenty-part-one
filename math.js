/**
 * 
 */
const min = Math.min(43,56,1,44,534,21);
console.log(min);
const max = Math.max(23,45,67,2,67,33,333);
console.log(max);

console.log(Math.PI);
console.log(Math.abs(-87+78));
console.log(Math.round(2.25));
console.log(Math.round(2.87));
console.log(Math.floor(2.87));
console.log(Math.ceil(-2.87));
console.log(Math.random()*10);
const rand = Math.round(Math.random()*10);
console.log(rand);

const participants = ["Alice", "Bob", "Charlie", "David"];
const randomIndex = Math.floor(Math.random() * participants.length);
const winner = participants[randomIndex];

console.log(`The winner is: ${winner}`);