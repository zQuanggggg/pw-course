const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

/*Tổng giá trị trong score */
sumScores = scores.reduce((total,score) => total + score,0);
console.log(sumScores);

/*Tích các giá trị trong numbers */
multiplyScores = numbers.reduce((total,score) => total * score,1);
console.log(multiplyScores);

/*Tổng giá trị trong expenses */
sumExpenses = expenses.reduce((total,score) => total + score,0);
console.log(sumExpenses);
