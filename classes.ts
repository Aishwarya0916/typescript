class Student {
    // member variables
    private name: string;
    age: number;
 
    // parameterized constructor
    constructor(name: string, age: number) {
        // it is called when an object is created.
        // it initializes the member variables.
        console.log('I am in constructor');
        this.name = name; 
        this.age = age;
        // whenever we access member variables of a class in a function of same class
        // we would use this.varName
    }
 
    // private member function. can only be called within the class.
    private printData () {
        // This is called as shadowing.
        // when function variable has same name as member variable.
        let name = 'Bugsy'; 
 
        console.log('My name is', name); // refers to function variable (local variable)
        console.log('My name is', this.name); // refers to class variable (member variable)
 
        // calls member function
        this.printMoreData();
    }
 
    // public member function (when access modifier is no specified it is public by default.)
    printMoreData (age: number = 23) {
        // parameters are treated as local variable (function variable).
        console.log('My age is', age); // refers to function variable (local variable)
        console.log('My age is', this.age); // refers to class variable (member variable)
    }
 
    // public member function
    isOld (cAge: number = 18): string {
        let retValue: string;
        if(this.age > cAge) {
            retValue = 'I am old';
        } else {
            retValue = 'I am Baby';
        }
        return retValue;
    }
 
    print (cAge: number = 15): Array<string> {
        const returnResult: Array<string> = []; // declares empty array of strings.
        cAge = 26; //overwrites the parameter (parameters are treated as function variable (local variable))
        const returnValue: string = this.isOld(cAge); // calls member function.
        this.printData(); // calls member function.
        returnResult.push(returnValue); // push into array
        cAge = 72; // this is unuseful, not going to make any effect as we don't use cAge afterwards.
        return returnResult;
    }
 
    // setter (sets value in private member variable)
    setName(newName: string) {
        this.name = newName;
    }
 
    // getter (returns value of private member variable)
    getName() {
        return this.name;
    }
}
 
// creating object of class
const o1 = new Student('Aishwarya', 2);
const o2 = new Student('Praveen', 24);
 
// o1.name = ‘Praveen’; // ERROR: because name is private.
o1.setName('Bugsy'); // setters and getters are used to modify or get private member variables.
 
// o1.printData(); // ERROR: because printData is private.
o1.age = 35; // modifies age because it's public member variable.
const result: Array<string> = o1.print(52); // when function returns something we receive it in variable
console.log(result);
