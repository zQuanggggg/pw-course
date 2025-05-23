const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";
/* 1. Chia name thành mảng các từ (dùng khoảng trắng).*/
let arrName = name.split(" ");
console.log(arrName);
/*2. Chia emails thành mảng các email (dùng dấu phẩy).*/
let arrEmails = emails.split(",");
console.log(arrEmails);
/*3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).*/
let arrDate = date.split("-");
console.log(arrDate);
