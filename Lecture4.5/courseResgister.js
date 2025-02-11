let studentCourses = {
    student1: [],
    student2: [],
    student3: []
};

document.getElementById("student").addEventListener("change", function() {
    resetSections();
    displayCourses();
});

function resetSections() {
    document.querySelectorAll(".section").forEach(section => section.style.display = "none");
    document.getElementById("registerSection").style.display = "block";
}

function registerCourse() {
    const student = document.getElementById("student").value;
    const courseName = document.getElementById("courseSelect").value;
    if (student && courseName && !studentCourses[student].includes(courseName)) {
        studentCourses[student].push(courseName);
        alert("Course registered successfully!");
        displayCourses();
    }
}

function displayCourses() {
    const student = document.getElementById("student").value;
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";
    
    if (student && studentCourses[student]) {
        studentCourses[student].forEach((course, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${course} <button class='drop' onclick='dropCourse(${index})'>Drop</button>`;
            courseList.appendChild(li);
        });
    }
}

function dropCourse(index) {
    const student = document.getElementById("student").value;
    if (student) {
        studentCourses[student].splice(index, 1);
        displayCourses();
    }
}