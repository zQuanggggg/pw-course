# Version control system
## Type of version control
- Local: lưu ở máy cá nhân
- Centralize: lưu ở máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau
# GIT
- Dùng git để quản lý phiên bản và làm việc giữa nhiều người với nhau
## Điểm mạnh của GIT
- **Tính năng**: Dễ dùng, nhiều tính năng như branching, tốc độ xử lý nhanh
- **Chi phí**: Free
- **Phổ biến**: dùng trong nhiều công ty
## GIT - 3 state
- **Working Directory**: Chửa các file mới hoặc file có thay đổi
- **Staging Area**: Các file chuẩn bị đưa vào vùng commit
- **Repository**: Các commit (phiên bản)
## GIT - key takeaways
- Khởi tạo thư mục quản lý bời GIT: git init
- Cấu hình git cho 1 repo riêng: 
    1. Cấu hình lại tên: git config user.name "Name"
    2. Cấu hình lại email: git config user.email "Email"
- Cấu hình git default: 
    1. Cấu hình lại tên: git config -- global user.name "Name"
    2. Cấu hình lại email: git config --global user.email "Email"
- Thêm file vào vùng staging: git add < tên file >
- Xem trạng thái file có đang trong staging hay không:
git status
    1. Nếu màu xanh => Đang trong vùng Staging
    2. Nếu màu đỏ => Đang trong vùng Working Directory
## GIT convention
- tạo commit theo tiêu chuẩn sau: <type>: <short description>
Trong đó:
- type: loại commit
■ chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
■ feat: thêm tính năng mới, test case mới
■ fix: sửa lỗi 1 test trước đó
○ short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.
## Work flow cơ bản
1. Không dùng global config
    - init -> config -> add -> commit -> push
2. Dùng global config
    - init -> add -> commit -> push
# JAVASCRIPT
- Bình thường Javascript chạy được do browser engine support
    1. **Edge**: Chaka
    2. **Firefox**: SpiderMonkey
    3. **Chrome**: V8
- Để chạy được trên máy tính không cần trình duyệt, cần Node Js
## Các câu lênh cơ bản
1. **In kết quả ra màn hình**: 
- **In chuỗi**: console.log("Hello World")
- **In biến**: console.log(tên biến)
- **In kết hợp chuỗi và biến**: console.log("Tên chuỗi" + tên biến)
- **In nối chuỗi**: console.log("Chuỗi 1" + "Chuỗi 2")
2. **Khai báo các biến**: dùng để lưu trữ dữ liệu, có thể thay đổi được.
    var <tên biến> = <giá trị>;
    let <tên biến> = <giá trị>;
    const <tên biến> = <giá trị>;

*Lưu ý*: <ten_bien>
- Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $
- KHÔNG chứa dấu cách
- KHÔNG chứa các "từ khóa", tức là các từ đã có trong Javascript (ví dụ: var, let, for, if,...) 
- Phạm vi của biến:
    - var: phạm vi toàn cục
    - let phạm vi trong dấu {}
- Hằng số const sẽ không được gán lại.
3. **Các kiểu dữ liệu**
- **String**: dùng để khai báo chuỗi
- **Number**: dùng để khai báo số
- **Boolean**: dùng để khai báo đúng/sai
4. **Các toán tử số học**
- Các phép toán +,-,*,/
- Toán tử 1 ngôi: 
    - i++ bằng với i=i+1
    - i-- bằng với i=i-1
- Toán tử so sánh: 
    - So sánh hơn kém: <,>
    - So sánh bằng: ==,===(so sánh bằng và kiểu dữ liệu),!=(so sánh khác nhau),!==,>=,<=
- Toán tử chia dư:
    - 3%3 = 0 (vì 3 chia hết cho 3 dư 0)
    - 3%2 = 1 (vì 3 không chia hết cho 2, dư 1)
    - 3%1 = 0 (vì 3 chia hết 1 dư 0)
5. **Condition**
- Cú pháp: if (điều kiện) {//code}
6. **Vòng lặp for**
- Cú pháp: (for(<khởi tạo>; <điềukiện dừng>; <điều kiện tăng>) {// code };
# Format Code
- **Mac**: Option + Shift + F
- **Window**: Alt + Shift + F





