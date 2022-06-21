/*

function showDialog() {
    alert('Hi xin  các bạn!')
}

// call (); toán tử gọi hàm

function writeLog(message) {
    console.log(message)
}
writeLog('Test message'); // khi gọi tới hàm và điền thám số thì gọi là đối sô

// kiểu dữ liệu không giới hạn
// tính private - tham số chỉ được xác định trong hàm
// 1 hàm có thể có nhiều tham số.
// đối tượng arguments

function myArguments() {
    console.log(arguments)
}
myArguments('Log 1','Log 2','Log 3');

function myFor() {
    let myWrite = '';
    for (let param of arguments){
        myWrite += `${param} - `;
    }
    console.log(myWrite);
}
myFor('Log 1','Log 2','Log 3');

// từ khóa return trong hàm

/!*var isConfirm = confirm('Message?');

console.log(confirm);*!/

function cong(a,b) {
    return a + b; // trả về bất cứ dữ liệu gì. các dòng lệnh sau dòng return sẽ không hoạt động.
}
let result = cong('2',8);

console.log(result);



// bại học thêm về function

// khi đặt 2 cái function trùng tên thì cái định nghĩa function sau sẽ đè lên function trước. và chỉ thực thi function sau
// Có thể khai báo biến trong function, và biến đó chỉ được sử dụng trong Function đó thôi,.(tính private).
// Định nghĩa hàm trong hàm

function showMessage() {
    function showMessage2() {
        console.log('Message2');
    }
    showMessage2();
}
showMessage();

// Các loại function

// Declaration function: - có thể gọi được hàm trước khi định nghĩa
myShow();

function myShow() { // đây là Declaration function phải đặt tên cho function
    console.log('Declaration function:');
}

// Expression function: - không thể gọi hàm trước khi định nghĩa
var myShow_2 = function () { // đây là Expression function có thể đặt tên hoặc không
    console.log('Expression function:')
}

// Array function:


// Học về string trong javascrip:
/!*
var lastName = 'Tuan'; // cách 1

var fullName = new String('Bui Tuan'); // cách tạo 1 chuỗi. cách 2
console.log(fullName);

// Xác định độ dài của chuỗi
console.log(fullName.length)*!/

// LÀM VIỆC VỚI CHUỖI (STRING)

let myString = 'Cùng học javascrip nào Cùng học javascrip nào';
// 1. length
myString.length; // độ dài của chuổi

// 2. Find index - tìm ký tự trong chuỗi
console.log(myString.indexOf('học',6 )) // trả về vị trí đầu tiên tìm được trong chuỗi nếu ko có tham số. tham số là tìm vị trí đầu tiên sau vị trí tham số

// Search: tìm theo biểu thức chính quy
console.log(myString.search('hoc')) // không hỗ trợ tham số.

// 3. Cut string

console.log(myString.slice(4,6)) // cắt chuỗi từ vị trí từ 4 đến vt 6. bỏ qua tham số thứ 2 thì cắt từ vị tí 1 đến hết....

// 4. Replace thay thế 1 chuỗi bàng 1 chuỗi khác

// console.log(myString.replace(/học/g, 'khong'))


// 5-6 covert 1 chuổi thành chữ hoa chữ thường
// console.log(myString.toUpperCase())
// console.log(myString.toLowerCase())


// 7. Trim: loại bỏ ký tự trắng ở 2 đầu string
// console.log(myString.trim())


// 8. Split -- chuyển 1 chuỗi thành array

// var languages = 'javascrip, PHP, Ruby';
// console.log(languages.split(', ')); // xác nhận được điểm chung để cắt thành 1 array

// 9. Get a character by index

const myString2 = 'Bui Tuan';

// console.log(myString2.charAt(4));

console.log(myString2[2]); // kiểu array

// Làm bài tại đây
function getUpperCaseName(name) {
    return name.toUpperCase();
}



// Kì vọng
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"

//number
/!*let number1 = 1e9;

console.log(Number.isFinite(number1));*!/

// kiểm tra 1 số có phải là number hay không

/!*function isNumber(value) {
   if(typeof value == 'number' && !isNaN(value)){
       return true;
   }else{
       return false;
   }
}*!/

// Mảng trong javascript - Array

let languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',

];
// console.log(Array.isArray(languages)); // kiểm tra xem có phải là array hay không?
// console.log(languages.length); // tính độ dài của array
// console.log(languages[2]);

// Làm việc với Array

// console.log(languages.toString()); // chuyển 1 mảng sang string

// console.log(languages.join(', ')); // chuyên array sang string và các phần tử cách nhau vởi ký tự mình chọn, khi mảng không còn phần tử nào nữa thì nó trả về undefined  và mảng vẫn là mảng tróng

// console.log(languages.push('Dark','python')); // thêm phần tử vào cuối mảng

// console.log(languages.shift()); // xóa phần tử đầu tiên của mảng và trả về phần tử vừa xóa - nếu mảng không có phần tử thì nó trả về undefined

// console.log(languages.unshift('java')); // thêm phần tử vào đầu mảng

// languages.splice(1,2) // xóa mảng từ vị trí cần xóa đến vị trí cần xóa

// languages.splice(1,0,'Python',100) // chèn Python vào vị trí số 1, 0- ý nghĩa là không xóa phần tử nào cả

/!*var languages2 = [
  'Dart',
  'Ruby'
];*!/

// console.log(languages.concat(languages2)); // nối 2 mảng

// console.log(languages.slice(1,3)); // coppy mảng từ vị trí số 1 đến vị trí số 2 không tính vị trí số 3

 // console.log(languages)

// Object trong Javascript
var emailKey = 'email';
var myInfo = {
    name: 'Bui Tuan',
    age: 29,
    address: 'Ha Noi, VN',
    gender: 'male',
    [emailKey]: 'devils2tuan@gmail.com',
    getName: function () {
        return this.name;
    }
}
// myInfo.email = 'devils2tuan@gmail.com'; // thêm value vào object

// console.log(myInfo.name); // lấy biến name trong object cách 1
// console.log(myInfo['name']); // lấy biến name trong object cách 2 nếu mà key không có thì nó trả về undefined.
// var myKey = 'address'; // định nghĩa 1 key trong 1 object bằng 1 biến để gọi key ra thì. console.log(myInfo[myKey]);

// delete myInfo.age; // xóa values

// khi một key trong object là một function --> gọi là 1 phương thức / method
// những cái khác(Others) --> thuộc tính / property

// console.log(myInfo);




*/
