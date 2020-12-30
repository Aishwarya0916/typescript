class A{
    age: number;
    constructor(age:number) {
        console.log('A');
        this.age = age;
    }
}
class B extends A {
    classRoom: number;
    constructor(classRoom:number, age: number) {
        super(age);
        console.log('B');
        this.classRoom = classRoom;
    }
}
class C extends B {
    roomNo: number;
    constructor(roomNo:number, classRoom: number, age: number) {
        super(classRoom, age);
        console.log('C');
        this.roomNo = roomNo;
    }
}
const obj: C = new C(1, 2, 3);
