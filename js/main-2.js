// Object constructor (xây dựng đối tượng)

/*function User(firstName, lastName, avatar) {  // User là một object constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}*/

// Object prototype // nguyên mẫu của đối tượng

/*
User.prototype.className = 'F8'; // thêm 1 thuộc tính ở bên ngoài hàm tạo. // tất cả các đối tượng được tọa ra từ  constructor này thì có chúng thuộc tính được tao ra từ cách này
User.prototype.getClassName = function () {
    return this.className;
}
*/

/*
var author = new User('Tuan','Bui','avatar 1');  // author và user mới là đối tượng
var user = new User('Vu','Nguyen','avatar 2');

author.title = 'Học javascript tại F8'; // thêm thuộc tính vào từng đối tượng
user.comment = 'Bài học rất bổ ích';

console.log(author);
console.log(user);
*/

// Đối tượng Date

/*
var date = new Date(); // khai báo bang new thì 1 sẽ là 1 đối tượng, chúng ta có thể lấy ra từng thuộc tính của nó.
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
*/
// console.log(date);
// console.log(`${day}/${month}/${year}`);
//
// console.log(date.getTimezoneOffset());


// Math object: không phải là 1 constructor
/* -- Math.PI // số pi
-- Math.round() // làm tròn số thập phân
-- Math.abs() // giá trị tuyệt đối. không âm
-- Math.ceil() // làm tròn trên chỉ làm tròn trên, nếu 4.00000001 thì thành 5
-- Math.floor() // luôn làm tròn dưới 4.999999 -> 4
-- Math.random() // chọn 1 số ngẫu nhiên ví dụ chọn 1 số ngẫu nhiên từ 0 - 99: Math.floor(Math.random() *100) chọn số nguyên
-- Math.min(100,2,-3......) // lấy số nhỏ nhất trong tập hợp
-- Math.max(100,2,-3......) // lấy số lớn nhất trong tập hợp
*/
/*
var random = Math.floor(Math.random() * 5);
console.log(random)
var bouns = [
  '10 coins',
  '20 coins',
  '30 coins',
  '40 coins',
  '50 coins',
];
console.log(bouns[random]);


if(random < 5 ){  // đặt tỷ lệ  5%
    console.log('Cường hóa thành công')
}
*/

// Câu lệnh rẽ nhánh - Switch
/*
var some = 2;

 switch(some) {
     case 2: // nó sử dụng toán tử '===' để so sánh.
         console.log('Hom nay la thu 2');
         break; // để thoát câu lệnh. nếu không để break thì nó sẽ chạy hết các case sau case đúng.
     case 3:
         console.log('Hom nay la thu 3');
         break;
     case 4:
         console.log('Hom nay la thu 4');
         break;
     case 5:
         console.log('Hom nay la thu 5');
         break;
     case 6:
         console.log('Hom nay la thu 6');
         break;
     default: // nếu các case không đúng thì nó sẽ chạy default
         console.log('không biết')
 }
 */
// trong trường hợp gặp toán tử >, <, (tính đúng hay sai) thì sử dụng if else
// nếu trong trường hợp biết trước giá trị thì sử dụng switch case.  nếu có dưới 3 case thì chuyển sang dùng if else


// Toán tử 3 ngôi - Ternary operator

/*
var course = {
     name: 'Javascript',
    coin: 300

}

if(course.coin >0) {
    console.log(`${course.coin} Coins`);
}else {
    console.log('Miễn phí');
}
*/

/*
var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí'; // toán tử 3 ngôi
console.log(result);
*/

/*
*  Vòng lặp- Loop
* 1. for - Lặp với điều kiện đúng
* 2. for/in - lặp qua key của đối tượng
* 3. for/of - lặp qua values của đối tượng
* 4. while - lặp khi điều kiện đúng
* 5. do/while - lặp ít nhất 1 lầ, sau đó lặp khi điều kiện đúng
* */

// For loop
/*
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];
var arrayLength = myArray.length; // để tối ưu để trình duyệt khỏi chạy lại nhiều lầ câu lệnh myArray.length trong For loop


for(var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}
*/

// For/in loop

/*
var myInfo = {
    name: 'Bui Tuan',
    age: 29,
    address: 'Ha Noi, VN'
};
for(var key in myInfo) {
    console.log(myInfo[key]);
}
*/

