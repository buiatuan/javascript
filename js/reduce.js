// Reduce() // muốn nhận về 1 giá trị duy nhất.

// Bài toán tính tổng Coin trong array.

/*
// làm theo cách bình thường. for chuyền thống.
let totalCoin = 0; // Tạo biến lưu trữ
for (let course of courses){ // lặp qua các phần tử
    totalCoin += course.coin; // thực hiện việc lưu trữ
}
*/

/*
// Dùng reduce


let totalCoin = courses.reduce(function coinHandler(accumulator, currentValues, currentIndex, originArray){
    // accumulator: là biến lưu trữ -
    // currentValues: Giá trị hiện tại - là object
    // currentIndex: chỉ mục của currentValues.
    // originArray: array gốc
    return accumulator + currentValues.coin;
}, 0); // số không tương đương khởi tạo biến lưu trữ bằng 0 (gọi là initial value

console.log(totalCoin);
*/

/*
// Bài tập
// Flat - 'làm phẳng mảng từ Depth array - "Mảng sâu"'.

let depthArray = [1,2,[3,4],5,6,[7,8]];
let flatArray = depthArray.reduce(function (flatOutput, depItem){
    return flatOutput.concat(depItem);
},[]);
console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
let topics = [
    {
        topics: "front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topics: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    },
];
let newCourses = topics.reduce(function (course, topic){
    return course.concat(topic.courses);
},[]);
console.log(newCourses);
*/

/*
// Bài tập reduce

// Xây dựng hàm reduce2 có cách hoạt động giòng hàm reduce có sẵn của JS.
Array.prototype.reduce2 = function (callback, initialValue){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        initialValue = this[0];
    }
    for(; i < this.length; i++){
        initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue;
}

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, number) => {
    return total + number;
},10);
console.log(result);
*/

/*
// includes method

var courses = [
    'Javascript',
    'PHP',
    'Dart'
];

console.log(courses.includes('Javascript')); // trả về kiểu boolean
*/
