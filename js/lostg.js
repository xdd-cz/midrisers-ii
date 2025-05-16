let user = {
    name: "jhon",
    token: "asdfg",
}

localStorage.setItem("user-obj", JSON.stringify(user))
let userObj = localStorage.getItem("user-obj");
console.log(userObj);
let username = userObj.name;
let pars = JSON.parse(userObj);
let parsuser = pars.name;
console.log(parsuser);

fetch('https://jsonplaceholder.typicode.com/todos/6')
    .then(response => response.json())
    .then(json => console.log(json))