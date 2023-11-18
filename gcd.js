import {name} from "Factors_Gcd.js";
//to get standar deviation of an array of numbers
let dataset  =  [1,2,3,4]
//1)mean 2) deviation-sqr 3)variance = sum of dev sqr/n 4)variance sqr rut => std dev

let mean  = dataset.reduce((sum,current) => (sum += current),0)/dataset.length;
console.log(mean);
let deviations_sqr = dataset.map((num) =>(Math.pow(Math.abs(mean-num)),2));

console.log(deviations_sqr);



function greet(name) {
    console.log(`Hi ${name}`);
}

greet(name);