const wsUrl = 'wss://echo-ws-service.herokuapp.com'

const btnSend = document.querySelector('.btn-send')
const input = document.querySelector(".chat-massage");
const btnGeo = document.querySelector('.btn-geolocation')
const chatConteiner = document.querySelector('.chat-container')

let websocket;


btnSend.addEventListener("click", () => {
    if (input.value.length == 0) return;
    const divMessageUser = document.createElement("div");
    divMessageUser.classList.add("chat-container-user");
    divMessageUser.textContent = input.value;
    chatConteiner.appendChild(divMessageUser);
    console.log(input.value);
    input.value = "";
  });