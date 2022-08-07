const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulListIngresients = document.getElementById('ingredients');

// const firstItem = document.createElement('li');
// firstItem.textContent = ingredients[0];
// firstItem.classList.add('item');

// const secondtItem = document.createElement('li');
// secondtItem.textContent = ingredients[1];
// secondtItem.classList.add('item');

// const thirdtItem = document.createElement('li');
// thirdtItem.textContent = ingredients[2];
// thirdtItem.classList.add('item');

// const fourtItem = document.createElement('li');
// fourtItem.textContent = ingredients[3];
// fourtItem.classList.add('item');

// const fiveItem = document.createElement('li');
// fiveItem.textContent = ingredients[4];
// fiveItem.classList.add('item');

// const sixItem = document.createElement('li');
// sixItem.textContent = ingredients[5];
// sixItem.classList.add('item');

// ulListIngresients.append(firstItem, secondtItem, thirdtItem, fourtItem, fiveItem, sixItem)

// console.log(ulListIngresients)


const ulListIngresients = document.getElementById('ingredients');
const result = ingredients.forEach(ingredient => {
  const itemLi = document.createElement('li');
    console.log(itemLi);
  itemLi.classList.add('item')
  itemLi.textContent = ingredient;
  ulListIngresients.append(itemLi);
});

