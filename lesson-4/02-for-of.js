const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

/* 1. In lần lượt từng kí tự của str */
for (let i of str) {
    console.log(i);
}

/* 2. Tạo mảng đảo ngược từ str */
let reversed = "";
for (let i of str) {
    reversed = i + reversed;
}
    console.log(reversed);

/* 3. Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr */

let target = 3;
let firstIndex = 0;
let lastIndex = 0;
let index = 0;

for (let char of arr) {
    if (char === target) {
        if (firstIndex === 0) {
            firstIndex = index; // Ghi nhận vị trí đầu tiên
        }
        lastIndex = index; // Cập nhật mỗi lần gặp
    }
    index++; // Tự tăng chỉ số vì for...of không có sẵn
}

console.log(`Vị trí đầu tiên: ${firstIndex}`);
console.log(`Vị trí cuối cùng: ${lastIndex}`);

/* Lọc các phần tử xuất hiện 1 lần trong dupArr */
