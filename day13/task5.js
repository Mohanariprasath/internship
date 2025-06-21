function BMI(weight,height){
    let ans=weight/(height)**2;
    return Math.round(ans);
}
var bmi=BMI(65,1.8);
console.log(bmi);