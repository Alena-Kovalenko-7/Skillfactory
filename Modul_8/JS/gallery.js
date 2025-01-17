document.querySelector(".loader").hidden = true;
const container = document.querySelector('.container');

const btnAdd = document.querySelector("#btn_add");
btnAdd.addEventListener('click', getImage)

const btnDel = document.querySelector("#btn_del");
btnDel.addEventListener('click', () => {
  container.replaceChildren();
});

async function getImage() {
    document.querySelector(".loader").hidden = false;
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        console.log("response");
        if (!response.ok) {
          throw new Error('Error occurred!')
        }
        return response.json()
      })
      .then((data) => {
        console.log("data");
        for (let item of data) {
          let img = createImage(item.url);
          container.appendChild(img);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally")
        document.querySelector(".loader").hidden = true;
      })
}

function createImage(imageUrl) {
  const img = document.createElement('img');
  img.src = imageUrl;
  return img;
}