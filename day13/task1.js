var fruit=["apple","banana","orange","cherry","grapes"]
console.log(fruit[2]);
fruit.push('mango');
console.log(fruit);
fruit.shift();
console.log(fruit);
console.log(fruit.length);
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
fruit.reverse();
console.log(fruit);
var num=[1,2,3,4,5];
sm=0;
for(let j=0;j<fruit.length;j++){
    sm+=num[j];
}
console.log(sm);