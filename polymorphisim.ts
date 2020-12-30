class Person{
    age: number;
    constructor(age:number) {
        this.age = age;
    }
    print(hauseNo: number) {
        console.log("In parent", hauseNo, " age is", this.age);
    }
}
class Student extends Person {
    classRoom: number;
    constructor(classRoom:number, age: number) {
        super(age);
        this.classRoom = classRoom;
    }
    print(hauseNo: number) {
        console.log("In Child", hauseNo, " class is", this.classRoom);
    }
}

// Normal scenario
const obj1: Student = new Student(1, 2);
obj1.print(123);

// Polymorphisim
const obj2: Person = new Person(1);
obj2.print(123);
const obj3: Person = new Student(1, 2);
obj3.print(123);

// Obj of parent class can not be typecasted as child class.
// const obj4: Student = new Person(1);
// obj4.print(123);
