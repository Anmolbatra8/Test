let dataset = [2,4,4,4,5,5,7,9];

//to get Mean of the dataset:

let freq = dataset.length;
const mean = dataset.reduce((sum,data) => sum += data,0) / freq;
console.log(mean)

//to get variance
let dataset_sqrs = dataset.map((x)=>(x**2));
console.log(dataset_sqrs);

//var varience= (dataset_sqrs).reduce((a,b)=> a+ b)/freq- Math.pow(mean , 2)
//to get a new array of values which  have to go  through a function , we can use "map" function 

let deviations_sqr = dataset.map( d1=> (Math.pow(Math.abs(mean-d1),2)) );
let variance = deviations_sqr.reduce((vari,dsqr) =>( vari+dsqr),0)/freq;
//Math.pow(Math.abs(mean-d1),2)
console.log(variance);

//for standard deviation 
let std_deviation = Math.pow(variance,0.5);
console.log(std_deviation);