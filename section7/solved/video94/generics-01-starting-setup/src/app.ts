// Example 1: Array as Generic, where items are all strings
// const names: Array<string> = ["Tony", "Max"]; // string[]

// Example 2: Array as Generic, where items are string or numbers
// const names: Array<string | number> = []; // string[]

// Example 3: Promises as Generics
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    console.log(data.split(' '));
})