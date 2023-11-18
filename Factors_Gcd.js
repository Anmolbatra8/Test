// Function to get factors of a number:

function factorsof(n) {
    let factors = [];
    let divisor = 2;
    while(n > 2) {
        if(n % divisor == 0) {
            factors.push(divisor);
            n /= divisor;
        }
        else {
            ++divisor;
        }
    }
    return factors;
}

console.log("Factors :" ,factorsof(9));


//To find gcd of a pair of number using Euclidian Algorithm:
let a = 60;
let b = 36;

//  function to get gcd:

function gcd(a,b) {
    a = (a > b) ? a : b;
let r = a % b;
if(r == 0) {
    return b;
}  else{
    a = b;
    b = r;
    return gcd(a,b);
}          
}
console.log(gcd(36,60));


// Function to get gcd of an array of numbers:

let array1 = [2,4,6,8,16];

function gcdofall(arr) {
   let result = arr[0];
   for(let i = 1;i < arr.length;i++) {
    result = gcd(arr[i],result);
   }
   return result;
}

console.log(gcdofall(array1)) ;
export const name  = "Anmol";
