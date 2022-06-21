// Callback
// Là hàm function được truyền qua đối số khi gọi hàm khác.
// 1. Là Hàm
// 2. Được chuyền qua đối sô
// 3. Được gọi lại (trong hàm nhận đối số)
// Là 1 hàm được coi là đối số của một hàm khác.
/*
function myFunction(param){
    console.log(param);
}
function myCallback() {

}
myFunction(myCallback);
*/

// Tạo 1 function map2 hoạt động gióng hàm Map có sẵn trong JS
/*

Array.prototype.map2 = function (callback) {
    var output = [];
    var arrayLength = this.length
    for (var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i);
        output.push(result);
    }
    return  output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby',
    'Python'
];

var htmls = courses.map2(function (course){
    return `<h2>${course}</h2>`
});
console.log(htmls.join(''));
*/

// Tạo các hàm forEach2, reduce2, find2, filter2 có cách thức hoạt động gióng các hàm trong JS có sẵn

/*
// forEach2
Array.prototype.forEach2 = function (callback){
    for (let index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

let courses = [
    'Javascript',
    'PHP',
    'Ruby',
    'Python'
];

courses.forEach2(function (course, index){
    console.log(course)
});
*/
/*
// filter : trả về tất cả các element thỏa mãn điều kiện
Array.prototype.filter2 = function (callback){
    let output = [];
    for (let index in this){
        if (this.hasOwnProperty(index)){
            let result = callback(this[index], index, this);
            if (result){ // nghĩa là result khác các giá trị false.(0, '', false, NaN, undefined, )
                output.push(this[index]);
            }
        }
    }
    return output;
}

const courses = [
    {
        name: 'Javascript',
        coin: 250
    },
    {
        name: 'HTML, CSS',
        coin: 0
    },
    {
        name: 'Ruby',
        coin: 200
    },
    {
        name: 'Ruby',
        coin: 400
    },
    {
        name: 'PHP',
        coin: 300
    },
];

let filterCourses = courses.filter2(function (course,index,array){
    return course.coin >= 300;
})
console.log(filterCourses);
*/

// some: trả về true/false. tìm kiếm phâng tử thỏa mã.
Array.prototype.some2 = function (callback){
    let output = false;
    for (let index in this){
        if (this.hasOwnProperty(index)){
            if (callback(this[index], index, this)){
                output = true;
                break;
            }
        }
    }
    return output;
}
// every: trả về true/false . chỉ cần 1 cái không thỏa mãn thì trả về false.
Array.prototype.every2 = function (callback){
    let output = true;
    for (let index in this){
        if (this.hasOwnProperty(index)){
            let result = callback(this[index], index, this);
            if (!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

const courses = [
    {
        name: 'Javascript',
        coin: 250,
        isFinish: true
    },
    {
        name: 'HTML, CSS',
        coin: 2,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 200,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 400,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 300,
        isFinish: false
    },
];

let result = courses.every2(function (course, index){
    return course.coin > 0;
});
