
// first
let valueEl = 0;


const decrementBtn = document.querySelector('button[data-action = "decrement"]')


let counterValue = document.querySelector('#value');


const incrementBtn = document.querySelector('button[data-action = "increment"]')


// decrementBtn.addEventListener('click', () => {
//   valueEl -= 1;
//   counterValue.innerText = valueEl;
// });

decrementBtn.onclick = () => {
  valueEl -= 1;
  counterValue.innerText = valueEl;
}

incrementBtn.addEventListener('click', () => {
  valueEl += 1;
  counterValue.innerText = valueEl;
})
// _________________________________________________________________________________________
// second
// const counter = {
//   sub: document.querySelector('[data-action = "decrement"]'),
//   add: document.querySelector('[data-action = "increment"]'),
//   start: document.querySelector('#value'),
// };

// let counterValue = 0;

// const increment = () => {
//   counterValue += 1;
//   counter.start.textContent = counterValue;
// }

// const decrement = () => {
//   counterValue -= 1;
//   counter.start.textContent = counterValue;
// }
// console.log(counterValue)

// counter.sub.addEventListener('click', decrement);
// counter.add.addEventListener('click', increment);