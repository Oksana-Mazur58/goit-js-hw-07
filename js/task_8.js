// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в 
// input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
//   <div id="controls">
//         <input type="number" min="0" max="100" step="1" />
//         <button type="button" data-action="render">Создать</button>
//         <button type="button" data-action="destroy">Очистить</button>
//     </div>
    
//     <div id="boxes"></div>
// const refs = {
//     input: document.querySelector('#control input'),
//     createButton: document.querySelector('[data-action="render"]'),
//     removeButton: document.querySelector('[data-action="destroy"]'),
//     boxes: document.querySelector('#boxes')
// }
// let amount;
// // refs.createButton.addEventListener('input', onCreatBoxes);

// function onCreatBoxes(amount) {
//     let arr = [];
//     let height = '30px';
//     let weight = '30px';
//     for (let i = 0; i < amount; i += 1){
//         weight += 10;
//         height += 10;
//         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         arr[i] = `<div class = 'child'
//         style="background-color: 
//                             ${randomColor};  
//                             width: ${width}px; height: ${height}px" >
//                 </div>`;
//         const string = arr.join('');
//          return refs.boxes.innerHTML = string;
// }   
//     }
// refs.createButton.addEventListener('click', () => {
//     amount = refs.input.value;
//     onCreateBoxes(amount);
// })

// refs.removeButton.addEventListener('click', () => {
//     amount = 0
//     refs.input.value = 0;
//     onCreateBoxes(amount);
// });
const boxesRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-action="render"]')
const removeBtnRef = document.querySelector('[data-action="destroy"]')
const inputRef = document.querySelector('#controls input')

let amount;

function createBoxes () {
    const arr = [];
    let width = 20;
    let height = 20;
    
    
    for (let i = 0; i < amount; i += 1) {
        width += 10;
        height += 10;
        const randomColor ='#' + Math.floor(Math.random()*16777215).toString(16);
        arr[i] =  `<div class = 'child'
                     style="background-color: 
                            ${randomColor};  
                            width: ${width}px; height: ${height}px" >
                </div>`;
    }

    const string = arr.join('');
    return boxesRef.innerHTML = string;
}

createBtnRef.addEventListener('click', () => {
    amount = inputRef.value;
    createBoxes(amount);
})

removeBtnRef.addEventListener('click', () => {
    amount = 0
    inputRef.value = 0;
    createBoxes(amount);
});