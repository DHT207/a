/* Hàm upDate chạy khi rê chuột vào ảnh */
function upDate(previewPic){
    // 1. Kiểm tra sự kiện trên console và in ra thông tin alt, src của ảnh[cite: 1]
    console.log("Triggered mouseover event");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    // 2. Thay đổi background-image của div#image thành ảnh đang được trỏ tới[cite: 1]
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // 3. Thay đổi nội dung chữ (innerHTML) của div#image thành giá trị alt của ảnh[cite: 1]
    document.getElementById('image').innerHTML = previewPic.alt;
}

/* Hàm undo chạy khi đưa chuột ra khỏi ảnh */
function undo(){
    // 1. Đặt lại background-image về rỗng[cite: 1]
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Trả lại đoạn văn bản hướng dẫn ban đầu cho khung div#image[cite: 1]
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
