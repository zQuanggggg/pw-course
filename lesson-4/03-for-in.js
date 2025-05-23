const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

/* In tên và giá trị mỗi thuộc tính của student */

for (let property in student){
    console.log(`${property}: ${student[property]}`);
}

/* Tính tổng các giá trị số */

let sum = 0;
for (let property in student) {
    {
        if (typeof student[property] === 'number') {
            sum = sum + student[property];
        }
    }
}
    console.log("Tổng: " + sum);

// /*Tạo mảng chứa thuộc tính của student */

for (let property in student) {
    let newArr = property.split(" ");
    console.log(newArr); 
}