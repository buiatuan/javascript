// HTML DOM -  quy chuẩn w3c.
/*
// Có 3 thành phần
1. Element
2. Attribute
3. Text

Node -- là các điểm giao nhau.
*/

//. ELEMENT: ID, class, tag, CSS selector, HTML collection
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
// document.from //HTML collection - chỉ có 1 số

/*
let headingNode = document.querySelectorAll('.heading'); // Css selector
console.log(headingNode);

var boxNodes = document.querySelector('.box-1');

// muốn lấy các li elements là con của .box
boxNodes.querySelectorAll('li');
console.log(boxNodes.getElementsByTagName('li'));
console.log(boxNodes.querySelector('p'));
*/

// Dom attribute
/*
var headingElement = document.querySelector('h1');

// Setter
// headingElement.title = 'heading'; // thêm thuộc tính title cho thẻ h1
// headingElement.id = 'heading'; // thêm attribute id

//
headingElement.title = 'title-test';

console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('title'));
*/

// Dom text:
// 1. innertext: lấy nội dung gióng trên trình duyệt
// 2. textcontent: lấy nội dung thật

/*
var headingElement = document.querySelector('.heading');
// geter
console.log(headingElement.innerText);  // lấy nội dung element hiển thị trên trình duyệt
console.log(headingElement.textContent);  // lấy tất cả textnode có trong element

// seter
headingElement.innerText = 'New heading'; // sửa nội dung thành New heading
*/

/*
// thêm element trong 1 element
var boxElement = document.querySelector('.box');
console.log(boxElement);

boxElement.innerHTML = '<h1>Heading</h1>';

console.log(boxElement.querySelector('h1').innerText);
*/

// Node properties

var boxElement = document.querySelector('.box');



/*
Object.assign(boxElement.style,{ // set CSS inline
    width: '100px',
    height: '200px',
    backgroundColor: 'red'
});
*/

    // Classlist  property: các phương thứ phổ biết hay dùng
// Add - Thêm class vào element
// contains - tìm xem có class: có trong element không?
// remove - xóa class
// toggle - xem 1 class có trong element không. nếu có thì xóa class. nếu không có thì thêm class đấy vào.
/*
boxElement.classList.add('red','blue'); //
console.log(boxElement.classList.contains('red'));
*/

/*
setTimeout(() => {
    boxElement.classList.remove('red');
},5000);
*/

/*
setInterval(() => { // cứ 2s thì thực hiện hàm 1 lần
    boxElement.classList.toggle('red');
},2000);
*/


/*
// DOM events: có 2 cách
// 1. Attribute events: viết envent trong html
// 2. Assign event using the element node: viết js trên 1 file js.

var h1Element = document.querySelectorAll('h1');
console.log(h1Element);

for (var i = 0; i < h1Element.length; i++){
    h1Element[i].onclick = function (e) {
        console.log(e.target);
    }
}
*/


// Input / select
// Key up/ down

var inputValue;

var inputElement = document.querySelector('input[type="text"]');

 inputElement.onkeyup = function (e) {
     console.log(e);
 }

 // preventDefault and StopPropagation

// 1. preventDefault: xóa hành vi mặc định của 1 thẻ.

// 2. StopPropagation: Xóa hành vi nổi bọt

// Dom event: sử dụng khi muốn lắng nghe sự kiện nào đó mà không có ý đính xóa nó đi

/// Event Listener: sử dụng trong trường hợp 1 sự kiện mà thực hiện nhiều công việc mà có những sự kiện sẽ muốn xóa đi

inputElement.addEventListener('click', function (e) {
    console.log(Math.random());
});


