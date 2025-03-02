// const wsUri = 'wss://echo-ws-service.herokuapp.com'
const wsUri = 'wss://echo.websocket.org/';

const btnSend = document.querySelector('.btn-send')
const input = document.querySelector(".chat-massage");
const btnGeo = document.querySelector('.btn-geolocation')
const chatConteiner = document.querySelector('.chat-container')

let websocket;
openWebSocket();
  
btnSend.addEventListener('click', () => {
  const message = input.value;
  if (message.length == 0) {
    return;
  }
  writeToScreen(message);
  input.value = "";

  websocket.send(message);

  // websocket.close();
  // websocket = null;
});

function openWebSocket()
{
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) {
    console.log("CONNECTED");
  };
  websocket.onclose = function(evt) {
    console.log("DISCONNECTED");
  };
  websocket.onmessage = function(evt) {
    writeToScreen(evt.data, "server");
  };
  websocket.onerror = function(evt) {
    writeToScreen(
      'ERROR: ' + evt.data
    );
  };
}

function writeToScreen(message, typeMessage = "user") {
  const divMessage = document.createElement("div");
  divMessage.textContent = message;
  divMessage.classList.add("chat-container-" + typeMessage);
  chatConteiner.appendChild(divMessage);
  console.log(message);
}
  