//Задание 6.6.3

const value = prompt('Введите число');
if (value === "") {
    alert(`Нужно ввести значение!!!`);
}
const num = Number(value);
const array = [];
 
if (!Number.isNaN(num)) { 
    for (let i = 0; i <= num; i++) {
        array.push(i);
    }
    console.log(array);
} else {
    alert(`Нужно ввести число!!!`);
}