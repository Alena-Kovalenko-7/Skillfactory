//Задание 6.6.1

const word = prompt('Введите слово');
let processedWord = word.toLowerCase();
processedWord = processedWord.replace(/\s/g, "");
const arrayWord = Array.from(processedWord);
const reversArrayWord = Array.from(processedWord).reverse();

let isPalindrome = true;
for (let i = 0; i < arrayWord.length; i++) {
    if (arrayWord[i] !== reversArrayWord[i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log(`Слово "${word}" является палиндромом`);
} else {
    console.log(`Слово "${word}" не является палиндромом`);
}