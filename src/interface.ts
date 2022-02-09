// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age?: number;

  constructor(name?: string, age?: number) {
    if (name) {
      this.name = name;
    }
    if (age) {
      this.age = age;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
    // throw new Error("Method not implemented.");
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there - I am");
