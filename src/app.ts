// const names: Array<string> = ["Hyunjoong", "Max", "Manuel"];
// // names[0].split(" ");

// const promise:Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then(data => {
//     data.split(" ");
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Hyunjoong", hobbies: ["Sports"] }, { age: 28 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 value.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Hyunjoong" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item)) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hyunjoong");
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStoreage = new DataStorage<object>();
objStoreage.addItem({ name: "Hyunjoong" });
objStoreage.addItem({ name: "Max" });
objStoreage.addItem({ name: "Manu" });
// ...
objStoreage.removeItem({ name: "Max" });
console.log(objStoreage.getItems());
