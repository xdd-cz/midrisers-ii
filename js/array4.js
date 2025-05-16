let card = [
    {
        product: "Apple",
        price: 100,
        quantity: 2,
    },
    {
        product: "Pineapple",
        price: 50,
        quantity: 3,
    },
    {
        product: "Apple",
        price: 150,
        quantity: 4,
    },
    {
        product: "Apple",
        price: 250,
        quantity: 5,
    },
];

const total = card.reduce((a, c) => a + c.price * c.quantity, 0);
console.log(total);

let cources = [
    {
        class: "math",
        completesStatus: false,
    },
    {
        class: "science",
        completesStatus: true,
    },
    {
        class: "english",
        completesStatus: false,
    },
    {
        class: "history",
        completesStatus: true,
    },
    {
        class: "geograpth",
        completesStatus: false,
    },
];

let done = [];
let notDone = [];

cources.map((c) => {
    if (c.completesStatus == true) {
        done.push(c.class)
    } else {
        notDone.push(c.class)
    }
});

console.log(done);
console.log(notDone);

const countries = [
    {
      name: "India",
      countryCode: "IN",
    },
    {
      name: "USA",
      countryCode: "US",
    },
    {
      name: "United Kingdom",
      countryCode: "UK",
    },
    {
      name: "Australia",
      countryCode: "AU",
    },
    {
      name: "Canada",
      countryCode: "CA",
    },
    {
      name: "Germany",
      countryCode: "DE",
    },
    {
      name: "Nepal",
      countryCode: "NP",
    },
  ];

const getCountryCode = (countryName) => {
    let country = countries.find(
        (c) => c.name.toLocaleLowerCase().trim() === countryName.trim()
    );
    if (country) {
        return country.countryCode;
    } else {
        return "Country Not Found";
    }
};
let shortCode = getCountryCode("nepal ");
console.log(shortCode);


// function addition(x, y) {
//    return x + y;
// };

// let sum = addition(2, 4);
// console.log(sum);

let User =  [
    {
        name: "sanjaya",
        email: "sa.mail.com",
    },
    {
        name: "shyam",
        email: "sh.mail.com",
    },
    "santosh",
    "ajaja",
];

const CheckUser = (username) => {
    let user = User.find((u) => u === username.toLocaleLowerCase().trim());
    if (user) {
        return "User is already registered";
    } else {
        return "User is not registered";
    }
};

const a = CheckUser("ajaja ");
console.log(a);

const checkEmail = (username) => {
    let user = User.find((u) => u.name === username.toLocaleLowerCase());
    if (user) {
        return user.email
    } else {
        return "User is not registered";
    }
};

const m = checkEmail("shyam");
console.log(m);

const product =  [
    {
        title: "laptop",
        price: 4000,
        quantity: 10,
    },
    {
        title: "mobile",
        price: 3000,
        quantity: 20,
    },
    {
        title: "watch",
        price: 2000,
        quantity: 30,
    },
    {
        title: "wallet",
        price: 1000,
        quantity: 30,
    },
];

let less = [];
let more = [];

product.map((p) => {
    if (p.price < 3000) {
        less.push(p)
    } else {
        more.push(p)
    }
});

console.log("Less then three thousnd,");

less.map((p) => {
    console.log(p.title);
});

const findProduct = (price) => {
    let productNew = product.find((p) => {
        return p.price === price;
    });
    if (productNew) {
        console.log(`${product.title}`);
    } else { 
        console.log("balls");
    }
}

findProduct(3000)

const sentence = "i am a web dev";
const word = sentence.split(" ");
const totalWord = word.length;
console.log(totalWord);

let userr = {
    name: xdd,
    age: 2,
}

let name1 = userr.name;

let stringUser = JSON.stringify(userr);

const name2 = stringUser.name;
let parsedUser = JSON.parsedUser.name;

