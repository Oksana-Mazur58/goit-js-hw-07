// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
    incrementBtn: document.querySelector('[data-action="increment"]')
    
};

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIcrementBtn);
let counterValue = 0;
function onDecrementBtn() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};
function onIcrementBtn() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
}


 
