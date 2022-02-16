// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");

//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function<T extends {new(...args:any): {name:string}}> (originalConstructor: T) {
//     console.log("Rendering template");

//     return class extends originalConstructor {
//       constructor(..._:any) {
//         super();

//         const hookEl = document.getElementById(hookId);

//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // @Logger("LOGGING - PERSON")
// @Logger("LOGGER")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Hyunjoong";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();

// console.log(person);

// // ---

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);

// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this.price * (1 + tax);
//   }
// }

// function Autobind(_:any, _2: string, descriptor: PropertyDescriptor) {
//   const origianlMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get(){
//       const boundFn = origianlMethod.bind(this);
//       return boundFn;
//     }
//   };
//   return adjDescriptor;
// }

// class Printer{
//   message = "This works!"

//   @Autobind
//   showMessage(){
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button")!
// button.addEventListener("click", p.showMessage);

// // ---

// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProp: string]: string[];
//   };
// }

// const registeredValidators: ValidatorConfig = {};

// function Required() {}

// function PositiveNumber() {}

// function validate(obj: object){}

// class Course{
//   // @Required
//   title: string;
//   // @PositiveNumber
//   price: number;

//   constructor(t: string, p:number){
//     this.title = t;
//     this.price = p;
//   }
// }

// const courseForm = document.querySelector("form")!
// courseForm.addEventListener("submit", event => {
//   event.preventDefault();
//   const titleEL = document.getElementById("title") as HTMLInputElement;
//   const priceEL = document.getElementById("price") as HTMLInputElement;

//   const title = titleEL.value;
//   const price = +priceEL.value;

//   const createdCourse = new Course(title, price);
//   console.log(createdCourse)
// })

const promise = (state: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) {
        resolve("fulfilled");
      } else {
        reject("reject");
      }
    }, 1000);
  });
};
const promise2 = (state: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state) {
        resolve("fulfilled 2");
      } else {
        reject("reject 2");
      }
    }, 1000);
  });
};

promise(false)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const run = async () => {
  await promise(true)
  await promise2(true) 
}

run()

