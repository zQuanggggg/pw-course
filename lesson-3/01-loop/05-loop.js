//Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
let doanhThu = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 200 },
    { "month": 3, "total": 300 },
    { "month": 4, "total": 400 },
    { "month": 5, "total": 500 },
    { "month": 6, "total": 600 },
    { "month": 7, "total": 700 },
    { "month": 8, "total": 800 },
    { "month": 9, "total": 900 },
    { "month": 10, "total": 1000 },
    { "month": 11, "total": 1100 },
    { "month": 12, "total": 1200 }
];
let tongDoanhThu = 0;   
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu = tongDoanhThu + doanhThu[i].total;
}
console.log(`Tổng doanh thu của 12 tháng là: ${tongDoanhThu}`);