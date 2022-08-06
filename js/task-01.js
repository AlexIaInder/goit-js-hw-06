const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)

const title = document.querySelectorAll('h2');
const lengthEl = document.querySelectorAll('.item ul');
console.log(`Category: ${title[0].textContent}`);
console.log(`Elements: ${lengthEl[0].children.length}`)

console.log(`Category: ${title[1].textContent}`);
console.log(`Elements: ${lengthEl[1].children.length}`)

console.log(`Category: ${title[2].textContent}`);
console.log(`Elements: ${lengthEl[2].children.length}`)

