let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

// console.log(stocks.liquid[1]);

 //order function:
let order = (fruit_name,call_production) => {setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
   call_production();
  },2000);
}

 //Production function:
 let production = () => {

 setTimeout(()=>{
 console.log("The Production has started !");
//nesting other Timeout function inside : 
setTimeout(()=> {
 console.log("The Fruit has been chopped");

 //2
 setTimeout(()=> {
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added !`);
 //3
 setTimeout(()=> {
    console.log("The machine has started");
 
 //4:
 setTimeout(()=>{
    console.log(`Ice cream placed on ${stocks.holder[0]}`);

 //5:
 setTimeout(() => {
  console.log(`toppings ${stocks.toppings[1]} selected !`);
 //6:
 setTimeout(()=>{
    console.log("here's your ice cream mam !");
 
 
},2000) 
},3000)
},2000)
},1000)
 },1000)
},2000)
 },0)


 }

 order(1,production);