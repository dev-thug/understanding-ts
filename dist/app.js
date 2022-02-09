"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Hyunjoong", hobbies: ["Sports"] }, { age: 28 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 value.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Hyunjoong" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item)) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Hyunjoong");
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStoreage = new DataStorage();
objStoreage.addItem({ name: "Hyunjoong" });
objStoreage.addItem({ name: "Max" });
objStoreage.addItem({ name: "Manu" });
// ...
objStoreage.removeItem({ name: "Max" });
console.log(objStoreage.getItems());
