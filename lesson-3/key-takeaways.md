# GIT
## Thay đổi commit message
- Câu lệnh: git commit --amend (Đối với win, mở 1 tab mới và thay đổi commit message trong tab đó)
- Thay đổi nhanh commit message: git commit --amend -m "message"

*Lưu ý*: Chỉ có thể thay đổi commit message gần nhất.
## Thay đổi file từ vùng staging về working Directory
- Câu lệnh: git restore --staged <Tên file>
- Câu lệnh: git restore --staged . (Đưa tất cả file hiện có trong vùng staging are về working directory)
## Thay đổi file từ vùng repository về working directory
- Câu lệnh: git reset HEAD~<number> (number đại diện cho số commit mình muốn đưa về working directory)
## Branch model
- Dùng để tạo ra vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định
- Câu lệnh tạo nhánh: git branch <tên nhánh>
- Câu lệnh di chuyển sang nhánh khác: git checkout <tên nhánh>
- Câu lệnh tạo nhánh và di chuyển sang nhánh vừa tạo: git checkout -b <tên nhánh>
## .gitignore file
- Dùng để bỏ qua các file không cần git theo dõi, bỏ qua vùng hoạt đổng của git
- Ignore file: <file-name>
- Ignore Folder: <folder-name>/ (bao gồm tất cả file trong folder đó)
- Đối với các file trong vùng repo rồi thì sẽ không bị ảnh ảnh hưởng bởi gitignore
# JAVASCRIPT
## Convention
- snake_case
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class
## Console log with ' and "
- console.log('message');
- console.log("message");
- console.log(`message`);
- let name= "quang"

console.log("Toi la ${name}");

console.log("Toi la" + name);

console.log("Toi la", name);
## object
- dùng để lưu trữ, tập hợp các giá trị vào cùng 1 biến hoặc hằng số
- Khai báo:

let/const <tên object> = { 

    <thuộc tính>: <giá trị>,
    ...
}

*Lưu ý*
- Đối với khai báo const, ta không thể thêm các thuộc tính vào object nhưng ta có thể update lại giá trị của thuộc tính

Vd: ten object.<thuộc tính> = <giá trị mới>;

ten object[thuoc tinh] = <giá trị mới>;
## Logical operator
- &&: cả 2 về mệnh đề đều đúng
- ||: 1 trong 2 mệnh đề đúng
- !: Đảo ngược lại giá trị của mệnh đề
## Mảng
- Dùng để tạo danh sách các giá trị
- Câu lệnh: let/const array = [gt1,gt2,...];
- Truy xuất mảng:
    - Độ dài mảng: array.length
    - Lấy phần tử theo index: [0], [1], [2]
- Mảng có thể chứa các kiểu dữ liệu khác nhau như là string, number, object,..)
## Function
- là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc tính toán cụ thể
- Khai báo:
    function <tên hàm>() {
        //code
    }
- return: trả về phép tính được thực hiện trong hàm.

