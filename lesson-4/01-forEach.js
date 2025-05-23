const numbers = [1, 2, 3];
// const str = "Playwright";
// const student = { "name": "Alex", "age": 10, "salary": 20 };
// const arr = [1, 2, 3, 4, 3, 55, 23];
// const dupArr = [1, 2, 3, 1, 2, 4, 5];

// // /* In lần lượt từng phần tử của numbers. */

numbers.forEach((value, index) => {
    console.log(value);
})

// // // /*Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers/*
// // //Tìm tổng

let sum = 0;
numbers.forEach((value, index) => {
    sum = sum + value;
});
console.log(sum);

// // //Tìm min

numbers.forEach((value, index) => {
    if (index === 0) {
        min = value;
    } else {
        if (value < min) {
            min = value;
        }
    }
})
console.log(min);

// // //Tìm max

numbers.forEach((value, index) => {
    if (index === 0) {
        max = value;
    } else {
        if (value > max) {
            max = value;
        }
    }
})
console.log(max);

// // /*Tạo mảng mới từ numbers, mỗi phần tử nhân đôi */
const newArr = [];
numbers.forEach((value, index) => {
    value = value * 2;
    newArr.push(value);
});
console.log(newArr);