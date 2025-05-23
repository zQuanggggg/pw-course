# JAVASCRIPT
## Điều kiện nâng cao
### If .. else

- Câu lệnh: 
if (condition){
    //code;
    else {
        //code;
    }
}

### If..else if .. if
- Câu lệnh:
if (condition){
    //code;
    else if {
        //code;
        else{
            //code;
            ...
        }
    }
}
### Switch case
- Câu lệnh
siwtch(tham số){
    case cond1:
        //code;
        break;
    case cond2:
        //code;
        break;
        ...
    default:
        //code; //(không nằm trong case nào hết sẽ thực hiện default)
        break;
}
### == và !=
- ==: chuyển đổi về cùng kiểu dữ liệu và so sánh giá trị có bằng hay không
- ===: So sánh bằng về cả giá trị và kiểu dữ liệu của 2 tham số
- !=: chuyển đổi về cùng kiểu dữ liệu và so sánh giá trị có khác nhau hay không
- !==: So sánh khác về cả giá trị và kiểu dữ liệu của 2 tham số
## Vòng lặp nâng cao
### For..in
- là hàm hỗ trợ cho object, dùng để lặp các thuộc tính trong object
- Câu lệnh: 
for (let i in objects){
    //code;
} 
### For..each
- Là 1 hàm hỗ trợ cho Array (mảng), dùng để lấy các phần tử hoặc giá trị trong hàm đó
- Câu lệnh
arr.forEach((value, index) => {
    //code
})
### For..of
- Dùng để lặp các phần tử trong mảng/string
- Câu lệnh:
for (let i of object){
    //code;
}
### break and continue
- khi sử dụng break, vòng lặp sẽ kết thúc ngay sau khi câu lệnh trong vòng lặp được thực hiện
- khi sử dụng continue, vòng lặp sẽ tiếp tục ngay sau khi thực hiện hết các câu lệnh trong main
## Util function
- Là các hàm tiện ích có sẵn, giúp xử lý code nhanh gọn hơn.
### String Util
- trim(): dùng để loại bỏ space đầu dòng và cuối dòng.
- toLowerCase(): Chuyển các kí tự thành chữ thường.
- toUpperCase(): Chuyển các kí tự thành chữ in hoa.
- include(): kiểm tra xem chuỗi có chứa 1 chuỗi con hay không. Hàm này sẽ trả về True hoặc False
- replace(gt cũ,gt mới): Thay thế 1 chuỗi con thành 1 chuỗi khác
- split(" "): chia chuỗi ban đầu thành các chuỗi con (thành 1 mảng), dựa theo kí tự phân chia
- substring(bat dau, ket thuc): trả về 1 phần của chuỗi, bắt đầu từ in dex chỉ định đến kết thúc, nếu chỉ có 1 value thì value đó sẽ là index bắt đầu
- indexOf(): trả về vị trí đầu tiên (index) của chuỗi con trong chuỗi chính. Nếu như value trong hàm ko nằm trong chuỗi thì index trả về sẽ là -1.
- 
### Until Array
- map(): tạo mảng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc. Vd: let upperName = arr.map(nameValue => nameValue.toUpperCase());
- filter(): Tạo mảng mới gồm các phần tử thỏa điều kiện. Vd: let evenNumber = arr.filter(num => num%2===0);
- find(): Trả về giá trị phần tử đầu tiên trong mảng, nếu ko có trả undefine. VD: let evenNumber = arr.find(num => num%2===0);
- reduce(): áp dụng lên từng phần tử trong mảng và trả về 1 kq duy nhất.VD: sum = arr.reduce((total,num) => total + num,0);
- some(): check xem trong mảng có phần tử thỏa condition ko, hàm trả về kq True và False. Vd: let checkNum=arr.some(num =>num>1);
- every(): check xem trong mảng toàn bộ phần tử thỏa condition ko, hàm trả về kq True và False
- push(): thêm 1 hoặc nhiều phần phần tử vào cuối mảng và trả về độ dài mới cho mảng
- shift(): loại bỏ phần tử đầu tiên của mảng và trả về phần tử đấy, thay đổi mảng mới.
- pop(): loại bỏ phần tử cuối cùng của mảng và trả về phần tử đấy, thay đổi mảng mới.
- sort(): Sắp sếp các phần tử trong mảng theo Unicode, đối với number thì sẽ từ 1-9. Chuyển các phần tử về chuỗi rồi so sánh để sắp xếp



