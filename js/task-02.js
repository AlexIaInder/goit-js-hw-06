const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulListIngresients = document.getElementById('ingredients');

const firstItem = document.createElement('li');
firstItem.textContent = ingredients[0];

const secondtItem = document.createElement('li');
secondtItem.textContent = ingredients[1];

const thirdtItem = document.createElement('li');
thirdtItem.textContent = ingredients[2];

const fourtItem = document.createElement('li');
fourtItem.textContent = ingredients[3];

const fiveItem = document.createElement('li');
fiveItem.textContent = ingredients[4];

const sixItem = document.createElement('li');
sixItem.textContent = ingredients[5];


ulListIngresients.append(firstItem, secondtItem, thirdtItem, fourtItem, fiveItem, sixItem)

console.log(ulListIngresients)


// const ulListIngresients = document.getElementById('ingredients');
// const result = ingredients.forEach(ingredient => {


//   let itemLi = document.createElement('li');
//     console.log(itemLi);
//   itemLi.classList.add('item') += ingredient;
//   ulListIngresients.append(itemLi);
// });
// console.log(result);

