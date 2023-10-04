console.log("\tÔn tập slideshow");

let danhSachAnh = [
    "img/anh1.png", "img/anh2.png", "img/anh3.png"
]

let indexAnhHienTai = 0;// biến lưu lại vị trí ảnh hiện tại

// biến lưu lại node slideshow để tt
let nodeSlideShow = document.getElementById("slideShow");

// Phần 2. hiện thị 1 ảnh mặc định
nodeSlideShow.src = danhSachAnh[indexAnhHienTai];

// xử lí logic
// tại  button click gọi hàm và truyền vào vị trí cần hiện thị
function chonAnh(index) {
    indexAnhHienTai = index;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
}

// Bài 2. Logic lùi tiến
// ý tưởng xử lý
// ++ hoặc -- biến 

function luiAnh() {
    indexAnhHienTai--;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
}

function tienAnh() {
    indexAnhHienTai++;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
}

// vấn đề gặp phải
// tiến quá index 2 và lùi quá index 0

// Bài 3. duyệt danh sách ảnh
console.log("\tBài 3. duyệt danh sách ảnh");
function duyetDanhSachAnh() {
    // 1. hiện thị ảnh 1
    indexAnhHienTai = 0; // reset index về 0 để chạy từ đầu tiên

    // 2. hiện thị ảnh 2 sau 1 giây
    setTimeout( ()=>{
        indexAnhHienTai = 1;
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
    }, 1000);
    // sau 1 giây thì chạy code trong settimeout

    // 3. hiện thị ảnh 3
    setTimeout( ()=>{
        indexAnhHienTai = 2;
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
    }, 2000);
}

// Bài 4. duyệt dnah sách vô hạn
let intervalDuyetVoHan;
function duyetDanhSachAnhVoHan() {
    indexAnhHienTai = 0;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];

    let boDem = 1;
    // ứng dụng setInterval
    intervalDuyetVoHan = setInterval( ()=> {
        // tìm index bằng cách đem chia 3 lấy số dư
        indexAnhHienTai = boDem % 3;// 3 chính là length của mảng danh sách

        // thay đổi ảnh
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];

        // tăng bộ đếm
        boDem++;

    } , 1000);
    // giải thích: sau mỗi 1s chạy vòng lặp 1 lần
}

// Bài 5. dừng duyệt tự động vô hạn
function dungDuyetTuDongVoHan() {
    clearInterval(intervalDuyetVoHan);
}

function ngauNhien() {
    
}