// what is a call back?
// to pass function as a perimeter 

function fetchData (c) {
    console.log("fetcing data...");
    setTimeout(() => {
        c("api succesfully fetched")
    }, 2000);
}

fetchData((data) => {
    console.log(data);
})

const muteArray = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = action(arr[i])
    }
};


let array = [1, 2, 3, 4, 5];

muteArray(array, (x) => {
    return x * 3;
});

console.log(array);

// what is promise (resolved, reject, pending)

const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // reject("fail")
        resolve({
            email: "remesh@gmail.com",
        })
    }, 5000)
})

promise
    .then ((data) => {
        console.log(data);   
    })
    .catch((error) => {
        console.log(error)
    })

