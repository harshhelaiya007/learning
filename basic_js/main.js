const arr = [1, 5, 10101];

const output = arr.reduce((acc, curr) => {
    return acc = acc + curr;
})

console.log(output);


const maxOutput = arr.reduce((acc, curr) => {
    if (acc < curr) {
        acc = curr;
    }
    return acc;
}, 0)

console.log(maxOutput)


const user = [
    { 'firstname': 'harsh', 'lastname': 'helaiya', age: 22 },
    { 'firstname': 'aashish', 'lastname': 'helaiya', age: 26 },
    { 'firstname': 'kanta', 'lastname': 'helaiya', age: 41 },
    { 'firstname': 'kanubhai', 'lastname': 'helaiya', age: 45 },
]


const userOutput = user.map((x) => {
    return x.firstname + ' ' + x.lastname;
})

console.log(userOutput);

const filterUser = user.filter((x) => {
    if (x.age > 18) {
        return x
    }
})

console.log(filterUser);


const reduceUser = user.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]  = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(reduceUser);