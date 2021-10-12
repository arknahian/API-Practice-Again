
const promise1 = new Promise((resolve, reject) => {
    const marry = true;
    if (marry) {
        setTimeout(() => {
            resolve({
                name: "Diana",
                message: "Congrats You are married now"
            }, 1000)
        })
    }
    else{
        reject("fuck off dude");
    }
});
const promise2 = new Promise((resolve, reject) => {
    const marry = false;
    if (marry) {
        resolve({
            name: "Selena", 
            message: "Congo"
        })
    }
    else{
        const message = "Sorry Man I can't";
        reject(message);
    }
})


// promise1.then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// promise2.then(res => {
//     console.log(res.message);
// })
// .catch(err => {
//     console.log(err)
// })


// Promise.race([promise1, promise2]).then(res => {
//     console.log(res.name);
// }).catch(error => {
//     console.log(error);
// })


Promise.all([promise1, promise2]).then(res => {
    console.log(res);
}).catch(error => {
    console.log(error)
})



