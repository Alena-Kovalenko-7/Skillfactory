const images = [
  {
    url: "../images/image_1.png",
    group__city: "Rostov-on-Don<br/> LCD admiral",
    group__apartament: "81 m2",
    group__time: "3.5 months",
    group__cost: "Upon request",
  },
  {
    url: "../images/image_2.png",
    group__city: "Sochi<br/> Thieves",
    group__apartament: "105 m2",
    group__time: "4 months",
    group__cost: "Upon request",
  },
  {
    url: "../images/image_3.png",
    group__city: "Rostov-on-Don<br/> Patriotic",
    group__apartament: "93 m2",
    group__time: "3 months",
    group__cost: "Upon request",
  },
];










// document.querySelector(".loader").hidden = true;
// const container = document.querySelector(".container");

// const btnAdd = document.querySelector("#btn_add");
// btnAdd.addEventListener("click", getImage)

// const btnDel = document.querySelector("#btn_del");
// btnDel.addEventListener("click", () => {
//   container.replaceChildren();
// });

// async function getImage() {
//     document.querySelector(".loader").hidden = false;
//     fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//       .then((response) => {
//         console.log("response");
//         if (!response.ok) {
//           throw new Error("Error occurred!")
//         }
//         return response.json()
//       })
//       .then((data) => {
//         console.log("data");
//         for (let item of data) {
//           let divImg = createImage(item.url);
//           container.appendChild(divImg);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         console.log("finally")
//         document.querySelector(".loader").hidden = true;
//       })
// }

// function createImage(imageUrl) {
//   const div = document.createElement("div");
//   div.style.backgroundImage = "url('" + imageUrl + "')";
//   return div;
// }