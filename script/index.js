// let number = document.getElementById("number")
// function nextNumber() {
//     number++;
// }
// let btn = document.getElementById('button')
// btn.addEventListener('click', ()=>{
//     number.innerText +=(` ${nextNumber} + ','`)
// })
// let num = document.getElementById(;)
const array = [1, 2, 3, 4,5,6,7,8,9,10,11];
let index = 5;

const answer = document.getElementById('ans');
const btn = document.getElementById('button');

button.addEventListener('click', () => {
  if (index <= array.length) {
    answer.textContent += `,${array[index]}`;
    index++;
  } 
//   else {
//     answer.textContent = "go home, make sand castles you are too young";
//   }
});

answer.textContent = `Current number: ${array[index]}`;