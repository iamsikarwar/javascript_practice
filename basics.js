// Variables, Data Types, Operators
// A. variables
// 1. Create variables to store: name, age, city name and print it on console
 let name = "Sunil Sikarwar";
 let age = 20;
 let cityName = "Agra";
 console.log(name);
 console.log(age);
 console.log(cityName);


// 2. Store two numbers in variables and print their sum.

let firstNumber =  10;
let secondNumber = 23;
 console.log(firstNumber + secondNumber );

 //3. Swap two variables.
 
 let a = 45;
 let b = 75; //  swap two variables in JavaScript by destructuring assignment
[a , b] = [b ,a]
 console.log(a);
 console.log(b);

// 4. Create a variable score and increase it by 10.
let score = 10;
 score = score + 10;
 console.log(score);

 // B.Data Types Practice
//1.Identify the data type of--
let user= {
    name: "Sunil Sikarwar",
    age: 20,
    city: "Agra",
};
console.log(typeof user.name);
console.log(typeof user.age);
console.log(typeof user.city);

//2. Create variables of different types
let userName = "Sunil Sikarwar" // string
let userAge = 20; // number
let userLoggedin = false // boolen
let userJob; // undefined
console.log(userJob);
console.log(typeof userJob);

//3. Convert a string number into a real number.
 let c = "25";
 console.log(c)


 // C. Operators Practice
 let d = 15;
 let e = 4; // Add, subs, mult, div module
 console.log(d+e);
 console.log(d-e);
 console.log(d*e);
 console.log(d/e);
 console.log(d%e);

 //2. Check if two numbers are equal.
 let f = 15;
 let g = 4;
// if(f==g){
//     console.log("Number is equal");
// }
console.log(f==g);

//3. Check if a person is eligible to vote.
let voterName ={
 name: "Sunil Sikarwar",
 age:  20,
};
if(age>18){
    console.log("You are eligible for vote")
}else{
    console.log("You are not eligible")
}

//4.Check whether a number is even or odd 
let num = 12;
if(num%2===0){
    console.log("Number is even")
}else{
    console.log("number is not even")
}

// Mixed Beginner Challenges
//1.Calculate the area of a rectangle.
let length = 12;
let width = 10;
const area = length * width;
console.log(area);

//2. Calculate the average of 3 numbers.

let h = 10;
let i = 20;
let j = 30;
 let average = (h+i+j)/3
 console.log(average);  

 //3.Convert Celsius to Fahrenheit. F = (C × 9/5) + 32
 let Celsius = 50;
 let F = (Celsius* 9/5) + 32;
 console.log(F)

 //4. Calculate total bill.
 let item1 = 200;
let item2 = 150;
let item3 = 100;
let total = item1+item2+item3;
console.log(total);

//5. Check if a number is positive, negative, or zero.
let number = -5;
if(number>0){
    console.log("number is positive");
}else if(number<0){
    console.log("number is negative")
} else{
    console.log("number is  zero");
}
