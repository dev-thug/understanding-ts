"use strict";
// type AddFn = (a: number, b: number) => number;
var add;
add = function (a, b) {
    return a + b;
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name) {
            this.name = name;
        }
        if (age) {
            this.age = age;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
        // throw new Error("Method not implemented.");
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hi there - I am");
