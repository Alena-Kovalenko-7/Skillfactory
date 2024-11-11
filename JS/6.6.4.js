// // Задание 6.6.4

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
const playerValues = ["X", "O"];
const mess = "Введите строку и столбец через пробел";
let emptyFields = board.length*board[0].length;
while (emptyFields > 0) {
    let player = (emptyFields%2 !== 0) ? 1 : 2;
    let playerValue = playerValues[player-1];
    let position = prompt("Игрок " + playerValue + ". " + mess);
    let positionArr = position.split(" ");
    if (positionArr.length != 2) {
        alert(mess);
        continue;
    }
    let x = positionArr[0] - 1;
    let y = positionArr[1] - 1;
    if (board[x][y] != " ") {
        alert("Ячейка заполнена");
        continue;   
    }
    board[x][y] = playerValue;
    for (let line of board) {
        console.log(line.join(" "));
    }
    console.log("------");
    emptyFields--;
}
alert("Game over!!!");