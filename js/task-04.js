
// first
// let valueEl = +document.querySelector('#value').textContent;


// const decrementBtn = document.querySelector('button[data-action = "decrement"]')


// let counterValue = document.querySelector('#value');


// const incrementBtn = document.querySelector('button[data-action = "increment"]')


// decrementBtn.addEventListener('click', event => {
//   valueEl -= 1;
//   counterValue.innerText = valueEl;
// });

// incrementBtn.addEventListener('click', event => {
//   valueEl += 1;
//   counterValue.innerText = valueEl;
// })
// _________________________________________________________________________________________
// second
const button = {
  sub: document.querySelector('[data-action = "decrement"]'),
  add: document.querySelector('[data-action = "increment"]'),
  start: document.querySelector('#value'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  button.start.textContent = counterValue;
}

const decrement = () => {
  counterValue -= 1;
  button.start.textContent = counterValue;
}
console.log(counterValue)

button.sub.addEventListener('click', decrement);
button.add.addEventListener('click', increment);