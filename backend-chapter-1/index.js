// ? Backend chapter-1. ---------------------------------------------------------------------------------->
//* Fundamentals of javascript -------------------------------------->
/**
 * Array and Object.
 * Functions return.
 * Async js coding.
 * ForEach, Map, Filter, Find, and indexOf.
*/

// array and object:
let arr = [10, 'Apple', true, {}, []];
let object = {
    name: 'Rakibul Rahman',
    age: 18
};

console.log(arr);
console.log(object);

// function return:
function abc() {
    return 18;
};

let result = abc();
console.log(result);

// async coding:

async function printUser() {
    let blob = await fetch('https://randomuser.me/api/');
    let response = await blob.json();

    console.log(response?.results[0]);
};

printUser();

// forEach, map, filter, find, indexOf:

let arr1 = [1, 2, 2, 3, 4, 5];
arr1.forEach(arr => console.log(arr));

let newArr = arr1.map((item) => item * 2);
console.log(newArr);

let filterArr = arr1.filter((item) => {
    if(item >= 2) {
        return true;
    } else {
        return false;
    };
});
console.log(filterArr);

let findArr = arr1.find(item => item === 2);
console.log(findArr);

console.log(arr1.indexOf(2));