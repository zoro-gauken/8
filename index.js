const arr = ['Feruz', 22, true, null];

let str = []
let num = []
let bool = []
let obj = []
arr.filter(element => {
    if (typeof element === 'string') {
        str.push(element);
    } else if (typeof element === 'number') {
        num.push(element);
    } else if (typeof element === 'boolean') {
        bool.push(element);
    } else {
        obj.push(element);
    }
});

console.log('String:', str);
console.log('Numbers:', num);
console.log('Booleans:', bool);
console.log('Objects:', obj);