let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tb3 = [];
let tb4 = [];

num.map((num) => {
    let t3 = num * 3
    console.log(`3 * ${num} =`, t3);
    let push = tb3.push(t3)    
});

console.log(tb3);

num.forEach((num) => {
    let t4 = num * 4
    console.log(`4 * ${num} =`, t4);
    let push = tb4.push(t4)
});

console.log(tb4);