/*
var languages = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];
 for(var key in languages) {
     console.log(languages[key]);
 }
 */
/*
var myString = 'Javascript'; // đối với string nó cũng đánh index cho từng ký tự như 1 array

for(var key in myString) {
    console.log(myString[key]);
}
*/

// For/of loop - dùng trong trường hợp lấy từng phần tử của 1 mảng hoặc chuỗi

/*
var languages = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
];
*/
/*for(var values of languages) // trường hợp là 1 chuỗi thì không duyệt đuọc
    console.log(values);
}*/

/*
var myString = 'Javascript';
for (var values of myString) {
    console.log(values);
}
*/
 // đối với object
/*
var myInfo = {
    name: 'Bui Tuan',
    age: 29,
    address: 'Ha Noi, VN'
};
for (var values of Object.keys(myInfo)) { // dùng với object
    console.log(values);
}
*/

// do/while loop

// Ví dụ: chạy lại khi nạp thẻ sai 3 lần.
/*
var i = 0;
var isSuccess = false;

do{
    i++;
    console.log('Nap the lan ' + i);

    if (false){
        isSuccess = true;
    }
    console.log(isSuccess);
}while(!isSuccess && i <= 3);
*/
/*
// Break & Continue in loop
// Break

for (var i = 0; i< 10; i++){
    console.log(i);
    if (i >= 5 ){
        break; // kết thúc Loop khi 1<=5.
    }
}
*/
/*
// Continue

for (var i = 0; i< 10; i++){
    if (i%2 !== 0){
        continue; // đối với i là số lẻ chạy lệnh continue. nó sẽ bỏ qua những lệnh bên dưới continue.
    }
    console.log(i);

}
*/

/*
// Vòng lặp lồng nhau - Nested loop

var myArray = [
  [1,2] ,
  [3,4],
  [5,6]
];
for (var i = 0; i < myArray.length; i++){
    for (var j = 0; j< myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
*/

// Học Đệ Quy.
/*
//1. Xác định được điểm dừng
//2. Logic handle -> tạo ra cái điểm dừng

function countDown(num){
    if (num > 0){
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(5);
*/

/*
function loop(start, end, cb){
    if (start < end){
        cb(start);
        return loop(start + 1, end, cb);
    }
}
var array = [
    'Javascript',
    'PHP',
    'Ruby',
    'puthon'
];
loop(0, array.length, function (index){
    console.log(array[index]);
})
*/

/*
// Hàm tính giai thừa bằng Đệ quy

function giaiThua(num){
    if (num > 0){
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(6));
*/

/*
// Hàm tính giai thừa bằng for
function giaiThua(num){
    var output = 1;
    for (var i = num; i >0; i--){
        output = output * i;
    }
    return output;
}

console.log(giaiThua(6));
*/

// làm việc với Array:
/*
Array methods:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/
/*
const courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 300
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
];
*/

/*
// forEach(); // để duyệt qua các phần tủ của mảng
courses.forEach(function (course, index){
    console.log(index, course);
});
*/

/*
// every(); // ứng dụng kiểm tra tất cả các phần tử phải thỏa mãn 1 điều kiện nào đo.
var isFree = courses.every(function (course, index){
    console.log(index)
    return course.coin === 0; // kiểm tra điều kiện
});
console.log(isFree);
*/

/*
// some(); // ngược lại với every: chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện nào đó thì sẽ kết thúc vòng lặp
var isFree = courses.some(function (course, index){
    return course.coin === 0; // kiểm tra điều kiện
});
console.log(isFree);
*/

/*
// find(); // để tìm kiếm, tìm lần lượt từ trên xuống. tìm dc thì sẽ dừng lại không tiếp tục kiểm tra nữa
var isFree = courses.find(function (course, index){
    return course.name === 'Ruby'; // Tìm kiếm: trả về object. nếu ko có phần tử thỏa mãn thì nó trả về undefined
});
console.log(isFree);
*/

/*
// filter();  // tìm kiếm tất cả các phần tử thỏa mãn điều kiện
var listCourses = courses.filter (function (course, index){
    return course.name === 'Ruby'; // Tìm kiếm: trả về object. nếu ko có phần tử thỏa mãn thì nó trả về undefined
});
console.log(listCourses);
*/

// map(); // chỉnh sửa dữ liệu
/*

let newCourses = courses.map(function (course, index){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses,
    };
});
console.log(newCourses);
*/

