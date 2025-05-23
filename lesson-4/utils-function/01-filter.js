const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
/* Lọc giá trị trong score >80 */
let checkNumber = scores.filter(score => score > 80);
console.log(checkNumber);
/* Lọc giá trị trong ages > 18 */
let checkAge = ages.filter(age => age > 18);
console.log(checkAge);
/* Lọc giá trị trong words có độ dài > 5 */
let checkWord = words.filter(word => word.length > 5);
console.log(checkWord);
