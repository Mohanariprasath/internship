function BMI(weight,height){
    let ans=(weight/(height)**2).toFixed(1);
    if(ans<18.5)
        return `Your BMI is ${ans} , so you are underweight`;
    else if(ans>=18.5 && ans<=24.9)
        return `Your BMI is ${ans} , so you have normalweight`;
    else
        return `Your BMI is ${ans} , so you have overweight`;
}
var bmi=BMI(65,1.8);
console.log(bmi);