// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM
//         - узлов используй document.createElement().
const navEl = document.querySelector('#ingredients');

const itemsEl = ingredients.map(ingredient => {
    const liElement = document.createElement('li');
    liElement.textContent =`${ingredient}`;;
    return liElement
});
console.log(itemsEl);
navEl.append(...itemsEl)
