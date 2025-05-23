const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3];
const expenses = [50, 100, 150];
/* Từ score tạo mảng mới: tăng 10% nếu <90, giảm 5% nếu >=90 */

function checkScore(score) {
    if (score < 90) {
        score = score * 1.1;
    }
    else score = score * 0.95;
    return score;
}
 let newArr1 = scores.map(checkScore);
console.log(newArr1);

// /* Từ numbers chuyển thành mảng chuỗi */

let newArr2 = numbers.map(String);
const str = newArr2.join(',');
console.log(str);

// /* Từ numbers, nhân đôi mỗi giá trị */
let newArr3 = numbers.map(num => num*2);
console.log(newArr3);
