// 1) To calCulate GCD of Array (2 or more nums):
function gcd(a,b ) {
    if(a < b) {
        //swapping a and b if a is not larger than b
        [a,b] = [b,a];
    }

let r = a % b;
if(r == 0) {
return b;
}
else {
//unlike in Manual Algorithm , where we shift values
//Here we can directly pass 'b' and 'r' in functions resp.
return (gcd(b,r));
}
}
console.log(gcd(60,36));

function gcd_of_arr(arr) {
    if(arr.length === 0 ) {
        return undefined;
    }
    let n = arr.length;
    let result = arr[0];
    for(let num of arr) {
        result=gcd(num,result);
    }
    return result;
    }

    console.log(gcd_of_arr([1,2,3]));
 // 1) END ->