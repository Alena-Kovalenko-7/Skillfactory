// в  title добавили подписи к фото, а если подпись длинная, мы будем ее образать
let images = [
  // {
//   url: "../images/image_1.png",
//   title: "Rostov-on-Don<br/> LCD admiral"
// }, {
//   url: "../images/image_2.png",
//   title: "Mini Cooper красный"
// }, {
//   url: "../images/image_3.png",
//   title: "Mini Cooper синий"

  {
    url: "../images/image_1.png",
    description__city: "Rostov-on-Don<br/> LCD admiral",
    description__apartament: "81 m2",
    description__time: "3.5 months",
    description__cost: "Upon request"
  },
  {
    url: "../images/image_2.png",
    description__city: "Sochi<br/> Thieves",
    description__apartament: "105 m2",
    description__time: "4 months",
    description__cost: "Upon request"
  },
  {
    url: "../images/image_3.png",
    description__city: "Rostov-on-Don<br/> Patriotic",
    description__apartament: "93 m2",
    description__time: "3 months",
    description__cost: "Upon request"
  }
];

// function initSlider(options) {
function initSlider() {
if (!images || !images.length) return; //если с сервера img пустой, просто выйдем из функции

// если в options что-то есть, то запишится true и выполнится, а по дефолту options выключены
// options = options || {
  // titles: false,
  // dots: true, //тут проект с точками
  // autoplay: false
// };

//определим функции, которые будем использовать
let sliderImages = document.querySelector(".slider__images"); //картинки
let sliderArrows = document.querySelector(".slider__arrows"); // стрелки
let sliderDots = document.querySelector(".slider__dots"); // точки

initImages(); // в этой функции разберем массив с изображениями, зададим эл-ты и запишем их в этот div
initArrows(); // в этой функции повесим обработчики событий на стрелочки, чтобы переключали картинки

// if (options.dots) {
  initDots();
// }

// if (options.titles) {
  // initTitles();
// }

// if (options.autoplay) {
//   initAutoplay();
// }


function initImages() {
  images.forEach((image, index) => {
    // let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;  // из каждого элемента этого массива мы сделаем div, которые будут иметь заданную ширину и длину; и изображения стилизуем с помощью background-image; n${index}- каждое изображение будет иметь свой номер; n${index} ${index === 0? "active" : "" - нужно знать, какое изображение активно, а у нас будет активно первое изображение
    // sliderImages.innerHTML += imageDiv; //добавляем созданный div в ранее созданный sliderImages
    
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    imageDiv.classList.add("n" + index);
    if (index === 0) {
      imageDiv.classList.add("active");
    }
    imageDiv.style.backgroundImage = `url(${image.url})`;
    imageDiv.dataset.index = index;
    
    // добавляем созданный div в ранее созданный sliderImages
    sliderImages.append(imageDiv);
  });
}


// сначала хотим в sliderArrows найти все элементы с классом ".slider__arrow", найти каждую стрелку, написали на обе стрелки, поэтому All; для каждой стрелки - напишем обработчик клика и повесим
function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index; //определяем какой слайд активный из sliderImages; dataset.index - узнаем какой номер у этого элемента; +sliderImages - унарный плюс, т.к. хотим получить число
      let nextNumber; //переменная, которая отвечает за следующее изображение, которое мы хотим отобразить
      
      //если левая стрелка - идем назад, если правая - идем вперед
      // arrow.classList.contains("left") - узнать есть ли у всех классов со стрелкам класс left
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1; // если самое первое изображение, то должны переключиться на последнее, или это 2 или 3, и тогда идем на 1 изображение назад
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1; // хотим знать, последнее ли изображение или нет, если последнее. то следующее изображение первое, т.е.с индексом 0, если не последнее, то +1
      }
      moveSlider(nextNumber); // отдельная функция для переключения изображений
    });
  });
}

// функция для точек, добавим динамически их
function initDots() {
  images.forEach((image, index) => {
    // let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`; // тоже найдем активную точку, чтобы она была выделена, активным сделаем первое, как и наверху с картинками
    // sliderDots.innerHTML += dot; // каждую точку добавим в sliderDots
    
    let dot = document.createElement('div');
    dot.className = "slider__dots-item";
    dot.className += ` n${index}`;
    dot.className += (index === 0 ? " active" : "");
    dot.dataset.index = index;
    
    sliderDots.append(dot); // каждую точку добавим в sliderDots
});
  
  //ставим обработчик на каждую точку, поэтому forEach, обрабатываем клик по точке
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index); // каждая точка является ссылкой на картинку, которая должна открыться
    })
  })
}

// определим функцию moveSlider, num - число номер слайда, который мы хотим показать
  function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active"); // ищем класс active и убираем у него этот класс
  sliderImages.querySelector(".n" + num).classList.add("active"); // ищем изображение, которое мы хотим включить, ищем его номер ".n" + num и ему добавляем класс active
  // if (options.dots) { //когда переключаются стрелки, точки тоже должны переключаться
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  // }
  // if (options.titles)
  changeTitle(num);
}


// сделаем динамически 1 div для подписи, запишем заголовок внуть этого div
// function initTitles() {
//   let titleDiv = `<div class="slider__images-title">${images[0].description__city}</div>`;
//   sliderImages.innerHTML += titleDiv; 
//   sliderImages.innerHTML += cropTitle(titleDiv, 50); // div добавляем в sliderImages
// }

//при смене картинки меняется заголовок, будет передавать номер, чтобы понимать какой заголовок взять для картинки
function changeTitle(num) {
  if (!images[num].description__city) return; //заглушка, т.к. не знаем у нас title с изображением пришел или не пришел
  let sliderTitle = sliderImages.querySelector(".slider__images-title");
  sliderTitle.innerHTML = images[num].description__city;
  // sliderTitle.innerText = cropTitle(images[num].title, 50); // меняем innerText, если это текстовые данные, обрезаем 50 знаков
}

//для обрезания, если длинный текст
// function cropTitle(title, size) {
//   if (title.length <= size) { // если длина меньше размера, то оставляет,
//     return title;
//   } else {
//     return title.substr(0, size) + "...";  // если длинный, то обрежем от 0 до размера который укажем
//   }
// }


// для автопроигрывания + зададим интервал
// function initAutoplay() {
//   setInterval(() => {
//     let curNumber = +sliderImages.querySelector(".active").dataset.index; // получить текущее изображение, которое активное 
//     let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1; // тоже самое, что и на стрелке
//     moveSlider(nextNumber);
//   }, options.autoplayInterval);
// }
}

// добавим внешний вид слайдера, titles: true - опция включена
// let sliderOptions = {
//   dots: true, // точки тоже опциональные, может они нам не нужны в проекте
//   titles: true,
//   // autoplay: true,
//   // autoplayInterval: 5000 //длительность каждого слайда
// };


//вызовем initSlider
document.addEventListener("DOMContentLoaded", function() {
  // initSlider(sliderOptions);
  initSlider();
});