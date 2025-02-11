let studentCourses = {};

document.getElementById("student").addEventListener("change", function() {
    const selectedStudent = this.value;
    document.getElementById("menu").style.display = selectedStudent ? "block" : "none";
    resetSections();
    displayCourses();
});

function showSection(section) {
    resetSections();
    document.getElementById(section + "Section").style.display = "block";
    if (section === "view" || section === "drop") displayCourses();
}

function resetSections() {
    document.querySelectorAll(".section").forEach(section => section.style.display = "none");
}

function registerCourse() {
    const student = document.getElementById("student").value;
    const courseName = document.getElementById("courseInput").value.trim();
    if (student && courseName) {
        if (!studentCourses[student]) studentCourses[student] = [];
        studentCourses[student].push(courseName);
        document.getElementById("courseInput").value = "";
        alert("Course registered successfully!");
    }
}

function displayCourses() {
    const student = document.getElementById("student").value;
    const courseList = document.getElementById("courseList");
    const dropList = document.getElementById("dropList");
    courseList.innerHTML = "";
    dropList.innerHTML = "";
    
    if (student && studentCourses[student]) {
        studentCourses[student].forEach((course, index) => {
            const li = document.createElement("li");
            li.textContent = course;
            courseList.appendChild(li);
            
            const dropLi = document.createElement("li");
            dropLi.innerHTML = `${course} <button class='drop' onclick='dropCourse(${index})'>Drop</button>`;
            dropList.appendChild(dropLi);
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
