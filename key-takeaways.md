# JAVASCRIPT
## Anonymous function
- Là hàm không có tên, thường được sử dụng 1 lần hoặc làm đối số để truyền vào các hàm khác.
- Cú pháp: function (parameter) { //code here }

## Lambda function (Arrow function)
- Là một cách ngắn gọn viết hàm trong JS
- Sử dụng dấu => thay cho từ khóa function
- Cú pháp: (parameters) => { //code here}
- Vd: hàm có nhiều thông số: 
- let sum = (a,b) => { return a+b; }
- const total = sum(a,b); console.log(total);
- Vd: Hàm có 1 thông số: let dup = x => { return x+1}
- Vd Hàm chỉ có 1 biểu thức return: let dup = x => x+2
- Vd: hàm ko có thông số: () => console.log('');
# Automation
## DOM
- Element của DOM bao gồm: thẻ mở, thuộc tính, giá trị thuộc tính, thẻ đóng
- Các thẻ HTML thường gặp
- Thẻ < div > (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ < h1 >< /h1 > đến < h6 >< /h6 > (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ < form >< /form >: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm

    - tbody
        - tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
## Xpath selector
- XPath = XML path
- Có 2 loại: **tuyệt đối**: đi dọc theo cây DOM, bắt đầu bởi 1 /
- Muốn thêm chỉ số, ta thêm [số thẻ muốn tìm] trước thẻ đó.
- **Tương đối**: tìm dựa vào đặc tính, bắt đầu bởi 2 //, cú pháp: //tenthe[@thuoctinh=""]
- **Tìm 1 phần text**: //tenthe[contains(thuoctinh(), "text bao gồm")]
- **Hàm text()**: dùng để tìm ra phần tử có giá trị tương ứng. Ví dụ
Với DOM sau:
- < div @class=”playwright” >*This is a text*< /div >
- Thì để chọn phần tử này, ta dùng cú pháp như sau: //div[text()=’This is a text’]
## Playwright basic syntax
- Tạo 1 file test automation: < tên file >.spec.ts
- **Khai báo 1 test**: inport { test } from '@playwright/test'
- test ("Tên testcase", async ({page}) => {

    await test.step("tên step", async() => {
        //code
    });

    await test.step("tên step", async() => {
        //code
    });

});
- **navigate**: await page.goto("URL");
- **Single click**: await page.locator("//button xpath").click();
- **Double click**: await page.locator("//button xpath").dblclick();
- **Số lần click**: await page.locator("//button xpath").click({clickCount: number});
- **Click chuột phải**: page.locator("//button xpath").click({button: 'right'})
- **Click chuột kèm bấm phím khác**: page.locator("xpath").click({modifiers: ['Shift','Alt','Control'],})
- **Fill**: Giống việc bạn paste content vào một ô input
page.locator("//input").fill('Playwright Viet Nam');
- **pressSequentially**: Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('PlaywrightViet Nam', {delay: 100,});
- **Lấy giá trị hiện tại đang là check hay không**: const isChecked = await page.locator("//input").isChecked();
- **Check/Uncheck**: page.locator("//input").check();
page.locator("//input").setChecked(false);
- **Select option (dropdown list)**: await page.locator("xpath").selectOption("giá trị thuộc tính");
- **Chọn và gửi file**: awai page.locator("xpath").setInputFile("đường dẫn file< relative path >");
- **Chọn option trên dialog/pop-up**: page.on('dialog', async dialog => dialog.accept()); // Phải viết code confirm dialog trước code khi nhấn button để hiện ra dialog đó
- **Hover phần tử**: await page.locator("< xpath here >").hover();