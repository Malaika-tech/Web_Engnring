//basic powerful data type -> oject (which is key-value pair{singleton, multivalued}) -> we can define objects in three ways:
//when you work with key-value pair always use (:) colon. for instance: 
let person = {//method as property.
    name: "Malaika", age: 21, isStudent: true, registeredCourses: { subject1: "PF", subject2: "OOP" }, displayName: function () {
        return this.name;

    }, for(){
        console.log(Object.keys(person));
        Object.enteries(person);

    }
};
//object destructuring 
let {name, isStudent} = person1;
//(...) it can be used as expand
let currentStudent = {... person1};
console.log(currentStudent);
console.log(person.registeredCourses["subject1"]);
//static can be used to define data type.
let persons = new Object();
persons.name = "Milli";
persons.age = 21;
persons.isStudent = true;
let person2 = Object.create(null);
person2.name = "Meddy";
person2.age = 21;
person2.isStudent = true;
person2["city"] = "mars";

//factory function ?
let idVal = " "; //firstname.id;
console.log(person2[idVal]);

function add(...val)
{
    return val;

}
function createPerson(name,age){
    this.name="malajd";
    this.age="45";
}
let person3 = new createPerson("sdgs",56);
let person4 = new createPerson("sxdw",34);
console.log(person3.createPerson());
person.prototype.startsemester=true;
person.prototype.greet=function(){
    return "hello, ${this.name}";
}