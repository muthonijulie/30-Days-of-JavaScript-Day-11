//pure function
function double(n){
    return n*2;
}
//console.log(double(5));

//impure function
function multiply(n){
    return n * Math.random();
}
// console.log(multiply(5));
// console.log(multiply(5));

//JSON.stringyfy-converts values into strings
const arr=[4,6,7];
//console.log(typeof JSON.stringify(arr));

//JSON.parser
const arrStr="[4,6,8]";
//console.log(typeof JSON.parse(arrStr));

//Memoization
let callCount=0;
//const memoize=function(fn){
   // const cache=[];
    //return function(x){
        // const key=JSON.stringify(x);
        // if (cache[key]){
        //     return cache[key];
        // }
        // let result=fn(x);
        // callCount++;
        // cache[key]=result;
        // return result;
    //};
//};
function double(n){
    return n*2;
}
const memoize=function(fn){
    const cache={};
   
    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
       
        let result=fn(...args);
        callCount++;
        cache[key]=result;
        return result;


    };
};
function sum(a,b){
    return a+b;
}
function fib(n){
    if (n<=1) return 1;
    return fib(n-1)+fib(n-2);
}
function factorial(n){
    if (n<=1) return 1;
    return n*factorial(n-1);
}
//const myfunc=memoize(double);
//console.log(myfunc(5));
//console.log(myfunc(5));
const examp1=memoize(sum);
const examp2=memoize(fib);
const examp3=memoize(factorial);

 console.log(examp1(2,2));
 console.log(examp1(2,2));
 console.log(callCount);
 console.log(examp1(1,2));
 console.log(callCount);

console.log(examp2(5));
console.log(callCount);

console.log(examp3(2));
console.log(examp3(3));
console.log(examp3(2));
console.log(callCount);
console.log(examp3(3));
console.log(callCount);