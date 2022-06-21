// CRUD
//      - Create: Tạo mới -> POST
//      - Read: Lấy dữ liệu -> GET
//      - Update: Chỉnh sửa -> PUT(chỉ giữ lại nội dung sửa, xóa bỏ cái khác) / PATCH(up sửa đổi và giữ nguyên cái không sửa)
//      - Delete: Xóa -> DELETE




var coursesApi = "http://localhost:3000/courses";

function start() {
    getCourses(function (courses){  // Có thể viết thẳng: getCourses(renderCourses);
        renderCourses(courses);
    });
    handleCreateForm();
}


start();

// Functions

function getCourses(callback){
    fetch(coursesApi)
        .then(function (response){
            return response.json();
        })
        .then(callback);
}

// Tạo function create Course
function handleCreateCourse(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then(function (response){
            response.json();
        })
        .then(callback);

}

// Tạo hàm delete Course
function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
    fetch(coursesApi + '/' + id, options)
        .then(function (response){
            response.json();
        })
        .then(function (){
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem){
                courseItem.remove();
            }
        });
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course){
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm(){
    var creatBtn = document.querySelector('#create');
    creatBtn.onclick = function (){
        // Create 1 biến chứa value khi click nút button.
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }

        handleCreateCourse(formData, function (){
            getCourses(renderCourses);
        });
    }
}

