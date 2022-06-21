// JSON ( Javascript Object Notation)
// 1. là 1 định dạng dữ liệu (chuỗi)
// 2. JSON: Number, String, Boolean, Null, Array, Object ( biến các kiểu dữ liệu này thành json và ngược lại)
// Mã hóa(Encode) / Giải mã(decode) ||
// Stringify: từ Javascript -> JSON
// Parse: từ JSON -> Javascript

/*
var json = '["Javascript","PHP"]'; // json dạng mảng

var json2 = '{"Name":"Bui Tuan","age":18}'; // json dạng object

var object = JSON.parse(json2);
console.log(object);
*/


// Promise:

// 1. Sync: Đồng bộ --> câu lệnh chạy theo luồng. tuần tự từ trên xuống
// 2. Async: Bất đồng bộ -->
//        - setTimeout, setInterval, fetch, XMLHttpRequest, file reading --> bất đồng bộ
//        - request animation frame --> bất đồng bộ

/*
// sleep 1s rồi chạy.
setTimeout(function () {
    console.log(1);
}, 1000);

console.log(2);
*/

// 3. các vấn đề dùng Sync
//       - Callbak hell. (nhiều
//       - Pyramid of doom (kim tự tháp).

/*
// Callback hell:
setTimeout(function () {
    console.log(1); // việc số 1
    setTimeout(function () {
        console.log(2); // việc số 2
        setTimeout(function () {
            console.log(3); // việc số 3
            setTimeout(function () {
                console.log(4); // việc số 4
                setTimeout(function () {
                    console.log(5); // việc số 5
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
*/

// Promise: Sinh ra để sử lý các thao tác bất đồng bộ. Trước khi có promise thì chúng ta thường dùng callback
//          , khi dùng callback thì hay sảy ra callback hell. --> code xấu. --> sinh ra promise
//          để sử lý callback hell. để tạo ra 1 promise thì tạo ra với từ khóa new promise.
//          chuyền vào 2 tham sô: resole() khi thao tác thành công và reject() khi logice lỗi.
//          , khi sử dụng promise. sử dụng 2 đối tượng .then() --> thực thi khi promise được resole vào .catch -->
//           khi promise được reject.
// các bước tạo ra 1 promise
//  1. tạo 1 biến new Promise
//  2. Excutor.

// có 3 trạng thái của Promise:
//      - Pending: khi không có resole / reject
//      - Fulfilled: trạng thái thành công khi có resole
//      - Reject: trạng thái thất bại

/*
var promise = new Promise(
    function (resolve, reject) {
        // logic
        // Thành công: resole();
        // Thất bại: reject();

        // Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);
        /!*reject('Lỗi rồi');*!/
    }
);
promise
    .then(function (course){
        // thành công
        console.log(course);
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve ([1,2,2,3]);
            }, 2000);
        });
    })
    .then(function (data){
        console.log(data);
        return data;
    })
    .catch(function (err){
        // thất bại
        console.log(err);
    })
    .finally(function (){
        console.log('Done!');
    });
*/


/// Promise (chain): chuỗi.

// Promise.resolve
// Promise.reject
// Promise.all


// Promise example
/*

var users = [
    {
        id: 1,
        name: 'Bui Tuan'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
];
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Tuan chua ra bai moi a'
    },
    {
        id: 2,
        user_id: 3,
        content: 'Vua moi up'
    }
];

// 1 Lấy comments
// 2. Từ comments lấy ra user_id
// từ user_id lấy  user

function getComments(){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds){
    return new Promise(function (resolve){
        var result = users.filter(function (user){
            return userIds.includes(user.id)
        })
        setTimeout(function (){
            resolve(result);
        }, 2000);
    })
}

getComments()
    .then(function (comments){
        var userIds = comments.map(function (comments){
            return comments.user_id;
        });

        return  getUsersByIds(userIds)
            .then(function (users){
               return {
                   users: users,
                   comment: comments
               };
            })
    })
    .then(function (data){
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comment.forEach(function (comment){
            var user = data.users.find(function (user){
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    })
*/


// Fetch -> tích hợp promise

// Backend -> API -> fetch -> JSON/XML -> dùng JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts';

// stream
/*
fetch(postApi)
    .then(function (response){
        return response.json(); // bước này tương đương: JSON.parse: chuyển JSON -> Javascript type
    })
    .then(function (posts){
        var htmls = posts.map(function (post){
            return `<li>
                        <h2>${post.title}</h2>
                        <h4>${post.body}</h4>
                    </li>`;
        });

        var html = htmls.join('');
        document.getElementById('comment-block').innerHTML = html;
    });
*/

var courseApi = "http://localhost:3000/courses";

fetch(courseApi)
    .then(function (response){
        return response.json();
    })
    .then(function (course){
        console.log(course);
    })
