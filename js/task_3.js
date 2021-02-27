// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки 
//и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress & cs=tinysrgb& dpr=2 & h=750 & w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imageGalleryRef = document.querySelector('#gallery')
console.log(imageGalleryRef);

const createItemOfGallery = value => {
  const { url, alt } = value
  return `<li class =  ><img src='${url}' alt='${alt}' width = 600 height = 600/></li>`;
}
const сreateGallery = images.map(createItemOfGallery).join('');
imageGalleryRef.insertAdjacentHTML('beforeend', сreateGallery)

console.log(createItemOfGallery)


// images.forEach(element => imageGalleryRef.insertAdjacentHTML('beforeend',
//               `<li><img src=${element.url} alt=${element.alt} `)
// );
// imageGalleryRef.style.display = 'flex';
// imageGalleryRef.style.justifyContent = 'space-between';
// imageGalleryRef.style.listStyle = 'none';