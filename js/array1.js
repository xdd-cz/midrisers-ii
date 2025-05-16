// iteration
// for loop
// while loop
// do while
// for each
// map

for (let i = 20; i >= 10; i--) {
    console.log(`3 X ${i} =`, i * 3);
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.length);
console.log(num.indexOf(10));

let oddNumber = [];
let evenNumber = [];

for (let i = 0; i < num.length; i++) {
    const x = num[i];
    if (x % 2 == 0) {
        evenNumber.push(x);
    } else {
        oddNumber.push(x);
    }
}
console.log("this is even number array", evenNumber);
console.log("this is odd number array", oddNumber);

let fruits = ["apple", "banana", "grapes"];
console.log(fruits);

let removeFruit = fruits.pop("banana");
console.log(fruits);

let addFruit = fruits.push("lemon");
console.log(fruits);

let shift = fruits.shift();
console.log(fruits);

let unshift = fruits.unshift("apple", "grapes");
console.log(fruits);

let splice = fruits.splice(2, 1);
console.log(fruits);

let test4 = fruits.indexOf("apple");
console.log(test4);

let includes = fruits.includes("banana");
console.log(includes);

let includes2 = fruits.includes("kiwi");
console.log(includes2);

let includes3 = fruits.includes("apple", 0);
console.log(includes3);
// let test5 = fruits.findIndex(0); 
// console.log(fruits);
// assingment for array methods
// shift;
// unshift;
// splice;
// slice;
// indexOf;
// findIndex;
// includes;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = [];
let even = [];
numbers.forEach((num) => {
    if (num % 2 == 0) {
        even.push(num);
    } else {
        odd.push(num)
    }
})

console.log(odd);
console.log(even);


let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd1 = [];
let even1 = [];

numbers1.map((num) => {
    if (num % 2 == 0) {
        even1.push(num);
    } else {
        odd1.push(num)
    }
})
console.log(odd1);
console.log(even1);

// for (let i = 0; i =< num.10; i++) {
//     const element = array i];
    
// }

let findNum = num.find((n) => {
    return n == 5;
});

let filter = num.filter((n) => {
    return n < 5;
});

console.log( findNum);
console.log(filter);


