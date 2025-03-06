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

function writeToScreen(content, typeMessage = "user") {
  const divMessage = document.createElement("div");
  if (typeof(content) === 'string') {
    divMessage.textContent = content;
    console.log(content);
  } else {
    divMessage.appendChild(content);
  }
  divMessage.classList.add("chat-container-" + typeMessage);
  chatConteiner.appendChild(divMessage);
}

// Функция, выводящая текст об ошибке
const error = () => {
  writeToScreen('Невозможно получить ваше местоположение');
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  const mapLink = document.createElement("a");
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = 'Гео-локация';
  mapLink.target = '_blank';

  writeToScreen(mapLink);
}

btnGeo.addEventListener('click', () => {
  if (!navigator.geolocation) {
    writeToScreen('Geolocation не поддерживается вашим браузером');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
  