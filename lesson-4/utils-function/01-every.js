const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

/* Kiểm tra giá trị trong score có >70 không */

let checkScore = scores.every(score => score > 70);
console.log(checkScore);

/* Kiểm tra giá trị trong ages có > 15 không */

let checkAge = ages.every(age => age > 15);
console.log(checkAge);

/* Kiểm tra từ trong words có độ dài >3 không */
let checkWord = words.every(word => word.length > 3);
console.log(checkWord);
