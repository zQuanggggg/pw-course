// Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
// với 2 bộ số khác nhau.
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    else if (c < min) {
        min = c;
    }
    return min;
}
console.log(findMin(5,8,12));