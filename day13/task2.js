const fruit1=["apple","banana","cherry","orange"];
const fruit2=["grapes","pineapple"];
const fruits=fruit1.concat(fruit2);
console.log(fruits);

fruits.splice(2,2);
console.log(fruits);

const arr=[67,6,45,7,99,999];
const arr1=arr.toSorted((a,b)=>a-b);
console.log(arr1);

const search= fruit1.includes("orange");
console.log(search);

const index= fruit1.indexOf("cherry");
console.log(index);