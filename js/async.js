// async and await

const asyncfunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log("this is repsonce", data);
};

asyncfunction();

const asyncfunction1 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log("this is repsonce", data);
    } catch (error) {
        console.log(error);  
    }
}

asyncfunction1();

const asyncfunction2 = async (id, name) => {
    console.log("id is", id)
    console.log("name is", name)
} 

asyncfunction2(3, "xddcz");