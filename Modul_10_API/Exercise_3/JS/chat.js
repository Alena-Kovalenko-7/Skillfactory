function addImage() {
  const imageUrl = document.querySelector(".massage").value;
  const imageElement = `<img src="${imageUrl}"/>`;

  const imageContainer = document.querySelector(".image-container");
  imageContainer.innerHTML = imageElement;
  document.querySelector(".massage").value = "";
}