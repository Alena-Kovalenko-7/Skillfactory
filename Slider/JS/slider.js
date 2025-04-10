let images = [
  {
    url: "../images/image_1.png",
    description__city: "Rostov-on-Don<br/> LCD admiral",
    description__apartament: "81 m2",
    description__time: "3.5 months",
    description__cost: "Upon request",
    name__room: "ROSTOV-ON-DON ADMIRAL"
  },
  {
    url: "../images/image_2.png",
    description__city: "Sochi<br/> Thieves",
    description__apartament: "105 m2",
    description__time: "4 months",
    description__cost: "Upon request",
    name__room: "SOCHI THIEVES"
  },
  {
    url: "../images/image_3.png",
    description__city: "Rostov-on-Don<br/> Patriotic",
    description__apartament: "93 m2",
    description__time: "3 months",
    description__cost: "Upon request",
    name__room: "ROSTOV-ON PATROITIC"
  }
];

function initSlider() {
  if (!images || !images.length) return; //если с img пустой, просто выйдем из функции

  //определим функции, которые будем использовать
  let sliderImages = document.querySelector(".slider__images"); //картинки
  let sliderDescription = document.querySelector(".slider__description_room"); //описание комнат
  let sliderArrows = document.querySelectorAll(".slider__switch_arrow"); // стрелки
  let sliderDots = document.querySelector(".slider__switch_dots"); // точки
  let sliderNameRoom = document.querySelector(".slider__name_room"); //типы номеров

  initImages();
  initArrows(); 
  initDots(); 
  initTitles();
  initNameRoom();

  function initImages() {
    images.forEach((image, index) => {        
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

  // функция для стрелок
  function initArrows() {
    sliderArrows.forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curRoom = +sliderImages.querySelector(".active").dataset.index; 
        let nextRoom; //переменная, которая отвечает за следующее изображение, которое мы хотим отобразить
        
        //если левая стрелка - идем назад, если правая - идем вперед    
        if (arrow.classList.contains("left")) {
          nextRoom = curRoom === 0? images.length - 1 : curRoom - 1; 
        } else {
          nextRoom = curRoom === images.length - 1? 0 : curRoom + 1; 
        }
        moveSlider(nextRoom); // отдельная функция для переключения изображений
      });
    });
  }

  // функция для точек, добавим динамически их
  function initDots() {
    images.forEach((image, index) => {     
      let dot = document.createElement('div');
      dot.className = "slider__switch_dots_item";
      dot.className += ` n${index}`;
      dot.className += (index === 0 ? " active" : "");
      dot.dataset.index = index;
      
      sliderDots.append(dot); // каждую точку добавим в sliderDots
  });
    
    //ставим обработчик на каждую точку, обрабатываем клик по точке
    sliderDots.querySelectorAll(".slider__switch_dots_item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index); // каждая точка является ссылкой на картинку, которая должна открыться
      })
    })
  }

  function initNameRoom() {
    images.forEach((image, index) => {     
      let name = document.createElement('div');
      name.className = "slider__name_room_item";
      name.className += ` n${index}`;
      name.className += (index === 0 ? " active" : "");
      name.dataset.index = index;
      name.innerHTML = image.name__room;
      
      sliderNameRoom.append(name);
  });

    //ставим обработчик на каждую точку, обрабатываем клик по точке
    sliderNameRoom.querySelectorAll(".slider__name_room_item").forEach(name => {
      name.addEventListener("click", function() {
        moveSlider(this.dataset.index); // каждый тип номера является ссылкой на картинку, которая должна открыться
      })
    })
  }

  // определим функцию moveSlider, num - число номер слайда, который мы хотим показать
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active"); // ищем класс active и убираем у него этот класс
    sliderImages.querySelector(".n" + num).classList.add("active"); // ищем изображение, которое мы хотим включить, ищем его номер ".n" + num и ему добавляем класс active
    
    //когда переключаются стрелки, точки тоже должны переключаться
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    
    //когда переключаются стрелки, типы номеров сверху тоже должны переключаться
    sliderNameRoom.querySelector(".active").classList.remove("active");
    sliderNameRoom.querySelector(".n" + num).classList.add("active");
    
    changeTitle(num);
  }

  // сделаем чтобы первичные данные сразу отображались на первом листе
  function initTitles() {  
    changeTitle(0);
  }

  //при смене картинки меняется описание номеров, будет передавать номер, чтобы понимать какое описание взять для картинки
  function changeTitle(num) {
    if (!images[num].description__city || !images[num].description__apartament || !images[num].description__time || !images[num].description__cost) return; //заглушка, т.к. не знаем у нас title с изображением пришел или не пришел
    let sliderTitleCity = sliderDescription.querySelector(".description__city");
    sliderTitleCity.innerHTML = images[num].description__city;
    let sliderTitleApartament = sliderDescription.querySelector(".description__apartament");
    sliderTitleApartament.innerHTML = images[num].description__apartament;
    let sliderTitleTime = sliderDescription.querySelector(".description__time");
    sliderTitleTime.innerHTML = images[num].description__time;
    let sliderTitleCost = sliderDescription.querySelector(".description__cost");
    sliderTitleCost.innerHTML = images[num].description__cost;
  }
}

document.addEventListener("DOMContentLoaded", function() {  
  initSlider();
});