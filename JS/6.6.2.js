//Задание 6.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = new Set(arr);
const uniqueArrNew = Array.from(uniqueArr);
console.log(uniqueArrNew);