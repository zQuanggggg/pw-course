const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
/* tìm giá trị đầu tiên trong score >80 */
let checkNumber = scores.find(score => score > 80);
console.log(checkNumber);
/* Lọc giá trị đầu tiên trong ages > 20 */
let checkAge = ages.find(age => age > 20);
console.log(checkAge);
/* Lọc giá trị đầu tiên trong words có độ dài > 5 */
let checkWord = words.find(word => word.length > 5);
console.log(checkWord);
