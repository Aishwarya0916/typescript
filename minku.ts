class BooFamily {
   name : string;
   private age : number;
   skill : Array<string>;
 
   constructor(name: string, age: number, skill: Array<string>){
       this.name =name;
       this.age = age;
       this.skill = skill;
   }
 
   printData(){
       console.log("My name is", this.name);
       console.log("My age is", this.age);
       console.log("My skill is", this.skill[0]," and ",this.skill[1]);
   }
}
 
let o1 = new BooFamily("Bugsy", 2, ["Pole Dancing","Kudi Kudi"]);
o1.printData();
let o2 = new BooFamily("Minku", 2, ["Cuddle hona", "TT"]);
o2.printData();
