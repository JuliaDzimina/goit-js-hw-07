// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// 1
const list = document.querySelector('#categories');
const lengthList = list.children.length;
console.log(`Number of categories: ${lengthList}`);

// 2
const item = document.querySelectorAll(".item");
const result = item.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`); 
});


