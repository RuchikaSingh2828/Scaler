class Student {
  constructor() {
    this.age = 0;
    this.name = '';
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  sayHello(name) {
    console.log(` ${this.name} says hello to ${name}`);
  }
}

function swap(obj1, obj2) {
  let tage = obj1.age;
  obj1.age = obj2.age;
  obj2.age = tage;

  let tname = obj1.name;
  obj1.name = obj2.name;
  obj2.name = tname;
}
let student1 = new Student();
student1.age = 10;
student1.name = 'A';

let student2 = new Student();
student2.age = 20;
student2.name = 'B';

swap(student1, student2);
student1.display();
