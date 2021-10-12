console.log("Hello")

function taskOne(callback) {
    console.log("Task One is completed");
    callback();
}


function taskTwo(callback) {
    setTimeout(() => {
        console.log("Task Two is completed");
        callback();
    }, 3000)
}

function taskThree(callback) {
    console.log("taskThree is completed");
    callback();
}

function taskFour() {
    console.log("taskFour is completed");
}

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour();
        });
    });
});

// const allTask = async () => {
//     const task1 = await taskOne;
//     console.log(task1);

//     const task2 = await taskTwo;;
//     console.log(task2);

//     const task3 = await taskThree;
//     console.log(task3);

//     const task4 = await taskFour;
//     console.log(task4);
// }
// allTask();

console.log("bye")