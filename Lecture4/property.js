// Objects in JavaScript (Key-Value Pairs)
let person = {
    name: "Malaika", 
    age: 21, 
    isStudent: true, 
    registeredCourses: { subject1: "PF", subject2: "OOP" }, 
    // Method inside an object
    displayName: function () {
        return this.name;
    }, 
    // Method to list all keys in the object
    listKeys: function() {
        console.log(Object.keys(this));
    }
};

// Object Destructuring - Extracting properties from an object
let { name, isStudent } = person;

// Spread operator to clone an object
let currentStudent = { ...person };
console.log(currentStudent);
console.log(person.registeredCourses["subject1"]);

// Creating objects using the Object constructor
let persons = new Object();
persons.name = "Milli";
persons.age = 21;
persons.isStudent = true;

// Creating objects using Object.create (creates a new object with no prototype)
let person2 = Object.create(null);
person2.name = "Meddy";
person2.age = 21;
person2.isStudent = true;
person2["city"] = "Mars";

// Factory Function Example (used to create multiple objects with the same structure)
function createPerson(name, age) {
    return {
        name,
        age
    };
}
let person3 = createPerson("Alice", 25);
let person4 = createPerson("Bob", 30);
console.log(person3, person4);

// Constructor Function Example (used for creating objects with prototypes)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding properties and methods using prototype
Person.prototype.startSemester = true;
Person.prototype.greet = function () {
    return `Hello, ${this.name}`;
};

// Creating an instance of Person
let student1 = new Person("Charlie", 22);
console.log(student1.greet());