const array1 = ["item1", "item2", "item3"];

// for(let i = 0; i< array1.length; i++) {
//     console.log(array1[i]);
// }

const array2 = {firstName: "Abhi", lastName : "Choudhary"};
// console.log(array2.firstName);

const {firstName, lastName} = array2;
// console.log("My First Name is " + firstName + " and my Last Name is " + lastName);


const fruits = ["Mango", "Orange", "blueberry", "Mango"];
let text = "<ul>";
fruits.forEach(myFunction)
text += "</ul>";
document.body.innerHTML = text;

function myFunction(value) {
    text += "<li>" + value + "</li>"
}

const person = {
    firstName: "Michael",
    lastName: "DeSanta",
    age: 50,
    eyeColor: "black",
}

const x = person;
x.age = 80;
// console.log(person.age);


const array3 = [1, 4, 9, 16];
const map1 = array3.map(x => x * 2);
// console.log(map1);

const map2 = fruits.map((fruit, index) => {
    // console.log(fruit)
})

const ages = [32, 33, 16, 40];
// const result = ages.filter(check)

function checkAge(age) {
    return age > document.getElementById("ageToCheck").value;
}

// const button = document.querySelector('.btn');
// button.addEventListener('click', myFunction)

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.filter(checkAge);
// }

const array4 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array4.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);

// console.log(sumWithInitial);

const getMax = (a, b) => Math.max(a, b);

// const reducer = [ 400].reduce(getMax);
// console.log(reducer)

// const array5 = [15, 16 , 17, 18, 19];

// function reducer(previous, current, index, array5) {
//     const returns = previous + current;
//     console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`)
//     return returns;
// }

// array5.reduce(reducer,0);


// let initialValue = 0;
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue.x;
// }, initialValue); 

// console.log(sum);


// Flattening of Arrays;
// let flattened = [[0,1], [2, 3], [4, 5], [6, 7]].reduce(function(previousValue, currentValue) {
//     console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
//     return previousValue.concat(currentValue);
// }, [])

// console.log(flattened);


// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let countedNames = names.reduce( function(allNames, name) {
//     if(name in allNames) {
//         allNames[name]++
//     }
//     else {
//         allNames[name] = 1;
//     }
//     console.log(`allNames: ${allNames}, name: ${name}`);
//     return allNames;
// }, {})

// console.log(countedNames);

// const people = [
//    {name: 'Alice', age: 21}, 
//    {name: 'Max', age: 20}, 
//    {name: 'Jane', age: 20} 
// ]

// function groupBy(objectArray, property) {
//     return objectArray.reduce((acc, obj) => {
//         let key = obj[property];
//         console.log(`key: ${key}`);
//         if(!acc[key]) {
//             acc[key] = []
//         }
//         console.log( acc[key]);
//         acc[key].push(obj)
//         return acc
//     }, {});
// }

// let groupPeople = groupBy(people, 'age');
// console.log(groupPeople)


// const friends = [
//     {
//         name: 'Anna',
//         books: ['Bible', 'Harry Potter'],
//         age: 21
//     },
//     {
//         name: 'Bob',
//         books: ['War and peace', 'Romeo and Juliet'],
//         age: 26
//     },
//     {
//         name: 'Alice',
//         books: ['The Alchemist', 'Ikigai'],
//         age: 28
//     }

// ]


// let allbooks = friends.reduce(function(previousValue, currentValue) {
//     return [...previousValue, ...currentValue.books];
// }, ['Vagabond'])

// console.log(allbooks);


// const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

// let myArrayWithNoDuplicates = myArray.reduce(function(previousValue, currentValue) {
//     if(previousValue.indexOf(currentValue) === -1) {
//         previousValue.push(currentValue);
//     }

//     return previousValue;
// }, [])

// console.log(myArrayWithNoDuplicates);


const numbers = [-5, 6, 2, 0];

const doubledNumbers = numbers.reduce((previousValue, currentValue) => {
    if(currentValue > 0) {
        const doubled = currentValue * 2;
        previousValue.push(doubled);
    }
    return previousValue;
}, [])

console.log(doubledNumbers);