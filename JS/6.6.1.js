//Задание 6.6.1

let word = prompt('Введите слово');
let wordNew = word.toLowerCase();
wordNew = wordNew.replace(/\s/g, "");
let arrWord = Array.from(wordNew);
let reversArrWord = Array.from(wordNew).reverse();

let isPalindrome = true;
for (let [position, letter] of arrWord.entries()) {
    let letterRevers = reversArrWord[position];
    if (letter !== letterRevers) {
        isPalindrome = false;
        break;
    }
}
let not = "";
if (!isPalindrome) {
    not = "не ";
}
console.log(`Слово "${word}" ${not}является палиндромом`);