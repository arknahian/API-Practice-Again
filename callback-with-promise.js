console.log("Hello")

function taskOne() {
    return new Promise((resolve, reject) => {
        resolve("task one is completed")
    })
}


function taskTwo() {
    return new Promise((resolve, reject) => {
        reject("Task two is completed")
    })
}

function taskThree() {
    return new Promise((resolve, reject) => {
        resolve("task three is completed")
    })
}

function taskFour() {
    return new Promise((resolve, reject) => {
        resolve("task four is completed")
    })
}



const allTask = async () => {
    try {
        const task1 = await taskOne();
        console.log(task1);
    
        const task2 = await taskTwo();
        console.log(task2);
    
        const task3 = await taskThree();
        console.log(task3);
    
        const task4 = await taskFour();
        console.log(task4);
    }
    catch{
        console.log("Sorry Something went wrong")
    }
}
allTask();

console.log("bye")