"use strict";
const e1 = {
    name: "Hyunjoong",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    // type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Hyunjoong', ' Kim');
result.split(' ');
const fetchedUserData = {
    id: "u1",
    name: "Hyungjoong",
    job: { title: "CEO", descriprion: "My own company" },
};
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   // instanceof type guard
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }
// printEmployeeInformation(e1);
// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadCargo" in vehicle) {
//     vehicle.loadCargo(1000);
//   }
//   // if (vehicle instanceof Truck){
//   //     vehicle.loadCargo(1000);
//   // }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed: " + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 10 });
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// userInputElement.value = "Hi there!";
// // index prop
// interface ErrorContainer {
//   // { email : 'Not a valid email', username: 'Must start with a character!'}
//   [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital character",
// };
