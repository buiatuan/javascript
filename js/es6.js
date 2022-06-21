// let, const, var

// 1. var / let, const : scope (phạm vi truy cập), Hosting (let và const
// không có hỗ trợ hosting)
// 2. Const / Var, let: Assignment (Const không thể gán lại giá trị
// vào 1 biết được định nghĩa bàng const.(nhưng có thể thay đổi thuộc tính
// của biến trong object))

// Code bloc: if else, loop, {}, ....

// code thuần thì dùng var (không sử dụng thư viện js nào)
// Bable thì dùng: let, const

/*{
    const course = 'Javascript';
    {
        const course = 12345;
        console.log(course);
    }
}*/


/*
const courseName = 'Javascript';
const description = `Course name: +${courseName}`;
console.log(description);
*/

/*
// Arrow function
const sum = (a, b) => a + b;

console.log(sum(2, 2));*/

// Constructor function: là 1 khuân mẫu tạo 1 bản thiết kế cho đối tượng.

/*// Classes

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}*/

// Default parameter values

/*function logger(log = 'Bui anh tuan'){
    console.log(log);
}
logger(undefined);*/

/*
var array = ['javascript', 'PHP', 'Nodejs'];

var [a,b, ...rest] = array; // rest: là các phần tử khác a và b

console.log(rest);
console.log(a);
console.log(b);*/

/*const course = {
    name: 'Javascript',
    price: 1000,
    images: 'Image-address',
    children: {
        name: ' ReactJS'
    },
    description: 'cua tuan'
}
/!*

var {name: parentName, children: {name}} = course;

console.log(parentName);
console.log(name);
*!/

var {description = 'default description'} = course;

console.log(description);*/

var array = ['Javascript', 'PHP', 'Ruby', 'Reactjs'];

function logger(...rest){
    for (var i = 0; i < rest.length; i++){
        console.log(rest[i]);
    }
}

logger(...array);


