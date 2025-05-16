let num = 10;
let fib = [0, 1]

for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
};

console.log(fib);

let users = [
    {
        name: "jhon",
        prod: [
            {
                name: "mac",
                price: 1000,
            },
            {
                name: "iphone",
                price: 500,
            },
            {
                name: "ipad",
                price: 80,
            },
        ],
    },
    {
        name: "ramsh",
        prod: [
            {
                name: "mac",
                price: 1000,
            },
            {
                name: "iphone",
                price: 500,
            },
            {
                name: "ipad",
                price: 800,
            },
        ],
    },
    {
        name: "sujan",
        prod: [
            {
                name: "mac",
                price: 1000,
            },
            {
                name: "iphone",
                price: 80,
            },
            {
                name: "ipad",
                price: 500,
            },
        ]
    },
];

users.map((u) => {
    u.prod.map((prod) => {
        if (prod.name === "mac") {
            console.log(`${u.name} bought ${prod.name} for $${prod.price}`)
        }
    })
});

const User1 = [
  // {
  //   name: "Ramesh",
  //   age: 25,
  //   address: "kathmandu",
  //   email: "ramesh@gmail.com",
  //   password: "1234",
  // },
  "Dinesh",
  "ram",
  "shyam",
  "krishna",
  "suresh",
  "ramesh",
];
const resgisterUser = (name) => {
  const user = User1.find((u) => {
    return u.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  if (user) {
    console.log(`${user} is already registered`);
  } else {
    console.log(`${name} is not registered`);
  }
};
resgisterUser("Ram");

let accNumber = "12345678901234567890"

function maskFaced(accNumber) {
    let lastFour = accNumber.slice(-4)
    let massked = "x".repeat(accNumber.length -4)
    return massked + lastFour
}

let final = maskFaced(accNumber);
console.log(final);

let phoneNumber = 905104524;

function mackNumber(phoneNumber) {
    let last = phoneNumber.toString().slice(-4);
    let masked = "*".toString().repeat(phoneNumber.length -4);
    return masked + last;
}

let numm = mackNumber(phoneNumber)
console.log(numm);

