// write a for loop that prints your name 20 times

for(let i = 0; i < 20; i++) {
    console.log("Ahmed")
}


// write a while that prints your surname 20 times
let i = 0;
while (i < 20) {
    console.log("Dini");
    i++;
}

do {
    console.log("Dini from do while");
    i++;
} 

while ( i < 5 )




// write if/else if, chained code to check what day of the day it is and print something

let today = "monday";

if(today == "Monday") {
    console.log("It is Coding Day")
} else if (today == "Tuesday") {
    console.log("It is my off day")
} else {
    console.log("ask me personally which day")
}

// convert the above if/else to switch

switch (today) {
    case "Monday":
        console.log("It is Coding Day, from switch")
        break;
    case "Tuesday":
        console.log("It is my off day, from switch")
        break;

    default:
        console.log("ask me personally which day, from switch")
        break;
}

function multiplyNumbers(num1, num2) {
    const result = num1 * num2;
    return result;
  }
  
  const number1 = 5;
  const number2 = 3;
  const multiplicationResult = multiplyNumbers(number1, number2);
  
  console.log(`The result of multiplying ${number1} and ${number2} is: ${multiplicationResult}`);
  
function multiplyAndPrint(num1, num2) {
    console.log(num1 * num2);
  }
  
  multiplyAndPrint(5, 3);


function multiply ( num1, num2){
let result = num1 * num2;
   return result; 
 }


 function multiply ( num1, num2) {
    let result = num1 * num2;
    return result;
 }
 let sum = multiply (5,6)
console.log(sum)


function multiply (num1, num2)  {
return num1 * num2 
}

console.log (multiply(4,5))





function multiply  (num1, num2) {
    let result = num1 * num2;
    return 
}


function multiply (num1, num2)  {
    return num1 * num2 
    }
    
    console.log (multiply(5,5))
    // write a simple program that calculates your 
    // salary and tax if salary is 500 and the tax is 20% 
    // what is the take home salary

// 

let salary = 500;
let tax = .2;
let takeHomesalary = salary - (salary * tax);
console.log ('your take home salary is' + takeHomesalary)

// if we have 1000 laptops and  1009 bags 
// how many bags remaind if you put one laptop in each bag 

let totalLaptop = 1000
let totalBag = 1009
let remainder = totalBag % totalLaptop
console.log(remainder)


function multiply (num1 ,num2) {
      return (num1 * num2)
}

console.log (multiply(6,6))







