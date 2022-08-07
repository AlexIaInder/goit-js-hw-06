const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)

// const titles = document.querySelectorAll('h2');
// const lengthEl = document.querySelectorAll('.item ul');
// console.log(`Category: ${titles[0].textContent}`);
// console.log(`Elements: ${lengthEl[0].children.length}`)

// console.log(`Category: ${titles[1].textContent}`);
// console.log(`Elements: ${lengthEl[1].children.length}`)

// console.log(`Category: ${titles[2].textContent}`);
// console.log(`Elements: ${lengthEl[2].children.length}`)

categories .forEach(category => {
  const title = category.querySelector('h2');
  const lengthEl = category.querySelectorAll('li');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${lengthEl.length}`)
})