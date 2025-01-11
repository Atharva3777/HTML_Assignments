let Mark1mass = 78;
let Mark1height = 1.69;
let John1mass = 92;
let John1height = 1.95;

let Mark2mass = 95;
let Mark2height = 1.88;
let John2mass = 85;
let John2height = 1.76;


// TEST CASE 1
const MarkBMI = Mark1mass/Mark1height**2;
document.getElementById("demo1").innerHTML = `Mark's BMI is ${MarkBMI}`;

const JohnBMI = John1mass/John1height**2;
document.getElementById("demo2").innerHTML = `John's BMI is ${JohnBMI}`;

let markHigherBMI;
var mark1 = MarkBMI;
var john1 = JohnBMI;

if (markHigherBMI=MarkBMI > JohnBMI) {
    document.getElementById("demo3").innerHTML = `Mark has ${mark1.toPrecision(3)} than John's ${john1.toPrecision(3)}`
}else {
    document.getElementById("demo4").innerHTML =  `John has ${john1.toPrecision(3)} than Mark's ${mark1.toPrecision(3)}`
}
 
// TEST CASE 2
const Mark2BMI = Mark2mass/Mark2height**2;
document.getElementById("demo5").innerHTML = `Mark's BMI is ${Mark2BMI}`;

const John2BMI = John2mass/John2height**2;
document.getElementById("demo6").innerHTML = `John's BMI is ${John2BMI}`;

let markHigher2BMI;
var mark2 = Mark2BMI;
var john2 = John2BMI;

if (markHigher2BMI=Mark2BMI > John2BMI) {
    document.getElementById("demo7").innerHTML = `Mark has ${mark2.toPrecision(3)} more than John's ${john2.toPrecision(3)}!`
}else {
    document.getElementById("demo8").innerHTML = `John has ${john2.toPrecision(3)} more than John's ${mark2.toPrecision(3)}!`
}

